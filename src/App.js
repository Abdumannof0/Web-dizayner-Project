import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import OfCourse from './Pages/OfCourse';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<OfCourse />} path='/ofcurse' />
          <Route element={<AboutMe />} path='/about' />
          <Route element={<Services />} path='/services' />
          <Route element={<Contacts />} path='/contacts' />
          <Route element={<NotFound />} path='*' />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
