<template>
  <div class="min-h-screen flex items-center justify-center p-8">
    <div class="w-full max-w-md">
      <div class="bg-peach-100 rounded-3xl p-8 backdrop-blur-sm bg-white/20">
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold mb-2">紫微問數❤靈運指掌</h1>
        </div>

        <form @submit.prevent="calculateLifePathNumber" class="space-y-6">
          <!-- 日期選擇器 -->
          <div class="relative">
            <UInput
              v-model="birthDate"
              type="date"
              placeholder="年/月/日"
              class="w-full py-3 px-4 bg-white rounded-lg text-lg"
              required
            />
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <button type="button" class="text-gray-400">
                <span class="text-xs">▲</span>
              </button>
              <button type="button" class="text-gray-400">
                <span class="text-xs">▼</span>
              </button>
            </div>
          </div>

          <!-- 計算按鈕 -->
          <button
            type="submit"
            class="w-full bg-black text-white py-3 px-4 rounded-lg text-lg hover:bg-gray-800 transition-colors">
            開始計算
          </button>
        </form>

        <!-- 結果顯示 -->
        <div v-if="result" class="mt-8 space-y-4">
          <div class="text-center">
            <h2 class="text-3xl font-bold">
              您的生命靈數是：{{ result.number }}
            </h2>
            <p class="mt-2">
              {{ result.description }}
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(trait, index) in result.traits" :key="index"
              class="bg-white/30 backdrop-blur-sm rounded-lg p-4">
              <h3 class="font-semibold mb-2">{{ trait.title }}</h3>
              <p class="text-sm">
                {{ trait.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Trait {
  title: string
  description: string
}

interface LifePathResult {
  number: number
  description: string
  traits: Trait[]
}

const birthDate = ref('')
const result = ref<LifePathResult | null>(null)

const calculateNumber = (num: number): number => {
  if (num < 10) return num
  return calculateNumber(
    String(num)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0)
  )
}

const getLifePathDescription = (number: number): LifePathResult => {
  const descriptions: Record<number, LifePathResult> = {
    1: {
      number: 1,
      description: '領導者、創新者，具有強烈的獨立性和創造力',
      traits: [
        { title: '性格特點', description: '獨立、有創意、果斷、領導力強' },
        { title: '最佳發展方向', description: '創業、管理、領導職位' },
        { title: '人際關係', description: '喜歡獨立自主，需要學會與他人合作' }
      ]
    },
    2: {
      number: 2,
      description: '和平使者，具有良好的外交能力和耐心',
      traits: [
        { title: '性格特點', description: '敏感、直覺強、富同情心、善解人意' },
        { title: '最佳發展方向', description: '諮商、外交、藝術、教育' },
        { title: '人際關係', description: '善於維護關係，容易感受他人情緒' }
      ]
    },
    3: {
      number: 3,
      description: '表達者、藝術家，充滿創造力和樂觀精神',
      traits: [
        { title: '性格特點', description: '樂觀、富創意、表達力強、社交能力佳' },
        { title: '最佳發展方向', description: '藝術、表演、寫作、演講' },
        { title: '人際關係', description: '受歡迎、善於交際，但需要注意深度' }
      ]
    },
    4: {
      number: 4,
      description: '建造者、組織者，務實且可靠',
      traits: [
        { title: '性格特點', description: '務實、可靠、有條理、重視細節' },
        { title: '最佳發展方向', description: '工程、建築、財務、專案管理' },
        { title: '人際關係', description: '重視誠信，建立穩固的關係' }
      ]
    },
    5: {
      number: 5,
      description: '冒險家、自由者，追求變化與自由',
      traits: [
        { title: '性格特點', description: '適應力強、好奇心旺盛、追求自由' },
        { title: '最佳發展方向', description: '銷售、旅遊、媒體、自由職業' },
        { title: '人際關係', description: '廣交朋友，但需要保持承諾' }
      ]
    },
    6: {
      number: 6,
      description: '照顧者、理想主義者，富有同情心與責任感',
      traits: [
        { title: '性格特點', description: '富同情心、負責任、重視和諧' },
        { title: '最佳發展方向', description: '醫療、教育、諮商、服務業' },
        { title: '人際關係', description: '重視家庭，善於照顧他人' }
      ]
    },
    7: {
      number: 7,
      description: '智者、分析者，追求真理與智慧',
      traits: [
        { title: '性格特點', description: '分析力強、理性、追求完美' },
        { title: '最佳發展方向', description: '研究、科技、哲學、教育' },
        { title: '人際關係', description: '重視獨處，需要個人空間' }
      ]
    },
    8: {
      number: 8,
      description: '權威者、實現者，具有強大的物質成就動力',
      traits: [
        { title: '性格特點', description: '有野心、執行力強、重視成就' },
        { title: '最佳發展方向', description: '企業管理、金融、投資' },
        { title: '人際關係', description: '重視權威與地位，需要平衡生活' }
      ]
    },
    9: {
      number: 9,
      description: '智慧者、人道主義者，具有博愛精神',
      traits: [
        { title: '性格特點', description: '慈悲心強、理想主義、有智慧' },
        { title: '最佳發展方向', description: '公益、藝術、心靈成長' },
        { title: '人際關係', description: '樂於助人，重視精神層面' }
      ]
    }
  }
  return descriptions[number] || {
    number,
    description: '計算中...',
    traits: []
  }
}

const calculateLifePathNumber = () => {
  const date = new Date(birthDate.value)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const yearSum = calculateNumber(year)
  const monthSum = calculateNumber(month)
  const daySum = calculateNumber(day)
  const lifePathNumber = calculateNumber(yearSum + monthSum + daySum)

  result.value = getLifePathDescription(lifePathNumber)
}
</script>

<style scoped>
/* 自定義日期選擇器樣式 */
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

input[type="date"] {
  @apply appearance-none;
}

.bg-peach-100 {
  background-color: rgba(255, 218, 185, 0.5);
}

/* 調整輸入框樣式 */
.UInput {
  @apply bg-transparent border-none;
}

/* 調整按鈕樣式 */
button[type="submit"] {
  @apply bg-black text-white font-bold;
}
</style> 