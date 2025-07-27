import React from 'react';

interface LetterButtonsProps {
  guessedLetters: Set<string>;
  onLetterGuess: (letter: string) => void;
  disabled: boolean;
  word: string;
}

const LetterButtons: React.FC<LetterButtonsProps> = ({ 
  guessedLetters, 
  onLetterGuess, 
  disabled, 
  word 
}) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const getButtonStyle = (letter: string) => {
    if (!guessedLetters.has(letter)) {
      return 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600 transform hover:scale-105';
    }
    
    if (word.includes(letter)) {
      return 'bg-green-100 text-green-800 border-green-300 cursor-not-allowed';
    } else {
      return 'bg-red-100 text-red-800 border-red-300 cursor-not-allowed';
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Choose a Letter</h3>
      <div className="grid grid-cols-6 md:grid-cols-9 gap-2 max-w-2xl mx-auto">
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => onLetterGuess(letter)}
            disabled={disabled || guessedLetters.has(letter)}
            className={`
              w-10 h-10 md:w-12 md:h-12 
              font-bold text-sm md:text-base
              border-2 rounded-lg
              transition-all duration-200
              shadow-sm hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-blue-300
              ${getButtonStyle(letter)}
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LetterButtons;