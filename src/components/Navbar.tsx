import { useNavigate } from 'react-router-dom'
import '../App.css'
import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

export default function Home() {

    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    const goCalc = () => {
        navigate('/calculadora-penal');
    }
    const goAbout = () => {
        navigate('/sobre');
    }

    return(
        <div className={`${darkTheme ? `bg-[#080808]` : `bg-[#303380]`} flex w-full min-h-40 justify-between items-center transition-all duration-300`}>
            <img src="src\assets\images\logo-branca.png" alt="cespedes_lourenço_logo.png" className='pl-10'/>
            <div className='flex items-center text-white text-3xl gap-10 pr-10'>
                <h1 className={`${darkTheme ? `hover:text-yellow-500` : `hover:text-[#D88715]`} cursor-pointer transition-all duration-300`} onClick={goHome}>Home</h1>
                <h1 className={`${darkTheme ? `hover:text-yellow-500` : `hover:text-[#D88715]`} cursor-pointer transition-all duration-300`} onClick={goCalc}>Calculadora</h1>
                <h1 className={`${darkTheme ? `hover:text-yellow-500` : `hover:text-[#D88715]`} cursor-pointer transition-all duration-300`} onClick={goAbout}>Sobre</h1>
                <button className={`${darkTheme ? `hover:text-yellow-500` : `hover:text-[#D88715]`} cursor-pointer transition-all duration-300`} onClick={toggleTheme}>{darkTheme ? <GoSun /> : <FiMoon />}</button>
            </div>
        </div>
    )
}