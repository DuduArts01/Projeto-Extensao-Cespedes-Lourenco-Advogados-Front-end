import '../App.css'
import Navbar from '../components/Navbar'

export default function About() {
    return(
        <main className='flex flex-col w-full h-full gap-5'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='flex flex-col w-full min-h-screen justify-start items-center bg-white p-10 gap-10'>
                <h1 className='text-[#F5AE6F] text-4xl'>Sobre Nós</h1>




                <div className='flex flex-col w-260 bg-gray-300 rounded-xl gap-5 p-10'>

                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-[#F5AE6F] text-xl font-bold'>Henrique Cespedes Lourenço</h1>
                        <h2 className='text-[#F5AE6F] text-xl'>OAB/SP nº 336.967</h2>
                    </div>

                    <div className='flex gap-10'>
                        <img src="src\assets\images\henrique_cespedes.png" alt="foto_perfil_henrique" className='rounded-xl h-70'/>
                        <div className='flex flex-col gap-5'>
                            <h2 className='font-bold text-xl'>Formação</h2>  
                            <div className='flex flex-col items-start justify-between gap-5'>
                                <p className='text-xl flex'>- Pós-graduado: Direito Penal Econômico (FGV - São Paulo)</p>
                                <p className='text-xl'>- Especialista: Direito Penal e Processo Penal (Escola Paulista de Direito)</p>
                                <p className='text-xl'>- Bacharel: Direito (Universidade Metodista de São Paulo)</p>
                                <p className='text-xl'>- Membro da Comissão de Prerrogativas da 39º Subseção da OAB/SP</p>
                                <p className='text-xl'>- Membro da Associação Brasileira dos Advogados Criminalistas (ABRACRIM)</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border border-[#F5AE6F]'></div>

                    <div className='flex justify-between'>

                        <div className='flex flex-col gap-5'>
                            <h2 className='font-bold text-xl'>Contatos</h2>
                            <div className='flex flex-col'>
                                <p><span>Email: </span>Email do Cara</p>
                                <p><span>Whatsapp: </span>Zap do Cara</p>
                                <p><span>Linkedin: </span>Linkedin do Cara</p>
                            </div>
                        </div>

                        <img src="src\assets\images\logo-branca.png" alt="logo_cespedes.png" />

                    </div>

                </div>



                <div className='flex flex-col w-260 bg-gray-300 rounded-xl gap-5 p-10'>

                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-[#F5AE6F] text-xl font-bold'>Heloísa Cespedes Lourenço</h1>
                        <h2 className='text-[#F5AE6F] text-xl'>OAB/SP 296.444</h2>
                    </div>

                    <div className='flex gap-10'>
                        <img src="src\assets\images\heloisa_cespedes.png" alt="foto_perfil_heloisa" className='rounded-xl h-70'/>
                        <div className='flex flex-col gap-5'>
                            <h2 className='font-bold text-xl'>Formação</h2>  
                            <div className='flex flex-col items-start justify-between gap-5'>
                                <p className='text-xl flex'>- MBA: Direito Corporativo e Compliance (Escola Paulista de Direito)</p>
                                <p className='text-xl'>- Especialista: Direito do Trabalho, Processo do Trabalho e Previdência Social (Faculdade Damásio de Jesus)</p>
                                <p className='text-xl'>- Bacharel: Direito (Universidade Metodista de São Paulo)</p>
                                <p className='text-xl'>- Capacitação: Mediação e Arbitragem (Escola Superior de Advocacia)</p>
                                <p className='text-xl'>- Membro da Comissão de Prerrogativas da 39º Subseção da OAB/SP</p>
                                <p className='text-xl'>- Calculista</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border border-[#F5AE6F]'></div>

                    <div className='flex justify-between'>

                        <div className='flex flex-col gap-5'>
                            <h2 className='font-bold text-xl'>Contatos</h2>
                            <div className='flex flex-col'>
                                <p><span>Email: </span>Email da Moça</p>
                                <p><span>Whatsapp: </span>Zap da Moça</p>
                                <p><span>Linkedin: </span>Linkedin da Moça</p>
                            </div>
                        </div>

                        <img src="src\assets\images\logo-branca.png" alt="logo_cespedes.png" />

                    </div>

                </div>


            </div>
        </main>
    )
}