'use client'

import React, { useState } from 'react';
import { calculateAllNumbers, CalculationResults } from '../utils/calculations';
import LifeNumberGrid from './LifeNumberGrid';
import ResultDisplay from './ResultDisplay';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

export default function LifeNumberCalculator() {
  const [birthdate, setBirthdate] = useState('1969-09-12');
  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleCalculate = () => {
    const calculatedResults = calculateAllNumbers(birthdate);
    setResults(calculatedResults);
  };

  return (
    <ThemeContext.Consumer>
      {({ darkMode, toggleDarkMode }) => (
        <div className={`flex justify-center items-center transition-colors duration-300`}>
          <div className={`relative w-[98%] sm:w-[480px] p-4 md:p-8 rounded-lg border border-black/10 dark:border-white/10 transition-colors duration-300`}>
            <br/><hr/><br/>
            <h1 className={`text-2xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-black dark:text-white`}>
              遇見數字❤️生活豐富&nbsp;
              <span className="text-black/60 dark:text-white/60 text-sm">ver: 1.0</span>
            </h1>
            <video className="w-full h-auto mb-4 md:mb-6" autoPlay loop playsInline muted>
              <source src="/images/lifenumber.mp4" type="video/mp4" />
            </video>
            <br/><hr/><br/>
            <div className="absolute top-4 right-4">
              日夜模式:
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
              >
                {darkMode ? 
                  <FaSun className="text-white" /> : 
                  <FaMoon className="text-black" />
                }
              </button>
            </div>
            <h1 className={`text-2xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-black dark:text-white`}>
              生命運數馬上算
            </h1>
            <div className="mb-4 md:mb-6 flex flex-col items-center">
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className={`w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-1 transition-colors duration-300 
                  ${darkMode 
                    ? 'bg-black border-white/10 focus:ring-white text-white' 
                    : 'bg-white border-black/10 focus:ring-black text-black'
                  }
                  appearance-none`}
                style={{ colorScheme: darkMode ? 'dark' : 'light' }}
              />
              <button 
                onClick={handleCalculate} 
                className={`w-full p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:scale-105 
                  ${darkMode 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                  }`}
              >
                計算
              </button>
            </div>
            <AnimatePresence>
              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <ResultDisplay results={results} />
                  <LifeNumberGrid results={results} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
} 