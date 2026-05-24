import { useNavigate } from 'react-router-dom'
import '../App.css'
import { FiMoon } from "react-icons/fi";

export default function Home() {

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    const goCalc = () => {
        navigate('/calculadora');
    }
    const goAbout = () => {
        navigate('/sobre');
    }

    return(
        <div className='flex w-full min-h-40 justify-between items-center bg-[#0A0B4D]'>
            <img src="src\assets\images\logo-branca.png" alt="cespedes_lourenço_logo.png" className='pl-10'/>
            <div className='flex items-center text-white text-3xl gap-10 pr-10'>
                <h1 className='cursor-pointer' onClick={goHome}>Home</h1>
                <h1 className='cursor-pointer' onClick={goCalc}>Calcular</h1>
                <h1 className='cursor-pointer' onClick={goAbout}>Sobre</h1>
                <button className='cursor-pointer'>{<FiMoon />}</button>
            </div>
        </div>
    )
}