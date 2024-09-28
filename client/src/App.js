import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Service from './page/service';
import Project from './page/project';
import Contact from './page/contact';
import Header from './component/header';
import Footer from './component/footer';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  const lacation=useLocation()
  return (
    <div>
      <Header/>
<AnimatePresence >
        <Routes location={lacation} key={lacation.pathname}>
          <Route path='/'element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/service'element={<Service/>}/>
          <Route path='/project'element={<Project/>}/>
          <Route path='/contact'element={<Contact/>}/>

        </Routes>
        </AnimatePresence>
        <Footer/>
      </div>
  );
}

export default App;
