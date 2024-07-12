import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans/HostVans";
import HostVanSelectionLayout from "./pages/Host/HostVans/HostVanSelectionLayout";
import HostVanDetail from "./pages/Host/HostVans/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVans/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVans/HostVanPhotos";
import Reviews from "./pages/Host/Reviews";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthRequired from "./components/AuthRequired";
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)

  function logInOut() {
    setIsLoggedIn(prev => {
      const newValue = !prev
      localStorage.setItem("isLoggedIn", newValue)
      return newValue
    })
  }


  return (
    <Router>
      <Routes>
        <Route element={<Layout isLoggedIn={isLoggedIn} logInOut={logInOut} />}>
          <Route path="/" element={<Home />} />
           <Route element={<AuthRequired />}>
              <Route path="/host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanSelectionLayout />}>
                  <Route index element={<HostVanDetail />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
                <Route path="reviews" element={<Reviews />} />
              </Route>
           </Route>
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/login" element={<Login logInOut={logInOut} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
