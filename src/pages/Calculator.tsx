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
                    <div className={`${darkTheme ? `bg-[#1E1E20]` : `bg-gray-100`} flex flex-col w-300 rounded-xl gap-5 p-10 transition-all duration-300`}>


                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <h1 className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-3xl transition-all duration-300`}>Dados da Pena</h1>
                                <div className='flex-1 flex gap-5 items-center'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Anos</h2>
                                        <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='A partir de 1 ano'/>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Meses</h2>
                                        <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Até 11 meses'/>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Dias</h2>
                                        <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Até 29 dias'/>
                                    </div>
                                </div>
                            </div>

                            <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#C59151]`} border`}></div>

                            <div className={`${darkTheme ? `bg-gray-800` : `bg-gray-200`} flex flex-col p-10 border border-gray-300 rounded-xl gap-5 transition-all duration-300`}>
                                <div className='flex gap-2'>
                                    <input type="checkbox" className=''/>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Reincidente</p>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="checkbox" className=''/>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Crime com violência ou grave ameaça</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Tempo de Detração:</p>
                                    <input type="text" className={`${darkTheme ? `text-white placeholder:text-white` : `text-black placeholder:text-black`} border-none bg-gray-600 rounded-lg focus:outline-none p-2`} placeholder='A partir de 1 dia'/>
                                </div>
                            </div>

                        </div>

                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#C59151]`} border`}></div>

                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col w-1/2 gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Regime Inicial</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Selecione o regime'/>
                            </div>

                            <div className='flex-1 flex flex-col gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Tipo de Crime</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='Selecione o tipo de crime'/>
                            </div>
                        </div>

                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#C59151]`} border`}></div>

                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col w-1/2 gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Data de Início do Cumprimento da Pena</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='dd/mm/aaaa'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Dias Trabalhados</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='A partir de 1 dia'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}>Horas de Estudo</h2>
                                <input type="text" className={`${darkTheme ? `bg-gray-800 placeholder:text-white text-white` : `bg-gray-200 placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`} placeholder='A partir de 1 hora'/>
                            </div>
                        </div>

                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#C59151]`} border`}></div>


                        <div className='flex'>
                            <div className='flex p-5 w-1/3'>
                                <button className={`${darkTheme ? `bg-[#D88715]` : `bg-[#0A0B4D]`} text-white rounded-2xl p-5 text-xl flex gap-5 items-center cursor-pointer hover:scale-110 transition-all duration-300`}>Calcular {<FaCalculator />}</button>
                            </div>

                            <div className={`${darkTheme ? `bg-gray-800` : `bg-gray-200`} flex-1 flex gap-10 p-5 rounded-xl justify-between transition-all duration-300`}>
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


                    <div className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-gray-100`} flex flex-col w-300 gap-5 p-5 rounded-xl transition-all duration-300`}>
                        <h1 className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}>O que é a Remição de Pena?</h1>
                        <p>A remição de pena é um benefício concedido ao detento, permitindo a redução do tempo de cumprimento da pena através de atividades como trabalho, estudo e leitura.</p>
                    </div>

                    <div className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-gray-100`} flex flex-col w-300 gap-5 p-5 rounded-xl transition-all duration-300`}>
                        <h1 className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}>Critérios para Remição</h1>
                        <p>- Trabalho: Redução de 1 dia a cada 3 dias trabalhados. Não existe remição de trabalho para o Regime Aberto.<br />
                        - Estudo: Redução de 1 dia a cada 12 horas de estudo, podendo incluir cursos presenciais ou a distância.<br />
                        - Leitura: Redução de até 4 dias por livro lido, com a necessidade de apresentação de um resumo.<br />
                        - Atividades complementares: Cursos profissionalizantes também podem contar para a remição.</p>
                    </div>

                    <div className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-gray-100`} flex flex-col w-300 gap-5 p-5 rounded-xl transition-all duration-300`}>
                        <h1 className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}>Progressão de Regime</h1>
                        <p>Um detento pode progredir de regime conforme o tempo cumprido e o bom comportamento atestado, além de exame criminológico:<br /><br />
                        - Crimes comuns: Após cumprir 16% da pena.<br />
                        - Crimes comuns (reincidente): Após cumprir 20% da pena.<br />
                        - Violência ou grave ameaça: Após cumprir 25% da pena.<br />
                        - Violência ou grave ameaça (reincidente): Após cumprir 30% da pena.<br />
                        - Crimes hediondos: Após cumprir 40% da pena.<br />
                        - Crimes hediondos (reincidente): Após cumprir 60% da pena.<br />
                        - Crimes hediondos(Resultado Morte): Após cumprir 50% da pena.<br />
                        - Crimes hediondos (Resultado Morte)(reincidente): Após cumprir 70% da pena.</p>
                    </div>

                    <div className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-gray-100`} flex flex-col w-300 gap-5 p-5 rounded-xl transition-all duration-300`}>
                        <h1 className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}>Livramento Condicional</h1>
                        <p>O livramento condicional permite que o preso cumpra o restante da pena em liberdade, desde que atenda aos seguintes critérios:<br /><br />
                        - Ter cumprido pelo menos 1/3 da pena (se réu primário).<br />
                        - Ter cumprido pelo menos 1/2 da pena (se reincidente).<br />
                        - Ter cumprido 2/3 da pena (se crime hediondo).<br />
                        - Ter bom comportamento durante a execução da pena.<br />
                        - Vedado o livramento condicional para crimes hediondos com resultado de morte.</p>
                    </div>

                    <footer>
                        <p className={`${darkTheme ? `text-white` : `text-black`}`}>Calculadora criada com base na lei n° 13.964/2019, válida para crimes dolosos</p>
                    </footer>

                </div>
            </div>
            
            
            

        </main>
    )
}