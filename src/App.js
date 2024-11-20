import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Python from './components/python/Python';
import PythonNavbar from './components/python/PythonNavbar';
import UiUxDesign from './components/uiux/UiUxDesign';
import UiUxNavbar from './components/uiux/UiUxNavbar';
import UiAbout from './components/uiux/UiAbout';
import UiUxSkills from './components/uiux/UiUxSkills';
import TechnicalModules from './components/uiux/TechnicalModules';
import UiUxCertification from './components/uiux/UiUxCertification';
import UiLearn from './components/uiux/UiLearn';
import PythonAbout from './components/python/PythonAbout';
import PythonSkills from './components/python/PythonSkills'; 
import PythonModules from './components/python/PythonModules';
import PythonCertification from './components/python/PythonCertification';
import PythonLearn from './components/python/PythonLearn';
import Java from './components/java/Java';
import JavaNavbar from './components/java/JavaNavbar';
import JavaAbout from './components/java/JavaAbout';



function App() {
  return (
    
       <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/python" element={<> <Python/> <PythonNavbar/> <PythonAbout/> <PythonSkills/> <PythonModules/> <PythonCertification/> <PythonLearn/> </>} />
                <Route path="/java" element={<> <Java/> <JavaNavbar/> <JavaAbout/> </>}/>
                <Route path="/ui-ux" element={<> <UiUxDesign/> <UiUxNavbar/> <UiAbout/> <UiUxSkills/> <TechnicalModules/> <UiUxCertification/> <UiLearn/> </>}/>
            </Routes>
        </div>
        </Router>
    
  );
}

export default App;
