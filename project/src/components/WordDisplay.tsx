import React from 'react';

interface WordDisplayProps {
  word: string;
  guessedLetters: Set<string>;
  gameStatus: 'playing' | 'won' | 'lost';
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters, gameStatus }) => {
  const displayWord = word
    .split('')
    .map(letter => guessedLetters.has(letter) || gameStatus === 'lost' ? letter : '_')
    .join(' ');

  const getTextColor = () => {
    if (gameStatus === 'won') return 'text-green-600';
    if (gameStatus === 'lost') return 'text-red-600';
    return 'text-gray-800';
  };

  return (
    <div className="text-center mb-8">
      <div className={`text-4xl md:text-5xl font-bold font-mono tracking-wider mb-4 ${getTextColor()} transition-colors duration-300`}>
        {displayWord}
      </div>
      <div className="text-sm text-gray-500">
        {word.length} letters • {word.split('').filter(letter => guessedLetters.has(letter)).length} revealed
      </div>
    </div>
  );
};

export default WordDisplay;