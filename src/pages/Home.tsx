import { useNavigate } from 'react-router-dom';
import '../App.css'
import Navbar from '../components/Navbar'

export default function Home() {

    const navigate = useNavigate();
    const goCalc = () => {
        navigate('/calculadora');
    }

    return(
        <main className='flex flex-col w-full h-full gap-10'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='flex flex-col w-full min-h-screen justify-start items-center bg-white p-20 gap-30'>
                <h1 className='text-[#F5AE6F] text-2xl'>Direito Penal</h1>
                <h2 className='text-4xl font-bold'>Lutando pelos direitos de cada cidadão e trazendo uma justiça transparente </h2>
                <button className='h-20 w-50 bg-[#0A0B4D] text-white text-2xl rounded-full cursor-pointer hover:scale-120 transition-all duration-300' onClick={goCalc}>CALCULAR</button>
            </div>
        </main>
    )
}