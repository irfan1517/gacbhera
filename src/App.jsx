import Navbar from "./assets/components/Navbar.jsx";
import Home from "./assets/components/Home.jsx";
import Contact from "./assets/components/Contact.jsx";
import Attendance from "./assets/components/Attandance.jsx";
import "./assets/components/Home.css";
import FacultyCarousel from "./assets/components/FacultyCarousel.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from "./assets/components/footer.jsx";
function App() {
  return (
    <div className="app-container">
      <div className="main-content">

       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faculty' element={<FacultyCarousel />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/attendance' element={<Attendance />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App
