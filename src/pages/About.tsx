import '../App.css'
import Navbar from '../components/Navbar'
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

export default function About() {

    const { darkTheme } = useContext(ThemeContext);

    return(
        <main className='flex flex-col w-full min-h-screen'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className={`${darkTheme ? `bg-[#111111]` : `bg-white`} flex-1 flex flex-col justify-start items-center p-10 gap-10 transition-all duration-300`}>
                <h1 className='text-[#C59151] text-4xl'>Sobre Nós</h1>




                <div className={`${darkTheme ? `bg-[#1E1E20]` : `bg-gray-200`} flex flex-col w-300 rounded-xl gap-5 p-10 transition-all duration-300`}>

                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-[#C59151] text-xl font-bold'>Henrique Cespedes Lourenço</h1>
                        <h2 className='text-[#C59151] text-xl'>OAB/SP nº 336.967</h2>
                    </div>

                    <div className='flex gap-10'>
                        <img src="src\assets\images\henrique_cespedes.png" alt="foto_perfil_henrique" className='rounded-xl h-90'/>
                        <div className='flex flex-col gap-5'>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-xl pl-10 transition-all duration-300`}>Formação</h2>  
                            <div className='flex flex-col items-start justify-between gap-5 pl-10'>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Pós-graduado: Direito Penal Econômico (FGV - São Paulo)</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Especialista: Direito Penal e Processo Penal (Escola Paulista de Direito)</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Bacharel: Direito (Universidade Metodista de São Paulo)</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Membro da Comissão de Prerrogativas da 39º Subseção da OAB/SP</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Membro da Associação Brasileira dos Advogados Criminalistas (ABRACRIM)</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border border-[#C59151]'></div>

                    <div className='flex justify-between'>

                        <div className='flex flex-col gap-5'>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-xl transition-all duration-300`}>Contatos</h2>
                            <div className='flex flex-col'>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Email: </span>Email do Cara</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Linkedin: </span>Linkedin do Cara</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Whatsapp: </span>Zap do Cara</p>
                            </div>
                        </div>

                        <img src="src\assets\images\logo-branca.png" alt="logo_cespedes.png" />

                    </div>

                </div>



                <div className={`${darkTheme ? `bg-[#1E1E20]` : `bg-gray-200`} flex flex-col w-300 rounded-xl gap-5 p-10 transition-all duration-300`}>

                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-[#C59151] text-xl font-bold'>Heloísa Cespedes Lourenço</h1>
                        <h2 className='text-[#C59151] text-xl'>OAB/SP 296.444</h2>
                    </div>

                    <div className='flex gap-10'>
                        <img src="src\assets\images\heloisa_cespedes.png" alt="foto_perfil_heloisa" className='rounded-xl h-90'/>
                        <div className='flex flex-col gap-5'>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-xl pl-10 transition-all duration-300`}>Formação</h2>  
                            <div className='flex flex-col items-start justify-between gap-5 pl-10'>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- MBA: Direito Corporativo e Compliance (Escola Paulista de Direito)</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Especialista: Direito do Trabalho, Processo do Trabalho e Previdência Social (Faculdade Damásio de Jesus)</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Bacharel: Direito (Universidade Metodista de São Paulo)</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Capacitação: Mediação e Arbitragem (Escola Superior de Advocacia)</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Membro da Comissão de Prerrogativas da 39º Subseção da OAB/SP</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} text-xl transition-all duration-300`}>- Calculista</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border border-[#C59151]'></div>

                    <div className='flex justify-between'>

                        <div className='flex flex-col gap-5'>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-xl transition-all duration-300`}>Contatos</h2>
                            <div className='flex flex-col'>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Email: </span>Email da Moça</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Linkedin: </span>Linkedin da Moça</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-bold transition-all duration-300`}>Whatsapp: </span>Zap da Moça</p>
                            </div>
                        </div>

                        <img src="src\assets\images\logo-branca.png" alt="logo_cespedes.png" />

                    </div>

                </div>


            </div>
        </main>
    )
}