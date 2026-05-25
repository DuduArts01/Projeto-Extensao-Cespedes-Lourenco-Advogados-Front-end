import Navbar from '../components/Navbar'
import { FaCalculator } from "react-icons/fa";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

export default function Calculator() {
    
    const { darkTheme } = useContext(ThemeContext);

    return(
        <main className='flex flex-col w-full min-h-screen'>
            <div className={`${darkTheme ? `bg-[#111111]` : `bg-white`} flex flex-col gap-5 transition-all duration-300`}>
                <div>
                    <Navbar></Navbar>
                </div>

                <div className='flex-1 flex flex-col items-center p-10 gap-10'>
                    <div className={`${darkTheme ? `bg-[#1E1E20]` : `bg-gray-300`} flex flex-col w-300 rounded-xl gap-5 p-10 transition-all duration-300`}>


                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-5'>
                                <h1 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-2xl transition-all duration-300`}>Dados da Pena</h1>
                                <div className='flex gap-5'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Anos</h2>
                                        <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='A partir de 1 ano'/>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Meses</h2>
                                        <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Até 12 meses'/>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Dias</h2>
                                        <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Até 30 dias'/>
                                    </div>
                                </div>
                            </div>

                            <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#caa733]`} border`}></div>

                            <div className={`${darkTheme ? `bg-gray-800` : `bg-gray-400`} flex flex-col p-10 border border-gray-500 rounded-xl gap-5 transition-all duration-300`}>
                                <div className='flex gap-2'>
                                    <input type="checkbox" className=''/>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Reincidente</p>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="checkbox" className=''/>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Crime com violência ou grave ameaça</p>
                                </div>
                            </div>

                        </div>

                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#caa733]`} border`}></div>

                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col w-1/2 gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Regime Inicial</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Selecione o regime'/>
                            </div>

                            <div className='flex-1 flex flex-col gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Tipo de Crime</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Selecione o tipo de crime'/>
                            </div>
                        </div>

                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#caa733]`} border`}></div>

                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col w-1/2 gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Data de Início do Cumprimento da Pena</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='dd/mm/aaaa'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Dias Trabalhados</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='A partir de 1 dia'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Horas de Estudo</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-400 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='A partir de 1 hora'/>
                            </div>
                        </div>

                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#caa733]`} border`}></div>


                        <div className='flex'>
                            <div className='flex p-5 w-1/3'>
                                <button className={`${darkTheme ? `bg-[#D88715]` : `bg-[#0A0B4D]`} text-white rounded-2xl p-5 text-xl flex gap-5 items-center cursor-pointer hover:scale-110 transition-all duration-300`}>Calcular {<FaCalculator />}</button>
                            </div>

                            <div className={`${darkTheme ? `bg-gray-800` : `bg-gray-400`} flex-1 flex gap-10 p-5 rounded-xl justify-between transition-all duration-300`}>
                                <div className='flex flex-col items-center gap-3'>
                                    <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Regime Semiaberto</h2>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>120 dias</p>
                                </div>

                                <div className='flex flex-col items-center gap-3'>
                                    <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Regime Aberto</h2>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>120 dias</p>
                                </div>

                                <div className='flex flex-col items-center gap-3'>
                                    <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Liberdade Condicional</h2>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>120 dias</p>
                                </div>
                            </div>
                        </div>



                    </div>

                    <footer>
                        <p className={`${darkTheme ? `text-white` : `text-black`}`}>Calculadora criada com base na lei n° 13.964/2019, válida para crimes dolosos</p>
                    </footer>

                </div>
            </div>
            
            
            

        </main>
    )
}