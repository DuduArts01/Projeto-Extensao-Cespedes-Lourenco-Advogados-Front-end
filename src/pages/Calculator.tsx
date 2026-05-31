import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/themeContext";
import { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import PenaltyCalculator from "../components/Result"

export default function Calculator() {
  const { darkTheme } = useContext(ThemeContext);

  const [showPopup, setShowPopup] = useState(false);

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

  const [yearError, setYError] = useState('');

  const [penaltyYears, setPenaltyYears] = useState('');
  const handleYear = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const year = evento.target.value;

    setPenaltyYears(year);

    if (year === '') {
      setYError('Digite um valor');
    } else if (Number(year) < 0) {
      setYError('Tempo inválido.');
    } else {
      setYError('');
    }
  };

  const [monthError, setMError] = useState('');
  const [penaltyMonths, setPenaltyMonths] = useState('');
  const handleMonth = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const month = evento.target.value;

    setPenaltyMonths(month);

    if (month === '') {
    setMError('Digite um valor');
    } else if (Number(month) < 0 || Number(month) > 11) {
    setMError('Tempo inválido.');
    } else {
    setMError('');
    }
  };

  const [dayError, setDError] = useState('');
  const [penaltyDays, setPenaltyDays] = useState('');
  const handleDays = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const day = evento.target.value;

    setPenaltyDays(day);

    if (day === '') {
      setDError('Digite um valor');
    } else if (Number(day) < 0 || Number(day) > 29) {
      setDError('Tempo inválido.');
    } else {
      setDError('');
    }
  };

  const [status, setStatus] = useState(true);
  const [inMateStatus, setInMateStatus] = useState('');
  const handleStatus = () => {
    setStatus((prev) => !prev)

    if (status == true) {
      setInMateStatus("RECIDIVIST")
    }
    else {
      setInMateStatus("PRIMARY")
    }
  }

  const [detraction, setDetractionError] = useState('');
  const [detractionDays, setDetractionDays] = useState('');
  const handleDetraction = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const detractionDays = evento.target.value;

    setDetractionDays(detractionDays);

    if (detractionDays === '') {
      setDetractionError('Digite um valor');
    } else if (Number(detractionDays) < 0) {
      setDetractionError('Tempo de Detração inválido.');
    } else {
      setDetractionError('');
    }
  };

    const [dateError, setDateError] = useState('');
    const [baseDate, setBaseDate] = useState('');

    const isValidDate = (value: string) => {
      const [year, month, day] = value.split('-').map(Number);

      const date = new Date(year, month - 1, day);

      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    };

    const handleBaseDate = (evento: React.ChangeEvent<HTMLInputElement>) => {
      const value = evento.target.value.replaceAll('/', '-');

      setBaseDate(value);

      if (value.length === 0) {
        setDateError('');
        return;
      }

      if (value.length !== 10) {
        setDateError('Digite uma data válida');
        return;
      }

      if (!isValidDate(value)) {
        setDateError('Digite uma data válida');
        return;
      }

      setDateError('');
    };

  const [workError, setWorkError] = useState('');
  const [daysWorked, setDaysWorked] = useState('');
  const handleWork = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const daysWorked = evento.target.value;

    setDaysWorked(daysWorked);

    if (daysWorked === '') {
      setWorkError('Digite um valor');
    } else if (Number(daysWorked) < 0) {
      setWorkError('Quantidade inválida.');
    } else {
      setWorkError('');
    }
  };

  const [studyError, setStudyError] = useState('');
  const [studyHours, setStudyHours] = useState('');
  const handleStudy = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const studyHours = evento.target.value;

    setStudyHours(studyHours);

    if (studyHours === '') {
      setStudyError('Digite um valor');
    } else if (Number(studyHours) < 0) {
      setStudyError('Quantidade inválida.');
    } else {
      setStudyError('');
    }
  };

  const [bookError, setBookError] = useState('');
  const [booksRead, setBooksRead] = useState('');
  const handleBooks = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const booksRead = evento.target.value;

    setBooksRead(booksRead);

    if (booksRead === '') {
      setBookError('Digite um valor');
    } else if (Number(booksRead) < 0 || Number(booksRead) > 12) {
      setBookError('Quantidade inválida.');
    } else {
      setBookError('');
    }
  };

  const [regime, setRegime] = useState("");
  const initialRegimeMap: Record<string, string> = {
    Fechado: "CLOSED",
    Semiaberto: "SEMI_OPEN",
    Aberto: "OPEN",
  };
  const initialRegime = initialRegimeMap[regime] ?? "";

  const [crime, setCrime] = useState("");
  const crimeTypeMap: Record<string, string> = {
    Equivalente: "EQUIVALENT",
    Hediondo: "HEINOUS",
    Comum: "COMMON",
  };
  const crimeType = crimeTypeMap[crime] ?? "";

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
                      value={penaltyYears}
                      onChange={handleYear}
                      className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                      placeholder="A partir de 1 ano"
                    />
                    {yearError && <span style={{ color: 'red', fontSize: '14px' }}>{yearError}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                    >
                      Meses
                    </h2>
                    <input
                      type="text"
                      value={penaltyMonths}
                      onChange={handleMonth}
                      className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                      placeholder="Até 11 meses"
                    />
                    {monthError && <span style={{ color: 'red', fontSize: '14px' }}>{monthError}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                    >
                      Dias
                    </h2>
                    <input
                      type="text"
                      value={penaltyDays}
                      onChange={handleDays}
                      className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                      placeholder="Até 29 dias"
                    />
                    {dayError && <span style={{ color: 'red', fontSize: '14px' }}>{dayError}</span>}
                  </div>
                </div>

                <div
                  className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#303380]`} border`}
                ></div>

                <div
                  className={`${darkTheme ? `bg-[#45464a]` : `bg-[#f6f6fc]`} flex flex-col p-5 border border-gray-300 rounded-xl gap-2 transition-all duration-300`}
                >
                  <div className="flex gap-2 items-center">
                    <div className="flex relative">
                      <input
                        type="checkbox"
                        value={inMateStatus}
                        onChange={handleStatus}
                        className={`
                          ${darkTheme ? `border-gray-300
                          bg-[#515257] checked:border-[#D88715] checked:bg-[#D88715]` : `border-gray-300
                          bg-white checked:border-blue-600
                          checked:bg-blue-600`}
                          peer h-5 w-5 shrink-0 appearance-none
                          rounded-md border-2 transition-all duration-200
                        `}
                      />
              
                      <svg
                        className="
                          pointer-events-none absolute
                          left-1/2 top-1/2
                          h-3 w-3
                          -translate-x-1/2 -translate-y-1/2
                          text-white opacity-0
                          peer-checked:opacity-100
                        "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
              
                    <p className={darkTheme ? "text-white" : "text-black"}>
                      Reincidente
                    </p>
                  </div>
                  
                  <div className="flex gap-2 items-center">
                    <p
                      className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                    >
                      Tempo de Detração:
                    </p>
                    <input
                      type="text"
                      value={detractionDays}
                      onChange={handleDetraction}
                      className={`${darkTheme ? `text-white placeholder:text-white bg-[#515257]` : `text-black placeholder:text-black bg-[#eff0fa]`} border border-gray-300 rounded-lg focus:outline-none p-2 transition-all duration-300`}
                      placeholder="A partir de 1 dia"
                    />
                    {detraction && <span style={{ color: 'red', fontSize: '14px' }}>{detraction}</span>}
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
                    disabled
                    type="text"
                    value={regime}
                    className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} relative w-full p-3 outline-none rounded-xl rounded-r-xl transition-all duration-300`}
                    placeholder={regimeText || "Selecione o regime"}
                    />

                    <div className={`${isRegimeOpen ? `` : `hidden`} ${darkTheme ? `bg-[#515257]` : `bg-[#eff0fa]`} absolute flex flex-col w-full shadow-xl rounded-xl`}>
                        <p 
                        onMouseEnter={() => setRegimeText("Fechado")}
                        onClick={() => {
                            setRegimeOpen((prev) => !prev);
                            setRegime("Fechado")
                        }}
                        className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Fechado</p>

                        <p
                        onMouseEnter={() => setRegimeText("Semiaberto")}
                        onClick={() => {
                            setRegimeOpen((prev) => !prev);
                            setRegime("Semiaberto")
                        }}
                        className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Semiaberto</p>

                        <p
                        onMouseEnter={() => setRegimeText("Aberto")}
                        onClick={() => {
                            setRegimeOpen((prev) => !prev);
                            setRegime("Aberto")
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
                        disabled
                        type="text"
                        value={crime}
                        className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} relative w-full p-3 outline-none rounded-xl rounded-r-xl transition-all duration-300`}
                        placeholder={crimeText || "Selecione o tipo de crime"}
                        />

                        <div className={`${isCrimeOpen ? `` : `hidden`} ${darkTheme ? `bg-[#515257]` : `bg-[#eff0fa]`} absolute flex flex-col w-full shadow-xl rounded-xl`}>
                            <p
                            onMouseEnter={() => setCrimeText("Equivalente")}
                            onClick={() => {
                                setCrimeOpen((prev) => !prev);
                                setCrime("Equivalente");
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Equivalente</p>

                            <p
                            onMouseEnter={() => setCrimeText("Hediondo")}
                            onClick={() => {
                                setCrimeOpen((prev) => !prev);
                                setCrime("Hediondo");
                            }}
                            className={`${darkTheme ? `hover:bg-orange-300 text-white` : `hover:bg-blue-300`} cursor-pointer py-1 pl-3 text-xl rounded-xl transition-colors duration-300`}>Hediondo</p>

                            <p
                            onMouseEnter={() => setCrimeText("Comum")}
                            onClick={() => {
                                setCrimeOpen((prev) => !prev);
                                setCrime("Comum");
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
                  type="data"
                  value={baseDate}
                  onChange={handleBaseDate}
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="aaaa-mm-dd"
                />
                {dateError && <span style={{ color: 'red', fontSize: '14px' }}>{dateError}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Dias Trabalhados
                </h2>
                <input
                  type="text"
                  value={daysWorked}
                  onChange={handleWork}
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="A partir de 1 dia"
                />
                {workError && <span style={{ color: 'red', fontSize: '14px' }}>{workError}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Horas de Estudo
                </h2>
                <input
                  type="text"
                  value={studyHours}
                  onChange={handleStudy}
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="A partir de 1 hora"
                />
                {studyError && <span style={{ color: 'red', fontSize: '14px' }}>{studyError}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                >
                  Livros Lidos
                </h2>
                <input
                  type="text"
                  value={booksRead}
                  onChange={handleBooks}
                  className={`${darkTheme ? `bg-[#515257] placeholder:text-white text-white` : `bg-[#eff0fa] placeholder:text-black text-black`} p-3 outline-none rounded-xl transition-all duration-300`}
                  placeholder="Até 12 livros"
                />
                {bookError && <span style={{ color: 'red', fontSize: '14px' }}>{bookError}</span>}
              </div>
            </div>

            <div
              className={`${darkTheme ? `border-[#BCBCBC]` : `border-[#303380]`} border`}
            ></div>

            <div className="flex w-full gap-10 justify-between">
              
              <div className="flex p-5 cursor-pointer" onClick={() => setShowPopup(true)} >
                <PenaltyCalculator 
                penaltyYears={penaltyYears}
                penaltyMonths={penaltyMonths}
                penaltyDays={penaltyDays}
                baseDate={baseDate}
                detractionDays={detractionDays}
                crimeType={crimeType}
                inmateStatus={inMateStatus}
                initialRegime={initialRegime}
                daysWorked={daysWorked}
                studyHours={studyHours}
                booksRead={booksRead}
                ></PenaltyCalculator>
                
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

      {showPopup && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div
          className={`${
            darkTheme ? "bg-[#1E1E20] text-white" : "bg-white text-black"
          } flex flex-col p-8 gap-2 rounded-xl shadow-2xl min-w-100`}
        >
          <div className="flex flex-col gap-10">

            <div className="flex flex-col gap-">
              <h1 className="text-2xl font-bold">
                Deseja entrar em contato com um advogado?
              </h1>
              <h2 className="text-lg">Estamos prontos para te ouvir!</h2>
            </div>

            <div className="flex flex-col gap-2">
              <p><span className="font-bold">Whatsapp: </span>(11) 98208-1902</p>
              <p><span className="font-bold">Email: </span>contato@cespedeslourencoadvogados.com.br</p>
            </div>

          </div>
          

          <button
            onClick={() => setShowPopup(false)}
            className={`${
              darkTheme ? "bg-[#D88715]" : "bg-[#F5AE6F]"
            } mt-6 px-4 py-2 rounded-lg text-white w-fit cursor-pointer hover:scale-120 transition-all duration-300`}
          >
            Fechar
          </button>
        </div>
      </div>
    )}

    </main>
  );
}
