'use client'

import React, { useState } from 'react';
import { calculateAllNumbers, CalculationResults } from './utils/calculations';
import LifeNumberGrid from './components/LifeNumberGrid';
import ResultDisplay from './components/ResultDisplay';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

export default function Home() {
  const [birthdate, setBirthdate] = useState('1969-09-12');
  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleCalculate = () => {
    const calculatedResults = calculateAllNumbers(birthdate);
    setResults(calculatedResults);
  };

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ darkMode, toggleDarkMode }) => (
          <div className={`flex justify-center items-center min-h-screen pt-12 transition-colors duration-300 ${
            darkMode ? 'dark bg-black' : 'bg-white'
          }`}>
            
            <div className={`relative w-[98%] sm:w-[800px] p-4 md:p-8 rounded-lg border border-black/10 dark:border-white/10 transition-colors duration-300 ${
              darkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}>
              <br/><br/><br/><br/><br/><br/><br/><hr/><br/>
              <h1 className={`text-2xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-black dark:text-white`}>
                遇見數字❤️生活豐富&nbsp;
                {/* 小字黑色 1.0 */}
                <span className="text-black/60 dark:text-white/60 text-sm">ver: 1.0</span>
              </h1>              
              <div className="absolute top-20 right-4">
                日夜模式:<button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
                >
                  {darkMode ? 
                    <FaSun className="text-white" /> : 
                    <FaMoon className="text-black" />
                  }
                </button>
              </div>
              <h1 className={`text-2xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-purple-600 dark:text-white`}>
                生命運數馬上算 </h1>
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
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <a id="courses"></a>
              <br/><br/><br/><br/><hr/><br/>
              <img 
                src="/images/1.jpg" 
                alt="課程圖片" 
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-300 dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg relative overflow-hidden">
                  
                  <div className="z-10 w-4/4">
                    <video className="w-full h-auto mb-4 md:mb-6" autoPlay loop playsInline muted>
                      <source src="/images/lifenumber.mp4" type="video/mp4" />
                    </video> 
                  </div>
                  </div>
                </div>
                
                <div className="bg-gray-300 dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg relative overflow-hidden">
                <div className="relative z-10">    
                    <h2 className="text-2xl font-bold mb-4 text-black dark:text-white whitespace-nowrap overflow-visible">【生命靈數運用班】</h2>
                    <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg relative overflow-hidden">
                    <p className="text-sm text-red-600 dark:text-blue-400 mb-2">#需先上完蔡建安老師的生命靈數課或有基本概念者#</p>
                    <hr className="my-4"/>
                    <p className="text-1xl text-black/70 dark:text-white/70 mb-4">
                      將深入案例講解，結合遊戲互動及特色卡牌運用，讓你在輕鬆的氣氛中探索自己與他人的生命奧秘，體驗全新的自我發現之旅！
                    </p>
                    {/* <hr className="my-4"/>
                    <p className="text-1xl text-black/70 dark:text-white/70 mb-4">
                    上午: 將深入案例互動講解、清楚了解解盤脈絡。
                    </p>
                    <hr className="my-4"/>
                    <p className="text-1xl text-black/70 dark:text-white/70 mb-4">
                    下午: 探索各個數字在順境和逆境中如何互相學習和啟發、結合遊戲互動及特色卡牌運用、讓你在輕鬆的氣氛中探索自己與他人的生命奧秘、體驗全新的遇見生命數字之旅！
                    </p> */}
                    <hr className="my-4"/>
                    <div className="text-1xl font-bold text-amber-500 mb-2">113/12/22(日)</div>
                    <div className="text-1xl text-black/60 dark:text-white/60">
                      <p>地點：台中(霧峰教室)</p>
                      <hr className="my-4"/>                    
                    <div className="text-1xl font-bold text-amber-500 mb-2">114/1/4(六)</div>
                    <div className="text-1xl text-black/60 dark:text-white/60">
                      <p>地點：高雄 (13F小教室))</p>
                      <p className="text-blue-600 dark:text-blue-400">
                        <br/>
                        <button 
                          type="button" 
                          onClick={() => window.open('https://meet-1350.com.tw/mycourse/after-class/53340/', '_blank')}
                          className="border-2 border-gray-600 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                          立即報名
                        </button>
                      </p>
                    </div>
                    </div>                  
                    </div>                 
                </div>
                <br/><hr/><br/>
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">【土耳其燈 手作班】</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2/3 h-full">
                    <img 
                      src="/images/rose2.png" 
                      alt="講師照片" 
                      className="object-contain h-full w-full opacity-70"
                    />
                  </div>
                  <div className="relative z-10 w-3/5">
                    <h2 className="text-1xl font-bold mb-4 text-black dark:text-white whitespace-nowrap overflow-visible">土耳其能量燈 手作班</h2>
                    <p className="text-1xl text-black/70 dark:text-white/70 mb-2"></p>
                    <div className="text-1xl font-bold text-amber-500 mb-2">發現生命靈數之光<br/>獨特色彩心靈之旅</div>
                    <p className="text-sm font-bold text-black/70 dark:text-white/70 mb-4">
                      色彩冒險結合生命靈數的補數顏色和土耳其燈的神秘光芒。透過生命靈數的啟示以獨特的方式探索內在特質，轉化為美麗的土耳其燈設計，為生命注入更多色彩和靈感。
                    </p>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      <p>地點：<span className="text-1xl font-bold text-amber-500 mb-2">即將開課</span></p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-full">
                    <img 
                      src="/images/lanmpcraft.png" 
                      alt="照片" 
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="relative z-10 w-3/5 justify-center">
                    <video 
                      className="w-full h-auto mb-4 md:mb-6" 
                      controls
                      playsInline
                    >
                      <source src="/images/turkey.mp4" type="video/mp4" />
                    </video>            
                  </div>
                </div>
              </div>
              </div>
              
              <a id="consultation"></a>
              <br/><br/><br/><br/><hr/><br/>
              <h1 id="consultation" className="text-2xl font-bold mb-6 text-black dark:text-white">諮詢項目</h1>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg">
                  <h2 className="text-1xl font-semibold mb-3 text-black dark:text-white">「生命運數/ 一對一」</h2>
                  <p className="text-sm text-black/70 dark:text-white/70 mb-4">了解個人天賦特質、改善負面模式，建立和諧關係，增強自我覺察與幸福感。</p>
                  <p className="text-sm font-semibold text-black dark:text-white">NT$ 1300 / 120分鐘</p>
                </div>
                <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg">
                  <h2 className="text-1xl font-semibold mb-3 text-black dark:text-white">「建立有愛組織團隊」</h2>
                  <p className="text-sm text-black/70 dark:text-white/70 mb-4">以生命靈數探索成員的特質與角色，提升協作效率與創意表現。透過遊戲與互動，建立最佳合作策略，助力團隊達成目標，創造卓越成果。</p>
                  <p className="text-sm font-semibold text-black dark:text-white">時間 內容/ 量身訂作</p>
                </div>
              </div>
              
              <a id="contact"></a>
              <br/><br/><br/><br/><hr/><br/>
              <h1 id="contact" className="text-2xl font-bold mb-6 text-black dark:text-white">立即聯絡我</h1>
              <div className="max-w-2xl mx-auto bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6 rounded-lg">
                <center>
                  <div><img src="/images/861304.jpg" width="300" height="300"></img></div><br/><br/>
                  <div className="text-1xl text-black-500 mb-2 dark:text-white">建安學院特約講師 陳瑞嬌老師</div>
                  <div className="text-sm text-black-500 mb-2 dark:text-white">聯絡電話: 0909-861-304</div><p/><br/>
                  <div className="text-sm text-amber-800 mb-2 dark:text-white-300">邀您<br/>成為地球1350 心生活<br/>種子講師。</div><br/>
                  <div className="text-sm text-black-800 mb-2 dark:text-white-300">將在生命靈數應用系列課程中深入案例講解，結合遊戲互動及特色卡牌運用、靜心手作療癒課程、讓你在輕鬆的氣氛中探索自己與他人的生命奧秘，建立幸福感、體驗全新的發現之旅！</div><br/>
                  <div className="text-sm text-amber-800 mb-2 dark:text-white-300">認識自己、發現自己<br/>做最好的自己</div>
                </center>      
              </div>
              
              <a id="shop"></a>
              <br/><br/><br/><br/><hr/><br/>
              <h1 id="shop" className="text-2xl font-bold mb-6 text-black dark:text-white">商品展售</h1>
              <div className="flex items-center justify-center min-h-[400px] bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-8">
                <div className="text-center">
                  <h2 className="text-1xl font-semibold mb-4 text-black dark:text-white">
                    商品即將上線
                  </h2>
                  <p className="text-sm text-black/70 dark:text-white/70">
                    我們正在準備更好的商品與服務，敬請期待！
                  </p>
                </div>
              </div>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
