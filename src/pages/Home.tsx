import { useNavigate } from 'react-router-dom';
import '../App.css'
import Navbar from '../components/Navbar'
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import paralax1 from "../assets/images/paralax1.jpg";

export default function Home() {

    const { darkTheme } = useContext(ThemeContext);

    const navigate = useNavigate();
    const goCalc = () => {
        navigate('/calculadora-penal');
    }

    return(
        <main className='flex flex-col w-full min-h-screen'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className={`${darkTheme ? "" : "bg-[#f7f3ed]"} bg-cover flex-1 flex flex-col justify-start items-center p-40 gap-30 transition-all duration-300`}
            style={darkTheme ? { backgroundImage: `url(${paralax1})` } : {}}>
                <div className='flex flex-col text-center gap-5'>
                    <h1 className='text-[#F5AE6F] text-4xl font-bold'>Calculadora Penal</h1>
                    <h2 className={`${darkTheme ? `text-white` : `text-black`} text-6xl font-bold w-250 transition-all duration-300`}>Lutando pelos direitos de cada cidadão e trazendo uma justiça transparente </h2>
                </div>
                <button className={`${darkTheme ? `bg-[#D88715]` : `bg-[#F5AE6F]`} h-20 w-50 text-white text-3xl rounded-full cursor-pointer hover:scale-120 transition-all duration-300`} onClick={goCalc}>CALCULAR</button>
            </div>
        </main>
    )
}