import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import Calculator from './pages/Calculator';
import Navbar from './components/Navbar';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/calculadora-penal" element={<Calculator />} />
            <Route path="/navbar" element={<Navbar />} />

        </Routes>
    )
}
