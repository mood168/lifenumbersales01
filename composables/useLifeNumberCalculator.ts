import type { Ref } from 'vue'

export interface Trait {
  title: string
  description: string
  keywords?: string[]
}

export interface LifePathResult {
  birthDate: any
  number: number
  description: string
  traits: Array<{
    title: string
    description: string
    keywords?: string[]
  }>
  strengths: string[]
  weaknesses: string[]
  careerPaths: string[]
  relationships: string[]
}

export const useLifeNumberCalculator = () => {
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
        birthDate: '1990-01-01',
        description: '領導者、創新者，具有強烈的獨立性和創造力。你天生就是一個領導者，具有強大的創造力和獨特的思維方式。',
        traits: [
          { title: '性格特點', description: '獨立、有創意、果斷、領導力強、自信', keywords: ['獨立', '創意', '果斷'] },
          { title: '天賦才能', description: '創新思維、領導能力、獨立決策、開創新局' },
          { title: '成長課題', description: '需要學會傾聽他人意見，培養耐心和合作精神' }
        ],
        strengths: ['領導力', '創造力', '獨立性', '果斷', '自信'],
        weaknesses: ['固執', '專制', '自我中心'],
        careerPaths: ['企業家', '管理者', '創意總監', '專案領導'],
        relationships: ['重視自由，需要理解伴侶的需求', '適合與理解其獨立性的伴侶相處']
      },
      2: {
        number: 2,
        birthDate: '1990-01-01',
        description: '和平使者，具有良好的外交能力和耐心。你是天生的調解者，具有敏銳的直覺和同理心。',
        traits: [
          { title: '性格特點', description: '敏感、直覺強、富同情心、善解人意、和平', keywords: ['敏感', '直覺', '和平'] },
          { title: '天賦才能', description: '外交能力、調解糾紛、團隊合作、細心觀察' },
          { title: '成長課題', description: '需要建立自信，學會表達自己的需求和立場' }
        ],
        strengths: ['外交能力', '同理心', '耐心', '細心', '合作'],
        weaknesses: ['優柔寡斷', '過度敏感', '依賴'],
        careerPaths: ['外交官', '諮商師', '教師', '人資專員'],
        relationships: ['重視和諧，善於維護關係', '需要有耐心和理解的伴侶']
      },
      3: {
        number: 3,
        birthDate: '1990-01-01',
        description: '表達者、藝術家，充滿創造力和樂觀精神。你是天生的表演者和溝通者。',
        traits: [
          { title: '性格特點', description: '樂觀、富創意、表達力強、社交能力佳、活潑', keywords: ['樂觀', '創意', '表達'] },
          { title: '天賦才能', description: '藝術創作、口才表達、社交互動、娛樂他人' },
          { title: '成長課題', description: '需要學會專注和深入，避免過於表面化' }
        ],
        strengths: ['表達能力', '創造力', '社交能力', '樂觀', '幽默'],
        weaknesses: ['散漫', '膚淺', '誇張'],
        careerPaths: ['藝術家', '作家', '演說家', '演藝人員'],
        relationships: ['喜歡社交，需要理解其表現慾', '適合能欣賞其才華的伴侶']
      },
      4: {
        number: 4,
        birthDate: '1990-01-01',
        description: '建造者、組織者，務實且可靠。你是值得信賴的基石，具有強大的組織能力。',
        traits: [
          { title: '性格特點', description: '務實、可靠、有條理、重視細節、穩重', keywords: ['務實', '可靠', '條理'] },
          { title: '天賦才能', description: '組織規劃、執行力強、注重細節、建立系統' },
          { title: '成長課題', description: '需要學會靈活應變，避免過於固執和死板' }
        ],
        strengths: ['組織能力', '可靠', '務實', '耐心', '細心'],
        weaknesses: ['固執', '死板', '工作狂'],
        careerPaths: ['工程師', '建築師', '財務專家', '專案經理'],
        relationships: ['重視穩定，需要理解其務實性格', '適合同樣重視責任的伴侶']
      },
      5: {
        number: 5,
        birthDate: '1990-01-01',
        description: '冒險家、自由者，追求變化與自由。你是充滿活力的探索者。',
        traits: [
          { title: '性格特點', description: '適應力強、好奇心旺盛、追求自由、冒險', keywords: ['自由', '冒險', '變化'] },
          { title: '天賦才能', description: '適應變化、學習新知、溝通表達、探索創新' },
          { title: '成長課題', description: '需要學會承諾和專注，建立穩定性' }
        ],
        strengths: ['適應力', '好奇心', '溝通能力', '冒險精神'],
        weaknesses: ['不穩定', '難以承諾', '衝動'],
        careerPaths: ['旅遊工作者', '自由工作者', '銷售人員', '記者'],
        relationships: ['重視自由，需要空間', '適合能接受其冒險精神的伴侶']
      },
      6: {
        number: 6,
        birthDate: '1990-01-01',
        description: '照顧者、理想主義者，富有同情心與責任感。你是天生的守護者。',
        traits: [
          { title: '性格特點', description: '富同情心、負責任、重視和諧、關懷', keywords: ['關懷', '責任', '和諧'] },
          { title: '天賦才能', description: '照顧他人、維護和諧、解決問題、創造美感' },
          { title: '成長課題', description: '需要學會放手，避免過度保護和完美主義' }
        ],
        strengths: ['責任感', '同理心', '藝術感', '照顧能力'],
        weaknesses: ['過度操心', '完美主義', '犧牲自我'],
        careerPaths: ['醫護人員', '教育工作者', '社工', '室內設計師'],
        relationships: ['重視家庭，富有愛心', '適合能欣賞其付出的伴侶']
      },
      7: {
        number: 7,
        birthDate: '1990-01-01',
        description: '智者、分析者，追求真理與智慧。你是深思熟慮的研究者。',
        traits: [
          { title: '性格特點', description: '分析力強、理性、追求完美、智慧', keywords: ['智慧', '分析', '完美'] },
          { title: '天賦才能', description: '研究分析、思考深入、追求真理、技術創新' },
          { title: '成長課題', description: '需要學會表達情感，平衡理性與感性' }
        ],
        strengths: ['分析能力', '智慧', '洞察力', '專注力'],
        weaknesses: ['孤僻', '過度分析', '不善表達'],
        careerPaths: ['研究員', '科學家', '技術專家', '分析師'],
        relationships: ['需要個人空間，重視精神交流', '適合能理解其深度的伴侶']
      },
      8: {
        number: 8,
        birthDate: '1990-01-01',
        description: '權威者、實現者，具有強大的物質成就動力。你是天生的領袖和實踐者。',
        traits: [
          { title: '性格特點', description: '有野心、執行力強、重視成就、權威', keywords: ['野心', '權威', '成就'] },
          { title: '天賦才能', description: '組織管理、財務規劃、決策能力、實現目標' },
          { title: '成長課題', description: '需要學會平衡物質與精神，避免過度追求成功' }
        ],
        strengths: ['領導力', '執行力', '判斷力', '組織能力'],
        weaknesses: ['工作狂', '控制慾', '物質主義'],
        careerPaths: ['企業經營者', '金融專家', '投資顧問', '高階主管'],
        relationships: ['重視事業成就，需要支持', '適合能理解其抱負的伴侶']
      },
      9: {
        number: 9,
        birthDate: '1990-01-01',
        description: '智慧者、人道主義者，具有博愛精神。你是充滿智慧的精神導師。',
        traits: [
          { title: '性格特點', description: '慈悲心強、理想主義、有智慧、包容', keywords: ['慈悲', '智慧', '理想'] },
          { title: '天賦才能', description: '服務他人、傳遞智慧、藝術創作、靈性指引' },
          { title: '成長課題', description: '需要學會放下執著，接受現實的不完美' }
        ],
        strengths: ['同理心', '智慧', '藝術天賦', '靈性覺察'],
        weaknesses: ['理想主義', '不切實際', '難以割捨'],
        careerPaths: ['心靈導師', '藝術家', '公益工作者', '作家'],
        relationships: ['重視精神層面，富有同理心', '適合能分享其理想的伴侶']
      }
    }
    return descriptions[number] || {
      number,
      description: '計算中...',
      traits: [],
      strengths: [],
      weaknesses: [],
      careerPaths: [],
      relationships: []
    }
  }

  const calculateLifePathNumber = (birthDate: string): LifePathResult => {
    const date = new Date(birthDate)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const yearSum = calculateNumber(year)
    const monthSum = calculateNumber(month)
    const daySum = calculateNumber(day)
    const lifePathNumber = calculateNumber(yearSum + monthSum + daySum)

    return getLifePathDescription(lifePathNumber)
  }

  return {
    calculateLifePathNumber,
    getLifePathDescription
  }
} 