import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

function App() {
  return (
    <Router> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}  />  
          <Route path="/about" element={<About />}  />  
          <Route path="/vans" element={<Vans />}  />
          <Route path="/vans/:id" element={<VanDetail />} />  
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
