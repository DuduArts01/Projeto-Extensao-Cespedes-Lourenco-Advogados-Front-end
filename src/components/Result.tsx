import { useState, useContext } from 'react';
import { ThemeContext } from "../contexts/themeContext";

type FormData = {
    penaltyYears: number;
    penaltyMonths: number;
    penaltyDays: number;
    baseDate: string;
    detractionDays: number;
    crimeType: string;
    inmateStatus: string;
    daysWorked: number;
    studyHours: number;
    booksRead: number;
};


const PenaltyCalculator = ({ penaltyYears, penaltyMonths, penaltyDays, baseDate, detractionDays, crimeType, inmateStatus, initialRegime, daysWorked, studyHours, booksRead}) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const calculatePenalty = async (formData: FormData) => {
        setLoading(true);
        setError(null);
        
    try {
        const response = await fetch('https://projeto-extensao-cespedes-lourenco.onrender.com/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
        console.error(err);
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = {
          penaltyYears: parseInt(penaltyYears),
          penaltyMonths: parseInt(penaltyMonths),
          penaltyDays: parseInt(penaltyDays),
          baseDate: baseDate,
          detractionDays: parseInt(detractionDays) || 0,
          crimeType: crimeType,
          inmateStatus: inmateStatus,
          initialRegime: initialRegime,
          daysWorked: parseInt(daysWorked) || 0,
          studyHours: parseInt(studyHours) || 0,
          booksRead: parseInt(booksRead) || 0,
        };
        calculatePenalty(formData);
    };
    
    const { darkTheme } = useContext(ThemeContext);

  return (
    <div className='flex gap-15 items-center'>


        <form onSubmit={handleSubmit}>
            <button className={`${darkTheme ? `bg-[#D88715]` : `bg-[#F5AE6F]`} h-15 w-40 text-white text-2xl rounded-full cursor-pointer hover:scale-120 transition-all duration-300`} type="submit" disabled={loading}>
                {loading ? 'Calculando...' : 'Calcular'}
            </button>
        </form>

        {error && <p style={{color: 'red'}}>Erro: Digite os valores pedidos</p>}



        {result && (
          <div className={`${darkTheme ? `bg-[#515257]` : `bg-[#eff0fa]`} flex gap-10 p-5 rounded-xl transition-all duration-300`}>

            <div className='flex flex-col items-center justify-between'>
                <p className={`${darkTheme ? `text-[#fff5e2]` : `text-[#00021a]`} font-bold transition-all duration-300`}>Progressão para Semiaberto</p>
                <p className={`${darkTheme ? `text-white` : `text-black`}`}>{result.schedule.semiOpenEligibilityDate}</p>
            </div>

            <div className='flex flex-col items-center justify-between'>
                <p className={`${darkTheme ? `text-[#fff5e2]` : `text-[#00021a]`} font-bold transition-all duration-300`}>Progressão para Aberto</p>
                <p className={`${darkTheme ? `text-white` : `text-black`}`}>{result.schedule.openEligibilityDate}</p>
            </div>

            <div className='flex flex-col items-center justify-between'>
                <p className={`${darkTheme ? `text-[#fff5e2]` : `text-[#00021a]`} font-bold transition-all duration-300`}>Livramento Condicional</p>
                <p className={`${darkTheme ? `text-white` : `text-black`}`}>{result.schedule.conditionalReleaseDate}</p>
            </div>

            <div className='flex flex-col items-center justify-between'>
                <p className={`${darkTheme ? `text-[#fff5e2]` : `text-[#00021a]`} font-bold transition-all duration-300`}>Término da Pena</p>
                <p className={`${darkTheme ? `text-white` : `text-black`}`}>{result.schedule.penaltyEndDate}</p>
            </div>

          </div>
        )}

    </div>
  );
};

export default PenaltyCalculator;