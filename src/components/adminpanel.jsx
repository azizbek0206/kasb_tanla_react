"use client"

import { useState, useEffect } from "react"

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [users, setUsers] = useState([])
  const [questions, setQuestions] = useState([])
  const [careers, setCareers] = useState([])
  const [universities, setUniversities] = useState([])
  const [testResults, setTestResults] = useState([])
  const [loading, setLoading] = useState(false)

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API calls
    setUsers([
      { id: 1, name: "Aziz Karimov", age: 20, gender: "Erkak", email: "aziz@example.com", testsCompleted: 2 },
      { id: 2, name: "Malika Tosheva", age: 19, gender: "Ayol", email: "malika@example.com", testsCompleted: 1 },
      { id: 3, name: "Bobur Aliyev", age: 21, gender: "Erkak", email: "bobur@example.com", testsCompleted: 3 },
    ])

    setQuestions([
      { id: 1, category: "Matematika", question: "Matematika masalalarini yechishni yoqtirasizmi?", type: "multiple" },
      { id: 2, category: "Ijod", question: "Yangi g'oyalar yaratishni yoqtirasizmi?", type: "scale" },
      { id: 3, category: "Muloqot", question: "Odamlar bilan muloqot qilishni yoqtirasizmi?", type: "boolean" },
    ])

    setCareers([
      {
        id: 1,
        name: "Dasturchi",
        description: "Kompyuter dasturlari yaratish",
        skills: "Programming, Logic",
        salary: "15-30 mln",
        demand: "Yuqori",
      },
      {
        id: 2,
        name: "Dizayner",
        description: "Grafik va web dizayn",
        skills: "Creativity, Design tools",
        salary: "8-20 mln",
        demand: "O'rta",
      },
      {
        id: 3,
        name: "Muhandis",
        description: "Texnik loyihalar",
        skills: "Math, Physics",
        salary: "12-25 mln",
        demand: "Yuqori",
      },
    ])

    setUniversities([
      { id: 1, name: "TATU", location: "Toshkent", programs: "IT, Kompyuter fanlari", website: "tatu.uz" },
      { id: 2, name: "NUUz", location: "Toshkent", programs: "Barcha yo'nalishlar", website: "nuu.uz" },
      { id: 3, name: "TDTU", location: "Toshkent", programs: "Texnika fanlari", website: "tdtu.uz" },
    ])

    setTestResults([
      {
        id: 1,
        userId: 1,
        userName: "Aziz Karimov",
        testDate: "2024-01-15",
        scores: { matematika: 85, ijod: 70, muloqot: 60 },
        recommendedCareer: "Dasturchi",
      },
      {
        id: 2,
        userId: 2,
        userName: "Malika Tosheva",
        testDate: "2024-01-14",
        scores: { matematika: 60, ijod: 90, muloqot: 80 },
        recommendedCareer: "Dizayner",
      },
    ])
  }, [])

  const stats = {
    totalUsers: users.length,
    totalQuestions: questions.length,
    totalCareers: careers.length,
    totalUniversities: universities.length,
    testsCompleted: testResults.length,
  }

  const renderDashboard = () => (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>{stats.totalUsers}</h3>
            <p>Jami foydalanuvchilar</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">❓</div>
          <div className="stat-info">
            <h3>{stats.totalQuestions}</h3>
            <p>Test savollari</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💼</div>
          <div className="stat-info">
            <h3>{stats.totalCareers}</h3>
            <p>Kasblar</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎓</div>
          <div className="stat-info">
            <h3>{stats.totalUniversities}</h3>
            <p>Universitetlar</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h3>{stats.testsCompleted}</h3>
            <p>Tugallangan testlar</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>So'nggi faollik</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">👤</span>
            <span>Yangi foydalanuvchi ro'yxatdan o'tdi: Malika Tosheva</span>
            <span className="activity-time">2 soat oldin</span>
          </div>
          <div className="activity-item">
            <span className="activity-icon">✅</span>
            <span>Test tugallandi: Aziz Karimov</span>
            <span className="activity-time">5 soat oldin</span>
          </div>
          <div className="activity-item">
            <span className="activity-icon">📝</span>
            <span>Yangi savol qo'shildi: Matematika bo'limi</span>
            <span className="activity-time">1 kun oldin</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderUsers = () => (
    <div className="users-section">
      <div className="section-header">
        <h2>Foydalanuvchilar</h2>
        <button className="btn-primary">Yangi foydalanuvchi</button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ism</th>
              <th>Yosh</th>
              <th>Jins</th>
              <th>Email</th>
              <th>Testlar</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.testsCompleted}</td>
                <td>
                  <button className="btn-edit">Tahrirlash</button>
                  <button className="btn-delete">O'chirish</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderQuestions = () => (
    <div className="questions-section">
      <div className="section-header">
        <h2>Test savollari</h2>
        <button className="btn-primary">Yangi savol</button>
      </div>
      <div className="questions-grid">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <div className="question-category">{question.category}</div>
            <div className="question-text">{question.question}</div>
            <div className="question-type">Turi: {question.type}</div>
            <div className="question-actions">
              <button className="btn-edit">Tahrirlash</button>
              <button className="btn-delete">O'chirish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderCareers = () => (
    <div className="careers-section">
      <div className="section-header">
        <h2>Kasblar</h2>
        <button className="btn-primary">Yangi kasb</button>
      </div>
      <div className="careers-grid">
        {careers.map((career) => (
          <div key={career.id} className="career-card">
            <h3>{career.name}</h3>
            <p className="career-description">{career.description}</p>
            <div className="career-details">
              <div>
                <strong>Ko'nikmalar:</strong> {career.skills}
              </div>
              <div>
                <strong>Maosh:</strong> {career.salary}
              </div>
              <div>
                <strong>Talab:</strong> {career.demand}
              </div>
            </div>
            <div className="career-actions">
              <button className="btn-edit">Tahrirlash</button>
              <button className="btn-delete">O'chirish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderUniversities = () => (
    <div className="universities-section">
      <div className="section-header">
        <h2>Universitetlar</h2>
        <button className="btn-primary">Yangi universitet</button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nomi</th>
              <th>Joylashuv</th>
              <th>Yo'nalishlar</th>
              <th>Veb-sayt</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((uni) => (
              <tr key={uni.id}>
                <td>{uni.id}</td>
                <td>{uni.name}</td>
                <td>{uni.location}</td>
                <td>{uni.programs}</td>
                <td>
                  <a href={`https://${uni.website}`} target="_blank" rel="noopener noreferrer">
                    {uni.website}
                  </a>
                </td>
                <td>
                  <button className="btn-edit">Tahrirlash</button>
                  <button className="btn-delete">O'chirish</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderTestResults = () => (
    <div className="results-section">
      <div className="section-header">
        <h2>Test natijalari</h2>
        <button className="btn-primary">Eksport</button>
      </div>
      <div className="results-grid">
        {testResults.map((result) => (
          <div key={result.id} className="result-card">
            <h3>{result.userName}</h3>
            <div className="result-date">Test sanasi: {result.testDate}</div>
            <div className="scores">
              <div className="score-item">
                <span>Matematika:</span>
                <span className="score">{result.scores.matematika}%</span>
              </div>
              <div className="score-item">
                <span>Ijod:</span>
                <span className="score">{result.scores.ijod}%</span>
              </div>
              <div className="score-item">
                <span>Muloqot:</span>
                <span className="score">{result.scores.muloqot}%</span>
              </div>
            </div>
            <div className="recommended-career">
              Tavsiya etilgan kasb: <strong>{result.recommendedCareer}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard()
      case "users":
        return renderUsers()
      case "questions":
        return renderQuestions()
      case "careers":
        return renderCareers()
      case "universities":
        return renderUniversities()
      case "results":
        return renderTestResults()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="admin-panel">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f7fa;
        }

        .admin-panel {
          display: flex;
          min-height: 100vh;
          background-color: #f5f7fa;
        }

        .sidebar {
          width: 280px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
          position: fixed;
          height: 100vh;
          overflow-y: auto;
        }

        .sidebar-header {
          padding: 30px 25px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          text-align: center;
        }

        .sidebar-header h1 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .sidebar-header p {
          font-size: 14px;
          opacity: 0.8;
        }

        .sidebar-menu {
          padding: 20px 0;
        }

        .menu-item {
          display: flex;
          align-items: center;
          padding: 15px 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: none;
          color: white;
          width: 100%;
          text-align: left;
          font-size: 16px;
        }

        .menu-item:hover {
          background-color: rgba(255,255,255,0.1);
          padding-left: 35px;
        }

        .menu-item.active {
          background-color: rgba(255,255,255,0.2);
          border-right: 4px solid white;
        }

        .menu-item-icon {
          margin-right: 15px;
          font-size: 20px;
          width: 25px;
        }

        .main-content {
          flex: 1;
          margin-left: 280px;
          padding: 30px;
          background-color: #f5f7fa;
          min-height: 100vh;
        }

        .dashboard h2 {
          color: #2d3748;
          margin-bottom: 30px;
          font-size: 32px;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .stat-icon {
          font-size: 40px;
          margin-right: 20px;
          padding: 15px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info h3 {
          font-size: 28px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 5px;
        }

        .stat-info p {
          color: #718096;
          font-size: 14px;
        }

        .recent-activity {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .recent-activity h3 {
          color: #2d3748;
          margin-bottom: 20px;
          font-size: 20px;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          padding: 15px;
          background: #f7fafc;
          border-radius: 10px;
          border-left: 4px solid #667eea;
        }

        .activity-icon {
          margin-right: 15px;
          font-size: 18px;
        }

        .activity-time {
          margin-left: auto;
          color: #718096;
          font-size: 12px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .section-header h2 {
          color: #2d3748;
          font-size: 28px;
          font-weight: 700;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .table-container {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
        }

        .data-table th {
          background: #f7fafc;
          padding: 20px;
          text-align: left;
          font-weight: 600;
          color: #2d3748;
          border-bottom: 1px solid #e2e8f0;
        }

        .data-table td {
          padding: 20px;
          border-bottom: 1px solid #e2e8f0;
          color: #4a5568;
        }

        .data-table tr:hover {
          background-color: #f7fafc;
        }

        .btn-edit, .btn-delete {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          margin-right: 8px;
          transition: all 0.3s ease;
        }

        .btn-edit {
          background-color: #48bb78;
          color: white;
        }

        .btn-edit:hover {
          background-color: #38a169;
        }

        .btn-delete {
          background-color: #f56565;
          color: white;
        }

        .btn-delete:hover {
          background-color: #e53e3e;
        }

        .questions-grid, .careers-grid, .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .question-card, .career-card, .result-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .question-card:hover, .career-card:hover, .result-card:hover {
          transform: translateY(-5px);
        }

        .question-category {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          display: inline-block;
          margin-bottom: 15px;
        }

        .question-text {
          font-size: 16px;
          color: #2d3748;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .question-type {
          color: #718096;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .question-actions, .career-actions {
          display: flex;
          gap: 10px;
        }

        .career-card h3 {
          color: #2d3748;
          margin-bottom: 10px;
          font-size: 20px;
        }

        .career-description {
          color: #718096;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .career-details {
          margin-bottom: 20px;
        }

        .career-details div {
          margin-bottom: 8px;
          color: #4a5568;
          font-size: 14px;
        }

        .result-card h3 {
          color: #2d3748;
          margin-bottom: 10px;
        }

        .result-date {
          color: #718096;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .scores {
          margin-bottom: 15px;
        }

        .score-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .score {
          font-weight: 600;
          color: #667eea;
        }

        .recommended-career {
          background: #f0fff4;
          padding: 12px;
          border-radius: 8px;
          border-left: 4px solid #48bb78;
          color: #2d3748;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            position: relative;
            height: auto;
          }

          .main-content {
            margin-left: 0;
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .questions-grid, .careers-grid, .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="sidebar">
        <div className="sidebar-header">
          <h1>KasbTanla</h1>
          <p>Admin Panel</p>
        </div>
        <div className="sidebar-menu">
          <button
            className={`menu-item ${activeSection === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveSection("dashboard")}
          >
            <span className="menu-item-icon">📊</span>
            Dashboard
          </button>
          <button
            className={`menu-item ${activeSection === "users" ? "active" : ""}`}
            onClick={() => setActiveSection("users")}
          >
            <span className="menu-item-icon">👥</span>
            Foydalanuvchilar
          </button>
          <button
            className={`menu-item ${activeSection === "questions" ? "active" : ""}`}
            onClick={() => setActiveSection("questions")}
          >
            <span className="menu-item-icon">❓</span>
            Test savollari
          </button>
          <button
            className={`menu-item ${activeSection === "careers" ? "active" : ""}`}
            onClick={() => setActiveSection("careers")}
          >
            <span className="menu-item-icon">💼</span>
            Kasblar
          </button>
          <button
            className={`menu-item ${activeSection === "universities" ? "active" : ""}`}
            onClick={() => setActiveSection("universities")}
          >
            <span className="menu-item-icon">🎓</span>
            Universitetlar
          </button>
          <button
            className={`menu-item ${activeSection === "results" ? "active" : ""}`}
            onClick={() => setActiveSection("results")}
          >
            <span className="menu-item-icon">📈</span>
            Test natijalari
          </button>
        </div>
      </div>

      <div className="main-content">{renderContent()}</div>
    </div>
  )
}

export default AdminPanel
