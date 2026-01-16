import { useMemo, useState } from 'react';
import schemes from '../components/GovernmentSchemes/schemes';
import SchemeCard from '../components/GovernmentSchemes/SchemeCard';

function GovernmentSchemes() {
  const [activeButton, setActiveButton] = useState('Central');

  const filteredSchemes = useMemo(() =>
    schemes.filter(scheme => scheme.type === activeButton),
    [activeButton]);

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans">

      {/* Top Accent Border */}
      <div className="w-full  bg-linear-to-r from-red-600 via-red-500 to-red-800" />

      {/* Hero Section */}
      <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[480px] overflow-hidden">
        <img
          src="/GovernmentSchemes_Img.png"
          alt="Government Schemes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
            Government <span className="text-red-500">Schemes</span>
          </h1>
          <p className="mt-4 text-gray-200 text-base sm:text-lg max-w-2xl">
            Discover welfare initiatives designed to support students, youth, and citizens.
          </p>
        </div>

        <div className="absolute bottom-0 w-full h-1 bg-red-600" />
      </div>

      {/* Toggle Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-2 sm:p-4 flex justify-center gap-3 sm:gap-6 border border-gray-100">

          {/* Central */}
          <button
            onClick={() => setActiveButton('Central')}
            className={`
              relative px-6 py-3 rounded-xl font-semibold text-sm sm:text-base
              transition-all duration-300
              ${
                activeButton === 'Central'
                  ? 'bg-red-600 text-white shadow-md scale-105'
                  : 'text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            Central Government
          </button>

          {/* State */}
          <button
            onClick={() => setActiveButton('State')}
            className={`
              relative px-6 py-3 rounded-xl font-semibold text-sm sm:text-base
              transition-all duration-300
              ${
                activeButton === 'State'
                  ? 'bg-red-600 text-white shadow-md scale-105'
                  : 'text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            State Government
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {activeButton} Government Schemes
          </h2>
          <span className="text-sm text-gray-500">
            Showing {filteredSchemes.length} schemes
          </span>
        </div>
      </div>

      {/* Scheme Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-16">
        {filteredSchemes.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No schemes available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default GovernmentSchemes;
