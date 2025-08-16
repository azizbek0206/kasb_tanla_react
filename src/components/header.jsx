"use client"

import { useState } from "react"

const KasbTanlaApp = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedCareer, setSelectedCareer] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [testResult, setTestResult] = useState(null)

  // Kasblar ro'yxati
  const careers = [
    {
      id: 1,
      name: "Dasturchi",
      description: "Kompyuter dasturlari va veb-saytlar yaratadi",
      skills: ["Mantiq", "Matematik", "Ijod"],
      salary: "5-15 mln so'm",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Shifokor",
      description: "Odamlarni davolaydi va sog'ligini saqlaydi",
      skills: ["Muloqot", "Mantiq", "Liderlik"],
      salary: "8-20 mln so'm",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "O'qituvchi",
      description: "Bilim beradi va yoshlarni tarbiyalaydi",
      skills: ["Muloqot", "Liderlik", "Ijod"],
      salary: "3-8 mln so'm",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Muhandis",
      description: "Texnik yechimlar ishlab chiqadi",
      skills: ["Matematik", "Mantiq", "Ijod"],
      salary: "6-12 mln so'm",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getQuestionsForCareer = (careerName) => {
    const questionSets = {
      Dasturchi: [
        {
          id: 1,
          question: "HTML nima?",
          options: ["Dasturlash tili", "Belgilash tili", "Ma'lumotlar bazasi", "Operatsion tizim"],
          correct: 1,
        },
        {
          id: 2,
          question: "JavaScript qaysi tilda yozilgan?",
          options: ["Java", "C++", "ECMAScript", "Python"],
          correct: 2,
        },
        {
          id: 3,
          question: "CSS nima uchun ishlatiladi?",
          options: ["Mantiq", "Dizayn", "Ma'lumotlar", "Xavfsizlik"],
          correct: 1,
        },
        { id: 4, question: "Qaysi belgi HTML tegini yopadi?", options: ["<", ">", "/", "\\"], correct: 2 },
        {
          id: 5,
          question: "Python dasturlash tilining asosiy xususiyati nima?",
          options: ["Murakkab", "Oson o'rganish", "Sekin", "Eski"],
          correct: 1,
        },
        {
          id: 6,
          question: "Git nima?",
          options: ["Dasturlash tili", "Versiya nazorati", "Ma'lumotlar bazasi", "Brauzer"],
          correct: 1,
        },
        {
          id: 7,
          question: "API nima?",
          options: ["Dasturlash interfeysi", "Veb-sayt", "Ma'lumotlar bazasi", "Kompyuter"],
          correct: 0,
        },
        {
          id: 8,
          question: "React nima?",
          options: ["JavaScript kutubxonasi", "Ma'lumotlar bazasi", "Operatsion tizim", "Brauzer"],
          correct: 0,
        },
        {
          id: 9,
          question: "SQL nima uchun ishlatiladi?",
          options: ["Veb-dizayn", "Ma'lumotlar bazasi", "Grafika", "Audio"],
          correct: 1,
        },
        {
          id: 10,
          question: "Node.js nima?",
          options: ["Brauzer", "Server muhiti", "Ma'lumotlar bazasi", "Grafik editor"],
          correct: 1,
        },
        {
          id: 11,
          question: "Bootstrap nima?",
          options: ["Dasturlash tili", "CSS framework", "Ma'lumotlar bazasi", "Brauzer"],
          correct: 1,
        },
        {
          id: 12,
          question: "JSON nima?",
          options: ["Dasturlash tili", "Ma'lumot formati", "Brauzer", "Operatsion tizim"],
          correct: 1,
        },
        {
          id: 13,
          question: "PHP qaysi turdagi til?",
          options: ["Client-side", "Server-side", "Ma'lumotlar bazasi", "Grafik"],
          correct: 1,
        },
        {
          id: 14,
          question: "MySQL nima?",
          options: ["Dasturlash tili", "Ma'lumotlar bazasi", "Veb-server", "Brauzer"],
          correct: 1,
        },
        {
          id: 15,
          question: "HTTP qanday protokol?",
          options: ["Fayl uzatish", "Veb protokol", "Email protokol", "Audio protokol"],
          correct: 1,
        },
        {
          id: 16,
          question: "IDE nima?",
          options: ["Dasturlash muhiti", "Ma'lumotlar bazasi", "Brauzer", "Operatsion tizim"],
          correct: 0,
        },
        {
          id: 17,
          question: "Debug nima?",
          options: ["Kod yozish", "Xatoliklarni topish", "Dizayn qilish", "Test qilish"],
          correct: 1,
        },
        {
          id: 18,
          question: "Framework nima?",
          options: ["Dasturlash tili", "Tayyor kod to'plami", "Ma'lumotlar bazasi", "Brauzer"],
          correct: 1,
        },
        {
          id: 19,
          question: "Algorithm nima?",
          options: ["Dasturlash tili", "Masalani yechish tartibi", "Ma'lumotlar bazasi", "Kompyuter"],
          correct: 1,
        },
        {
          id: 20,
          question: "Open Source nima?",
          options: ["Yopiq kod", "Ochiq kod", "Pullik dastur", "Shaxsiy dastur"],
          correct: 1,
        },
      ],
      Shifokor: [
        { id: 1, question: "Yurak qancha kamerada tashkil topgan?", options: ["2", "3", "4", "5"], correct: 2 },
        {
          id: 2,
          question: "Qon bosimi qaysi asbob bilan o'lchanadi?",
          options: ["Termometr", "Tonometr", "Stethoskop", "Reflex hammer"],
          correct: 1,
        },
        {
          id: 3,
          question: "Normal tana harorati necha gradus?",
          options: ["35°C", "36.6°C", "38°C", "39°C"],
          correct: 1,
        },
        { id: 4, question: "Qaysi organ qonni tozalaydi?", options: ["Yurak", "Buyrak", "Jigar", "O'pka"], correct: 1 },
        {
          id: 5,
          question: "Insulin qaysi organ tomonidan ishlab chiqariladi?",
          options: ["Jigar", "Buyrak", "Oshqozon osti bezi", "Qalqonsimon bez"],
          correct: 2,
        },
        {
          id: 6,
          question: "Qaysi vitamin quyosh nuridan olinadi?",
          options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          correct: 3,
        },
        {
          id: 7,
          question: "Anemiya qaysi element yetishmasligidan kelib chiqadi?",
          options: ["Kalsiy", "Temir", "Magniy", "Fosfor"],
          correct: 1,
        },
        {
          id: 8,
          question: "Normal puls tezligi daqiqada necha marta?",
          options: ["40-50", "60-100", "120-140", "150-180"],
          correct: 1,
        },
        {
          id: 9,
          question: "Antibiotiklar qaysi kasalliklarni davolaydi?",
          options: ["Virus", "Bakteriya", "Zamburug'", "Parazit"],
          correct: 1,
        },
        {
          id: 10,
          question: "Qaysi organ kislorod va karbonat angidrid almashinuvini amalga oshiradi?",
          options: ["Yurak", "Jigar", "O'pka", "Buyrak"],
          correct: 2,
        },
        {
          id: 11,
          question: "Diabet qaysi gormon yetishmasligidan kelib chiqadi?",
          options: ["Insulin", "Adrenalin", "Tiroksin", "Kortizol"],
          correct: 0,
        },
        { id: 12, question: "Qon guruhlari nechta?", options: ["2", "3", "4", "5"], correct: 2 },
        {
          id: 13,
          question: "Gipertenziya nima?",
          options: ["Past bosim", "Yuqori bosim", "Yurak kasalligi", "Qon kasalligi"],
          correct: 1,
        },
        {
          id: 14,
          question: "Vaksinatsiya nima uchun qilinadi?",
          options: ["Davolash", "Oldini olish", "Tashxis", "Reabilitatsiya"],
          correct: 1,
        },
        {
          id: 15,
          question: "Qaysi organ hazm qilishda asosiy rol o'ynaydi?",
          options: ["Yurak", "O'pka", "Oshqozon", "Miya"],
          correct: 2,
        },
        {
          id: 16,
          question: "Holesterol asosan qaysi organda ishlab chiqariladi?",
          options: ["Yurak", "Jigar", "Buyrak", "O'pka"],
          correct: 1,
        },
        {
          id: 17,
          question: "Qaysi kasallik yuqumli hisoblanadi?",
          options: ["Diabet", "Gipertenziya", "Gripp", "Artrit"],
          correct: 2,
        },
        {
          id: 18,
          question: "Birinchi yordam ko'rsatishda eng muhimi nima?",
          options: ["Dori berish", "Xavfsizlikni ta'minlash", "Kasalxonaga olib borish", "Massaj qilish"],
          correct: 1,
        },
        {
          id: 19,
          question: "Qaysi vitamin qon ivishida ishtirok etadi?",
          options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
          correct: 3,
        },
        {
          id: 20,
          question: "Stress qaysi gormon ajralishiga olib keladi?",
          options: ["Insulin", "Adrenalin", "Tiroksin", "Melatonin"],
          correct: 1,
        },
      ],
      "O'qituvchi": [
        {
          id: 1,
          question: "Pedagogika nima?",
          options: ["Fan", "Ta'lim va tarbiya haqidagi fan", "Psixologiya", "Falsafa"],
          correct: 1,
        },
        {
          id: 2,
          question: "Didaktika nima?",
          options: ["O'qitish nazariyasi", "Tarbiya nazariyasi", "Psixologiya", "Metodika"],
          correct: 0,
        },
        {
          id: 3,
          question: "Qaysi usul o'quvchilarni faollashtiradi?",
          options: ["Ma'ruza", "Suhbat", "Interaktiv usullar", "Nazorat"],
          correct: 2,
        },
        {
          id: 4,
          question: "Motivatsiya nima?",
          options: ["Jazo", "Rag'batlantirish", "Nazorat", "Baholash"],
          correct: 1,
        },
        {
          id: 5,
          question: "Differensiatsiya nima?",
          options: ["Bir xil yondashuv", "Individual yondashuv", "Guruh ishi", "Mustaqil ish"],
          correct: 1,
        },
        {
          id: 6,
          question: "Qaysi printsip ta'limda muhim?",
          options: ["Qiyinlik", "Ketma-ketlik", "Tezlik", "Raqobat"],
          correct: 1,
        },
        {
          id: 7,
          question: "Baholash maqsadi nima?",
          options: ["Jazolash", "Taraqqiyotni kuzatish", "Solishtirish", "Tanqid qilish"],
          correct: 1,
        },
        {
          id: 8,
          question: "Qaysi faoliyat o'quvchi markazli?",
          options: ["Ma'ruza", "Loyiha ishi", "Nazorat", "Imlo"],
          correct: 1,
        },
        {
          id: 9,
          question: "Refleksiya nima?",
          options: ["Takrorlash", "O'z ustida o'ylash", "Yodlash", "Yozish"],
          correct: 1,
        },
        {
          id: 10,
          question: "Qaysi usul ijodkorlikni rivojlantiradi?",
          options: ["Yodlash", "Brainstorming", "Nazorat", "Takrorlash"],
          correct: 1,
        },
        {
          id: 11,
          question: "Inklyuziv ta'lim nima?",
          options: ["Elita ta'limi", "Hamma uchun ta'lim", "Maxsus ta'lim", "Masofaviy ta'lim"],
          correct: 1,
        },
        {
          id: 12,
          question: "Qaysi ko'nikma 21-asrda muhim?",
          options: ["Yodlash", "Tanqidiy fikrlash", "Takrorlash", "Nusxa ko'chirish"],
          correct: 1,
        },
        {
          id: 13,
          question: "Formativ baholash qachon amalga oshiriladi?",
          options: ["Dars oxirida", "Dars davomida", "Chorak oxirida", "Yil oxirida"],
          correct: 1,
        },
        {
          id: 14,
          question: "Qaysi usul hamkorlikni rivojlantiradi?",
          options: ["Individual ish", "Guruh ishi", "Mustaqil o'qish", "Yozma ish"],
          correct: 1,
        },
        {
          id: 15,
          question: "Metakognitsiya nima?",
          options: ["Bilim", "O'ylash haqida o'ylash", "Xotira", "Diqqat"],
          correct: 1,
        },
        {
          id: 16,
          question: "Qaysi yondashuv zamonaviy hisoblanadi?",
          options: ["Autoritarlik", "Demokratik", "Liberal", "Aralash"],
          correct: 1,
        },
        {
          id: 17,
          question: "Portfel baholash nima?",
          options: ["Imtihon", "Ishlar to'plami", "Test", "Suhbat"],
          correct: 1,
        },
        {
          id: 18,
          question: "Qaysi printsip o'quvchi faolligini ta'minlaydi?",
          options: ["Passivlik", "Faollik", "Kuzatish", "Tinglash"],
          correct: 1,
        },
        {
          id: 19,
          question: "Differentsiatsiya qanday amalga oshiriladi?",
          options: ["Bir xil topshiriq", "Turli darajadagi topshiriqlar", "Faqat og'zaki", "Faqat yozma"],
          correct: 1,
        },
        {
          id: 20,
          question: "Qaysi texnologiya ta'limni boyitadi?",
          options: ["Faqat kitob", "Raqamli texnologiyalar", "Faqat doska", "Faqat daftar"],
          correct: 1,
        },
      ],
      Muhandis: [
        {
          id: 1,
          question: "Fizikaning qaysi qonuni energiya saqlanishini ifodalaydi?",
          options: ["Nyuton qonuni", "Energiya saqlanish qonuni", "Arximed qonuni", "Om qonuni"],
          correct: 1,
        },
        { id: 2, question: "Elektr toki birligi nima?", options: ["Volt", "Amper", "Vatt", "Om"], correct: 1 },
        {
          id: 3,
          question: "Qaysi material eng yaxshi elektr o'tkazgich?",
          options: ["Kumush", "Mis", "Alyuminiy", "Temir"],
          correct: 0,
        },
        { id: 4, question: "Kuchlanish birligi nima?", options: ["Amper", "Volt", "Vatt", "Joul"], correct: 1 },
        {
          id: 5,
          question: "Qaysi printsip samolyot uchishini ta'minlaydi?",
          options: ["Arximed prinsipi", "Bernulli prinsipi", "Paskal qonuni", "Nyuton qonuni"],
          correct: 1,
        },
        {
          id: 6,
          question: "Qattiq jismlar mexanikasida asosiy tushuncha nima?",
          options: ["Kuch", "Tezlik", "Massa", "Barchasi"],
          correct: 3,
        },
        {
          id: 7,
          question: "Termodinamikaning birinchi qonuni nimani ifodalaydi?",
          options: ["Energiya saqlanishi", "Entropiya o'sishi", "Harorat o'zgarishi", "Bosim o'zgarishi"],
          correct: 0,
        },
        {
          id: 8,
          question: "Qaysi material eng mustahkam?",
          options: ["Po'lat", "Alyuminiy", "Titan", "Karbon tolasi"],
          correct: 3,
        },
        {
          id: 9,
          question: "CAD dasturi nima uchun ishlatiladi?",
          options: ["Hisoblash", "Loyihalash", "Tahlil qilish", "Boshqarish"],
          correct: 1,
        },
        {
          id: 10,
          question: "Qaysi usul materiallarni sinash uchun ishlatiladi?",
          options: ["Vizual tekshirish", "Mexanik sinov", "Kimyoviy tahlil", "Barchasi"],
          correct: 3,
        },
        {
          id: 11,
          question: "Gidravlik tizimda qaysi printsip ishlatiladi?",
          options: ["Arximed", "Paskal", "Bernulli", "Nyuton"],
          correct: 1,
        },
        {
          id: 12,
          question: "Qaysi energiya turi qayta tiklanadigan?",
          options: ["Neft", "Gaz", "Quyosh energiyasi", "Ko'mir"],
          correct: 2,
        },
        {
          id: 13,
          question: "Mexanik uzatmalar nima uchun ishlatiladi?",
          options: ["Tezlikni o'zgartirish", "Kuchni o'zgartirish", "Yo'nalishni o'zgartirish", "Barchasi"],
          correct: 3,
        },
        {
          id: 14,
          question: "Qaysi jarayon metallni mustahkamlaydi?",
          options: ["Eritish", "Sovutish", "Termik ishlov", "Tozalash"],
          correct: 2,
        },
        {
          id: 15,
          question: "Elektr motorining asosiy prinsipi nima?",
          options: ["Elektromagnit induksiya", "Elektrostatik kuch", "Gravitatsiya", "Ishqalanish"],
          correct: 0,
        },
        {
          id: 16,
          question: "Qaysi o'lchov birligi quvvatni ifodalaydi?",
          options: ["Joul", "Vatt", "Nyuton", "Paskal"],
          correct: 1,
        },
        {
          id: 17,
          question: "Konstruksiya mustahkamligini qanday hisoblash mumkin?",
          options: ["Tajriba orqali", "Matematik hisoblash", "Kompyuter simulyatsiyasi", "Barchasi"],
          correct: 3,
        },
        {
          id: 18,
          question: "Qaysi material issiqlik o'tkazuvchanligi past?",
          options: ["Mis", "Alyuminiy", "Plastik", "Po'lat"],
          correct: 2,
        },
        {
          id: 19,
          question: "Avtomatlashtirish tizimida qaysi element muhim?",
          options: ["Sensor", "Aktuator", "Kontroler", "Barchasi"],
          correct: 3,
        },
        {
          id: 20,
          question: "Loyihalashda qaysi omil eng muhim?",
          options: ["Narx", "Xavfsizlik", "Chidamlilik", "Barchasi"],
          correct: 3,
        },
      ],
    }

    return questionSets[careerName] || []
  }

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    const careerQuestions = getQuestionsForCareer(selectedCareer.name)

    if (currentQuestion < careerQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Test tugadi, natijani hisoblash
      calculateResult(newAnswers, careerQuestions)
    }
  }

  const calculateResult = (userAnswers, careerQuestions) => {
    let correctAnswers = 0

    userAnswers.forEach((answer, index) => {
      if (answer === careerQuestions[index].correct) {
        correctAnswers++
      }
    })

    const canWork = correctAnswers >= 15

    setTestResult({
      correctAnswers,
      totalQuestions: careerQuestions.length,
      canWork,
    })
    setCurrentPage("result")
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setTestResult(null)
    setSelectedCareer(null)
    setCurrentPage("test")
  }

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .logo {
      font-size: 28px;
      font-weight: bold;
      color: #667eea;
      text-decoration: none;
    }

    .nav {
      display: flex;
      gap: 30px;
    }

    .nav-btn {
      padding: 10px 20px;
      border: none;
      background: none;
      color: #333;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      border-radius: 25px;
      transition: all 0.3s ease;
    }

    .nav-btn:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
    }

    .nav-btn.active {
      background: #667eea;
      color: white;
    }

    .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .hero-section {
      text-align: center;
      margin-bottom: 60px;
      color: white;
    }

    .hero-title {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 20px;
      margin-bottom: 30px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.9;
    }

    .hero-image {
      width: 100%;
      max-width: 600px;
      height: 300px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      margin: 20px auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin: 60px 0;
    }

    .feature-card {
      background: rgba(255, 255, 255, 0.95);
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-10px);
    }

    .feature-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }

    .feature-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #333;
    }

    .feature-description {
      color: #666;
      line-height: 1.6;
    }

    .careers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin: 40px 0;
    }

    .career-card {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 25px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .career-card:hover {
      transform: translateY(-5px);
    }

    .career-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .career-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }

    .career-description {
      color: #666;
      margin-bottom: 15px;
      line-height: 1.5;
    }

    .career-info {
      margin-bottom: 20px;
    }

    .career-info p {
      margin-bottom: 8px;
      font-size: 14px;
      color: #555;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid white;
      padding: 15px 30px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      margin-top: 10px;
    }

    .btn-secondary:hover {
      background: white;
      color: #667eea;
    }

    .test-container {
      max-width: 700px;
      margin: 0 auto;
    }

    .test-header {
      text-align: center;
      margin-bottom: 40px;
      color: white;
    }

    .test-title {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      margin-bottom: 20px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.3s ease;
      border-radius: 4px;
    }

    .question-card {
      background: rgba(255, 255, 255, 0.95);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .question-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 30px;
      color: #333;
    }

    .options-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .option-btn {
      padding: 20px;
      background: #f8f9fa;
      border: 2px solid transparent;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
      font-size: 16px;
    }

    .option-btn:hover {
      background: #e9ecef;
      border-color: #667eea;
      transform: translateX(5px);
    }

    .result-container {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    .result-card {
      background: rgba(255, 255, 255, 0.95);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .result-icon {
      font-size: 80px;
      margin-bottom: 20px;
    }

    .result-title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #333;
    }

    .result-message {
      font-size: 18px;
      margin-bottom: 30px;
      color: #666;
      line-height: 1.6;
    }

    .footer {
      background: rgba(255, 255, 255, 0.95);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin-top: 80px;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
    }

    .footer-section h3,
    .footer-section h4 {
      margin-bottom: 20px;
      color: #333;
    }

    .footer-section p,
    .footer-section a {
      color: #666;
      text-decoration: none;
      line-height: 1.6;
    }

    .footer-section a:hover {
      color: #667eea;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 10px;
    }

    .footer-bottom {
      border-top: 1px solid #eee;
      padding: 20px 0;
      text-align: center;
      color: #666;
    }

    .section-title {
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .section-subtitle {
      text-align: center;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 40px;
      font-size: 18px;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        height: auto;
        padding: 20px;
      }

      .nav {
        margin-top: 20px;
        gap: 15px;
      }

      .hero-title {
        font-size: 32px;
      }

      .hero-subtitle {
        font-size: 16px;
      }

      .features-grid,
      .careers-grid {
        grid-template-columns: 1fr;
      }

      .main-content {
        padding: 20px;
      }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <h1 className="logo">KasbTanla</h1>
            <nav className="nav">
              <button
                onClick={() => setCurrentPage("home")}
                className={`nav-btn ${currentPage === "home" ? "active" : ""}`}
              >
                Bosh sahifa
              </button>
              <button
                onClick={() => {
                  setCurrentPage("careers")
                  setSelectedCareer(null)
                  setTestResult(null)
                }}
                className={`nav-btn ${currentPage === "careers" ? "active" : ""}`}
              >
                Kasblar ro'yxati
              </button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {currentPage === "home" && (
            <div>
              {/* Hero Section */}
              <div className="hero-section">
                <h2 className="hero-title">O'z kelajagingizni tanlang!</h2>
                <p className="hero-subtitle">
                  KasbTanla platformasi orqali o'zingizga mos kasbni toping. Shaxsiyat testini topshiring va kelajakdagi
                  kasbingizni aniqlang.
                </p>
                <img src="/placeholder.svg?height=300&width=600" alt="Kasb tanlash" className="hero-image" />
              </div>

              {/* Features */}
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🧠</div>
                  <h3 className="feature-title">Shaxsiyat testi</h3>
                  <p className="feature-description">
                    20 ta savol orqali o'zingizning qobiliyat va qiziqishlaringizni aniqlang
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">💼</div>
                  <h3 className="feature-title">Kasb tavsiyasi</h3>
                  <p className="feature-description">Test natijalariga asoslanib sizga mos kasblar tavsiya qilamiz</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🎓</div>
                  <h3 className="feature-title">Ta'lim yo'li</h3>
                  <p className="feature-description">
                    Tanlagan kasbingiz uchun qaysi universitetlarda o'qish mumkinligini bilib oling
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div style={{ textAlign: "center" }}>
                <button
                  onClick={() => setCurrentPage("careers")}
                  className="btn-primary"
                  style={{ width: "auto", padding: "15px 40px" }}
                >
                  Kasblarni ko'rish
                </button>
              </div>
            </div>
          )}

          {currentPage === "careers" && !selectedCareer && (
            <div>
              <h2 className="section-title">Kasblar ro'yxati</h2>
              <p className="section-subtitle">Qiziqtirgan kasbingizni tanlang va test topshiring</p>
              <div className="careers-grid">
                {careers.map((career) => (
                  <div key={career.id} className="career-card">
                    <img
                      src={career.image || "/placeholder.svg?height=200&width=300&query=career illustration"}
                      alt={career.name}
                      className="career-image"
                    />
                    <h3 className="career-title">{career.name}</h3>
                    <p className="career-description">{career.description}</p>
                    <div className="career-info">
                      <p>
                        <strong>Kerakli ko'nikmalar:</strong> {career.skills.join(", ")}
                      </p>
                      <p>
                        <strong>Maosh:</strong> {career.salary}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCareer(career)
                        setCurrentQuestion(0)
                        setAnswers([])
                        setTestResult(null)
                        setCurrentPage("test")
                      }}
                      className="btn-primary"
                    >
                      Test topshirish
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === "test" && selectedCareer && testResult === null && (
            <div className="test-container">
              <div className="test-header">
                <h2 className="test-title">{selectedCareer.name} uchun test</h2>
                {(() => {
                  const careerQuestions = getQuestionsForCareer(selectedCareer.name)
                  return (
                    <>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${((currentQuestion + 1) / careerQuestions.length) * 100}%` }}
                        ></div>
                      </div>
                      <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                        Savol {currentQuestion + 1} / {careerQuestions.length}
                      </p>
                    </>
                  )
                })()}
              </div>

              {(() => {
                const careerQuestions = getQuestionsForCareer(selectedCareer.name)
                const currentQ = careerQuestions[currentQuestion]

                if (!currentQ) return <div>Savollar yuklanmoqda...</div>

                return (
                  <div className="question-card">
                    <h3 className="question-title">{currentQ.question}</h3>
                    <div className="options-container">
                      {currentQ.options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswerSelect(index)} className="option-btn">
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </div>
          )}

          {currentPage === "result" && testResult && (
            <div className="result-container">
              <h2 className="section-title">Test natijalari</h2>
              <div className="result-card">
                <div className={`result-icon ${testResult.canWork ? "text-green-500" : "text-red-500"}`}>
                  {testResult.canWork ? "✅" : "❌"}
                </div>
                <h3 className="result-title">
                  {testResult.correctAnswers} / {testResult.totalQuestions} to'g'ri javob
                </h3>
                <p className="result-message">
                  {testResult.canWork
                    ? `Tabriklaymiz! Siz ${selectedCareer.name} kasbida ishlay olasiz!`
                    : `Afsuski, ${selectedCareer.name} kasbida ishlash uchun ko'proq tayyorgarlik kerak.`}
                </p>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>KasbTanla</h3>
              <p>Yoshlar uchun kasb tanlash platformasi. O'z kelajagingizni toping!</p>
            </div>
            <div className="footer-section">
              <h4>Sahifalar</h4>
              <ul className="footer-links">
                <li>
                  <button
                    onClick={() => setCurrentPage("home")}
                    style={{ background: "none", border: "none", color: "#666", cursor: "pointer" }}
                  >
                    Bosh sahifa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("careers")}
                    style={{ background: "none", border: "none", color: "#666", cursor: "pointer" }}
                  >
                    Kasblar
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Yordam</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Aloqa</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Ijtimoiy tarmoqlar</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Telegram</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 KasbTanla. Barcha huquqlar himoyalangan.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default KasbTanlaApp
