import   './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/adminpanel';
import Header from './components/header.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;