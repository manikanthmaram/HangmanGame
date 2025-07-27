import React from 'react';
import { RefreshCw, Trophy, X } from 'lucide-react';

interface GameResultProps {
  gameStatus: 'playing' | 'won' | 'lost';
  word: string;
  onNewGame: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ gameStatus, word, onNewGame }) => {
  if (gameStatus === 'playing') return null;

  const isWon = gameStatus === 'won';

  return (
    <div className={`text-center p-6 rounded-lg border-2 mb-8 ${
      isWon 
        ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200' 
        : 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
    }`}>
      <div className="flex justify-center mb-4">
        {isWon ? (
          <Trophy className="w-16 h-16 text-green-500" />
        ) : (
          <X className="w-16 h-16 text-red-500" />
        )}
      </div>
      
      <h2 className={`text-2xl font-bold mb-2 ${
        isWon ? 'text-green-800' : 'text-red-800'
      }`}>
        {isWon ? '🎉 Congratulations!' : '💀 Game Over!'}
      </h2>
      
      <p className={`text-lg mb-4 ${
        isWon ? 'text-green-700' : 'text-red-700'
      }`}>
        {isWon 
          ? 'You guessed the word correctly!' 
          : `The word was: ${word}`
        }
      </p>
      
      <button
        onClick={onNewGame}
        className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        New Game
      </button>
    </div>
  );
};

export default GameResult;