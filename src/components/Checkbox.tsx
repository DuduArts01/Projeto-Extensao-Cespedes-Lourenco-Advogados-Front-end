interface CheckboxProps {
  label: string;
  darkTheme: boolean;
}

export default function Checkbox({ label, darkTheme }: CheckboxProps) {
    return (
      <div className="flex gap-2 items-center">
        <div className="flex relative">
          <input
            type="checkbox"
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
          {label}
        </p>
      </div>
    );
  }