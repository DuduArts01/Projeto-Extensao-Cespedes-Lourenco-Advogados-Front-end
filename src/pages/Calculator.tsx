import Navbar from "../components/Navbar";
import { FaCalculator } from "react-icons/fa";
import { ThemeContext } from "../contexts/themeContext";
import { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Checkbox from "../components/Checkbox";

export default function Calculator() {
  const { darkTheme } = useContext(ThemeContext);

  const [isCrimeOpen, setCrimeOpen] = useState(false);
  const toggleCrime = () => {
    setCrimeOpen((prev) => !prev);
  };

  const [isRegimeOpen, setRegimeOpen] = useState(false);
  const toggleRegime = () => {
    setRegimeOpen((prev) => !prev);
  };

  const [regimeText, setRegimeText] = useState("Selecione o regime");
  const [crimeText, setCrimeText] = useState("Selecione o tipo de crime");


  return (
    <main className="flex flex-col w-full min-h-screen">
      <div
        className={`${darkTheme ? `bg-[#111111]` : `bg-[#f7f3ed]`} min-h-screen flex flex-col gap-5 transition-colors duration-300`}
      >
        <div>
          <Navbar></Navbar>
        </div>

        <div className="flex-1 flex flex-col items-center p-10 gap-10">
          <div
            className={`${darkTheme ? `bg-[#1E1E20]` : `bg-[#fffdfb]`} flex flex-col shadow-2xl w-300 rounded-xl gap-5 p-10 transition-all duration-300`}
          >
            <div className="flex flex-col justify-between">
              <h1
                className={`${darkTheme ? `text-[#D88715]` : `text-black`} flex font-bold text-3xl transition-all duration-300`}
              >
                Dados da Pena
              </h1>

              <div className="flex gap-5">
                <div className="flex-1 flex gap-5 items-center">
                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                    >
                      Anos
                    </h2>
                    <input
                      type="text"
                      className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                      placeholder="A partir de 1 ano"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                    >
                      Meses
                    </h2>
                    <input
                      type="text"
                      className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                      placeholder="Até 11 meses"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                    >
                      Dias
                    </h2>
                    <input
                      type="text"
                      className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                      placeholder="Até 29 dias"
                    />
                  </div>
                </div>

                <div
                  className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#303380]`} border`}
                ></div>

                <div
                  className={`${darkTheme ? `bg-[#45464a]` : `bg-[#f6f6fc]`} flex flex-col p-5 border border-gray-300 rounded-xl gap-5 transition-all duration-300`}
                >
                  <Checkbox label="Reincidente" darkTheme={darkTheme} />
                  <Checkbox label="Crime com violência ou grave ameaça" darkTheme={darkTheme} />
                  <div className="flex gap-2 items-center">
                    <p
                      className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                    >
                      Tempo de Detração:
                    </p>
                    <input
                      type="text"
                      className={`${darkTheme ? `text-white placeholder:text-white bg-[#515257]` : `text-black placeholder:text-black bg-[#eff0fa]`} border border-gray-300 rounded-lg focus:outline-none p-2 transition-all duration-300`}
                      placeholder="A partir de 1 dia"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#303380]`} border`}
            ></div>

            <div className="flex gap-5">
              <div className="flex flex-col w-1/2 gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Regime Inicial
                </h2>
                <div className="relative flex w-full items-center">
                <div className="w-full">
                        <input
                        type="text"
                        className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} relative w-full p-3 outline-none rounded-xl rounded-r-xl transition-all duration-300`}
                        placeholder={regimeText || "Selecione o regime"}
                        />

                        <div className={`${isRegimeOpen ? `` : `hidden`} ${darkTheme ? `bg-[#515257]` : `bg-[#eff0fa]`} absolute flex flex-col w-full shadow-xl rounded-xl`}>
                            <p 
                            onMouseEnter={() => setRegimeText("Fechado")}
                            onClick={() => {
                                setRegimeText("Fechado");
                                setRegimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Fechado</p>

                            <p
                            onMouseEnter={() => setRegimeText("Semiaberto")}
                            onClick={() => {
                                setRegimeText("Semiaberto");
                                setRegimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Semiaberto</p>

                            <p
                            onMouseEnter={() => setRegimeText("Aberto")}
                            onClick={() => {
                                setRegimeText("Aberto");
                                setRegimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Aberto</p>
                        </div>
                    </div>

                  <button
                    type="button"
                    onClick={toggleRegime}
                    className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#eff0fa]`} absolute right-0 rounded-r-xl h-full w-10 border cursor-pointer transition-all duration-300`}
                  >
                    <IoIosArrowForward
                      className={`${isRegimeOpen ? `rotate-90` : ``} h-full w-full transition-all duration-300`}
                    ></IoIosArrowForward>
                  </button>
                </div>
                
              </div>

              <div className="flex flex-col w-1/2 gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Tipo de Crime
                </h2>
                <div className="relative flex w-full items-center">
                    <div className="w-full">
                        <input
                        type="text"
                        className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} relative w-full p-3 outline-none rounded-xl rounded-r-xl transition-all duration-300`}
                        placeholder={crimeText || "Selecione o tipo de crime"}
                        />

                        <div className={`${isCrimeOpen ? `` : `hidden`} ${darkTheme ? `bg-[#515257]` : `bg-[#eff0fa]`} absolute flex flex-col w-full shadow-xl rounded-xl`}>
                            <p
                            onMouseEnter={() => setCrimeText("Hediondo com resultado em morte")}
                            onClick={() => {
                                setCrimeText("Hediondo com resultado em morte");
                                setCrimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Hediondo com resultado em morte</p>

                            <p
                            onMouseEnter={() => setCrimeText("Organização Criminosa")}
                            onClick={() => {
                                setCrimeText("Organização Criminosa");
                                setCrimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Organização Criminosa</p>

                            <p
                            onMouseEnter={() => setCrimeText("Tráfico de Drogas")}
                            onClick={() => {
                                setCrimeText("Tráfico de Drogas");
                                setCrimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Tráfico de Drogas</p>

                            <p
                            onMouseEnter={() => setCrimeText("Hediondo")}
                            onClick={() => {
                                setCrimeText("Hediondo");
                                setCrimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Hediondo</p>

                            <p
                            onMouseEnter={() => setCrimeText("Comum")}
                            onClick={() => {
                                setCrimeText("Comum");
                                setCrimeOpen(false);
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Comum</p>

                        </div>
                    </div>

                    <button
                    type="button"
                    onClick={toggleCrime}
                    className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#eff0fa]`} absolute right-0 rounded-r-xl h-full w-10 border cursor-pointer transition-all duration-300`}
                    >
                    <IoIosArrowForward
                        className={`${isCrimeOpen ? `rotate-90` : ``} h-full w-full transition-all duration-300`}
                    ></IoIosArrowForward>
                    </button>
                    
                </div>
              </div>
            </div>

            <div
              className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#303380]`} border`}
            ></div>

            <div className="flex justify-between gap-5">
              <div className="flex flex-col w-1/2 gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Data de Início do Cumprimento da Pena
                </h2>
                <input
                  type="text"
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="dd/mm/aaaa"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Dias Trabalhados
                </h2>
                <input
                  type="text"
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="A partir de 1 dia"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Horas de Estudo
                </h2>
                <input
                  type="text"
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="A partir de 1 hora"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Livros Lidos
                </h2>
                <input
                  type="text"
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="A partir de 1 livro"
                />
              </div>
            </div>

            <div
              className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#303380]`} border`}
            ></div>

            <div className="flex w-full gap-10 justify-between">
              <div
                className={`${darkTheme ? `bg-[#515257]` : `bg-[#eff0fa]`} flex flex-1 gap-10 p-5 rounded-xl justify-between transition-all duration-300`}
              >
                <div className="flex flex-col items-center gap-3">
                  <h2
                    className={`${darkTheme ? `text-[#fff5e2]` : `text-[#00021a]`} font-bold transition-all duration-300`}
                  >
                    Regime Semiaberto
                  </h2>
                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                  >
                    120 dias
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <h2
                    className={`${darkTheme ? `text-[#fff5e2]` : `text-[#00021a]`} font-bold transition-all duration-300`}
                  >
                    Regime Aberto
                  </h2>
                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                  >
                    120 dias
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <h2
                    className={`${darkTheme ? `text-[#fff5e2]` : `text-[#00021a]`} font-bold transition-all duration-300`}
                  >
                    Liberdade Condicional
                  </h2>
                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                  >
                    120 dias
                  </p>
                </div>
              </div>
              <div className="flex p-5">
                <button
                  className={`${darkTheme ? `bg-[#D88715]` : `bg-[#F5AE6F]`} text-white rounded-2xl p-5 text-xl flex gap-5 items-center cursor-pointer hover:scale-110 transition-all duration-300`}
                >
                  Calcular {<FaCalculator />}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-[#fffdfb]`} flex flex-col shadow-2xl w-300 gap-5 p-5 rounded-xl transition-all duration-300`}
          >
            <h1
              className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}
            >
              O que é a Remição de Pena?
            </h1>
            <p>
              A remição de pena é um benefício concedido ao detento, permitindo
              a redução do tempo de cumprimento da pena através de atividades
              como trabalho, estudo e leitura.
            </p>
          </div>

          <div
            className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-[#fffdfb]`} flex flex-col shadow-2xl w-300 gap-5 p-5 rounded-xl transition-all duration-300`}
          >
            <h1
              className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}
            >
              Critérios para Remição
            </h1>
            <p>
              - Trabalho: Redução de 1 dia a cada 3 dias trabalhados. Não existe
              remição de trabalho para o Regime Aberto.
              <br />
              - Estudo: Redução de 1 dia a cada 12 horas de estudo, podendo
              incluir cursos presenciais ou a distância.
              <br />
              - Leitura: Redução de até 4 dias por livro lido, com a necessidade
              de apresentação de um resumo.
              <br />- Atividades complementares: Cursos profissionalizantes
              também podem contar para a remição.
            </p>
          </div>

          <div
            className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-[#fffdfb]`} flex flex-col shadow-2xl w-300 gap-5 p-5 rounded-xl transition-all duration-300`}
          >
            <h1
              className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}
            >
              Progressão de Regime
            </h1>
            <p>
              Um detento pode progredir de regime conforme o tempo cumprido e o
              bom comportamento atestado, além de exame criminológico:
              <br />
              <br />
              - Crimes comuns: Após cumprir 16% da pena.
              <br />
              - Crimes comuns (reincidente): Após cumprir 20% da pena.
              <br />
              - Violência ou grave ameaça: Após cumprir 25% da pena.
              <br />
              - Violência ou grave ameaça (reincidente): Após cumprir 30% da
              pena.
              <br />
              - Crimes hediondos: Após cumprir 40% da pena.
              <br />
              - Crimes hediondos (reincidente): Após cumprir 60% da pena.
              <br />
              - Crimes hediondos(Resultado Morte): Após cumprir 50% da pena.
              <br />- Crimes hediondos (Resultado Morte)(reincidente): Após
              cumprir 70% da pena.
            </p>
          </div>

          <div
            className={`${darkTheme ? `text-white bg-[#1E1E20]` : `text-black bg-[#fffdfb]`} flex flex-col shadow-2xl w-300 gap-5 p-5 rounded-xl transition-all duration-300`}
          >
            <h1
              className={`${darkTheme ? `text-[#D88715]` : `text-black`} font-bold text-2xl transition-all duration-300`}
            >
              Livramento Condicional
            </h1>
            <p>
              O livramento condicional permite que o preso cumpra o restante da
              pena em liberdade, desde que atenda aos seguintes critérios:
              <br />
              <br />
              - Ter cumprido pelo menos 1/3 da pena (se réu primário).
              <br />
              - Ter cumprido pelo menos 1/2 da pena (se reincidente).
              <br />
              - Ter cumprido 2/3 da pena (se crime hediondo).
              <br />
              - Ter bom comportamento durante a execução da pena.
              <br />- Vedado o livramento condicional para crimes hediondos com
              resultado de morte.
            </p>
          </div>

          <footer>
            <p className={`${darkTheme ? `text-white` : `text-black`}`}>
              Calculadora criada com base na lei n° 13.964/2019, válida para
              crimes dolosos
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
