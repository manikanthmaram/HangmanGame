import React from 'react';

interface HangmanDrawingProps {
  wrongGuesses: number;
  maxWrongGuesses: number;
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ wrongGuesses, maxWrongGuesses }) => {
  const bodyParts = [
    'head',
    'body',
    'leftArm',
    'rightArm',
    'leftLeg',
    'rightLeg'
  ];

  const getStrokeColor = () => {
    if (wrongGuesses === 0) return '#9CA3AF';
    if (wrongGuesses >= maxWrongGuesses - 1) return '#EF4444';
    return '#374151';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <svg
          width="200"
          height="250"
          className="border-2 border-gray-200 rounded-lg bg-white shadow-sm"
        >
          {/* Gallows */}
          <line x1="10" y1="230" x2="150" y2="230" stroke="#8B5CF6" strokeWidth="4" />
          <line x1="30" y1="230" x2="30" y2="20" stroke="#8B5CF6" strokeWidth="4" />
          <line x1="30" y1="20" x2="100" y2="20" stroke="#8B5CF6" strokeWidth="4" />
          <line x1="100" y1="20" x2="100" y2="50" stroke="#8B5CF6" strokeWidth="4" />

          {/* Head */}
          {wrongGuesses >= 1 && (
            <circle
              cx="100"
              cy="70"
              r="20"
              stroke={getStrokeColor()}
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
          )}

          {/* Body */}
          {wrongGuesses >= 2 && (
            <line
              x1="100"
              y1="90"
              x2="100"
              y2="150"
              stroke={getStrokeColor()}
              strokeWidth="3"
              className="animate-pulse"
            />
          )}

          {/* Left arm */}
          {wrongGuesses >= 3 && (
            <line
              x1="100"
              y1="110"
              x2="70"
              y2="130"
              stroke={getStrokeColor()}
              strokeWidth="3"
              className="animate-pulse"
            />
          )}

          {/* Right arm */}
          {wrongGuesses >= 4 && (
            <line
              x1="100"
              y1="110"
              x2="130"
              y2="130"
              stroke={getStrokeColor()}
              strokeWidth="3"
              className="animate-pulse"
            />
          )}

          {/* Left leg */}
          {wrongGuesses >= 5 && (
            <line
              x1="100"
              y1="150"
              x2="80"
              y2="180"
              stroke={getStrokeColor()}
              strokeWidth="3"
              className="animate-pulse"
            />
          )}

          {/* Right leg */}
          {wrongGuesses >= 6 && (
            <line
              x1="100"
              y1="150"
              x2="120"
              y2="180"
              stroke={getStrokeColor()}
              strokeWidth="3"
              className="animate-pulse"
            />
          )}
        </svg>
      </div>
      
      <div className="text-center">
        <div className="text-sm font-medium text-gray-600 mb-2">
          Wrong Guesses: {wrongGuesses} / {maxWrongGuesses}
        </div>
        <div className="w-48 bg-gray-200 rounded-full h-2 shadow-inner">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              wrongGuesses === 0 
                ? 'bg-green-400' 
                : wrongGuesses >= maxWrongGuesses - 1 
                ? 'bg-red-500' 
                : 'bg-yellow-400'
            }`}
            style={{ width: `${(wrongGuesses / maxWrongGuesses) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HangmanDrawing;