import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Hiring from './components/Hiring';
import SignIn from './components/SignIn';
import JobDetail from './components/JobDetail';
import AdminPanel from './components/AdminPanel';
function App() {
  
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/hire" element={<Hiring/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/detail" element={<JobDetail/>}/>
          <Route path="/admin/9876" element={<AdminPanel/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
