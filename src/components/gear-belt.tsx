"use client";

interface GearBeltProps {
  currentSession: number;
  totalSessions: number;
}

export function GearBelt({ currentSession, totalSessions }: GearBeltProps) {
  const progress = currentSession / (totalSessions - 1);
  const topPosition = progress * (typeof window !== 'undefined' ? window.innerHeight - 200 : 600);

  return (
    <>
      {/* Right sidebar */}
      <div className="fixed top-0 right-0 bottom-0 w-30 bg-gray-100 z-50 hidden md:block" />

      {/* Belt */}
      <div
        className="fixed top-0 right-30 w-5 h-screen z-51 hidden md:block"
        style={{
          background: `
            linear-gradient(#333, #333) 0 0 / 10px 20px no-repeat repeat-y,
            linear-gradient(-10deg, transparent 80%, #333 81%) 0 0 / 16px 20px no-repeat repeat-y,
            linear-gradient(10deg, #333 20%, transparent 21%) 0 0 / 16px 20px no-repeat repeat-y
          `,
          filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))",
          clipPath: "inset(0 -200% 0 0)",
        }}
      />

      {/* Gears */}
      <div 
        className="fixed right-0 w-30 z-52 text-gray-600 hidden md:block transition-all duration-700 ease-in-out"
        style={{ 
          filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))",
          top: `${topPosition}px`
        }}
      >
        {/* Small gear (16 tooth) - Gira no sentido anti-horário */}
        <svg
          className="absolute left-full w-28.75 origin-center animate-[spin_8s_linear_infinite_reverse]"
          style={{ translate: "-80% -22%" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 146 146"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m0 68 13.306-1.094a59.756 59.756 0 0 1 2.202-11.126L3.643 49.683l3.827-9.238 12.705 4.079a60.097 60.097 0 0 1 6.308-9.424l-8.637-10.183 7.07-7.071 10.185 8.637a60.15 60.15 0 0 1 7.65-5.311L38.597 8.236l9.239-3.827 6.018 11.71a59.682 59.682 0 0 1 13.052-2.813L68 0h10l1.094 13.306a59.683 59.683 0 0 1 13.052 2.813l6.018-11.71 9.239 3.827-4.154 12.936a59.613 59.613 0 0 1 3.728 2.368 60.13 60.13 0 0 1 3.922 2.943l10.184-8.637 7.071 7.07-8.637 10.185a60.086 60.086 0 0 1 6.308 9.423l12.705-4.08 3.827 9.24-11.864 6.096a59.682 59.682 0 0 1 2.201 11.126L146 68v10l-13.306 1.094a59.762 59.762 0 0 1-2.201 11.126l11.864 6.097-3.827 9.238-12.705-4.079a60.134 60.134 0 0 1-6.18 9.267l-.051.063-.077.093 8.637 10.184-7.071 7.071-10.184-8.637a60.158 60.158 0 0 1-7.42 5.176l-.152.09-.078.045 4.154 12.936-9.239 3.827-6.018-11.71a59.67 59.67 0 0 1-13.052 2.813L78 146H68l-1.094-13.306a59.67 59.67 0 0 1-13.052-2.813l-6.018 11.71-9.239-3.827 4.154-12.936a60.132 60.132 0 0 1-7.65-5.311l-10.184 8.637-7.071-7.071 8.637-10.184a60.072 60.072 0 0 1-6.308-9.423L7.47 105.555l-3.827-9.238 11.864-6.097a59.733 59.733 0 0 1-2.201-11.126L0 78V68Zm73 23c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18Z"
            fill="currentColor"
          />
        </svg>

        {/* Big gear (10 tooth) - Gira no sentido horário */}
        <svg
          className="absolute top-0 left-0 w-19.75 origin-center animate-[spin_5s_linear_infinite]"
          style={{ translate: "16% 102%" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m68.001 10.593-8.587-6.107-6.59 6.458a32.084 32.084 0 0 0-6.063-1.93L45.307 0H34.693l-1.456 9.022a32.435 32.435 0 0 0-6.06 1.923l-6.591-6.458-8.587 6.106 4.24 8.135a31.65 31.65 0 0 0-3.745 5.044L3.28 22.34 0 32.22l8.312 4.141a30.607 30.607 0 0 0 .005 6.236L0 46.74l3.28 9.881 9.208-1.432a30.966 30.966 0 0 0 3.748 5.047l-4.238 8.131 8.588 6.107 6.59-6.457a32.083 32.083 0 0 0 5.89 1.892L34.692 80h10.614l1.63-10.099a32.441 32.441 0 0 0 5.722-1.816l7.38 7.23 8.586-6.107-4.745-9.106a31.655 31.655 0 0 0 3.626-4.914l9.214 1.433 3.28-9.88-8.312-4.142c.212-2.079.208-4.169-.005-6.235L80 32.22l-3.28-9.881-9.208 1.432a30.972 30.972 0 0 0-3.748-5.048l4.237-8.13ZM40 51c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </>
  );
}
