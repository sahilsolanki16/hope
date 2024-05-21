import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import About from './Page/About';
import Services from './Page/Services';
import Contact from './Page/Contact'; 
import Layout from './Page/Layout';

function App() {
  return (
    <>

     
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
