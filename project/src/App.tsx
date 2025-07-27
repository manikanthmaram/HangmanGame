import React, { useState, useEffect } from 'react';
import { getRandomWord } from './utils/words';
import { GameState } from './types/game';
import HangmanDrawing from './components/HangmanDrawing';
import WordDisplay from './components/WordDisplay';
import LetterButtons from './components/LetterButtons';
import GameStats from './components/GameStats';
import GameResult from './components/GameResult';

const MAX_WRONG_GUESSES = 6;

function App() {
  const [gameState, setGameState] = useState<GameState>(() => ({
    currentWord: getRandomWord(),
    guessedLetters: new Set(),
    wrongGuesses: 0,
    maxWrongGuesses: MAX_WRONG_GUESSES,
    gameStatus: 'playing',
    wins: parseInt(localStorage.getItem('hangman-wins') || '0'),
    losses: parseInt(localStorage.getItem('hangman-losses') || '0'),
    currentStreak: parseInt(localStorage.getItem('hangman-streak') || '0'),
  }));

  // Save stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('hangman-wins', gameState.wins.toString());
    localStorage.setItem('hangman-losses', gameState.losses.toString());
    localStorage.setItem('hangman-streak', gameState.currentStreak.toString());
  }, [gameState.wins, gameState.losses, gameState.currentStreak]);

  // Check win/lose conditions
  useEffect(() => {
    const wordLetters = new Set(gameState.currentWord.split(''));
    const guessedWordLetters = new Set(
      [...gameState.guessedLetters].filter(letter => 
        gameState.currentWord.includes(letter)
      )
    );

    if (wordLetters.size === guessedWordLetters.size && gameState.gameStatus === 'playing') {
      setGameState(prev => ({
        ...prev,
        gameStatus: 'won',
        wins: prev.wins + 1,
        currentStreak: prev.currentStreak + 1,
      }));
    } else if (gameState.wrongGuesses >= MAX_WRONG_GUESSES && gameState.gameStatus === 'playing') {
      setGameState(prev => ({
        ...prev,
        gameStatus: 'lost',
        losses: prev.losses + 1,
        currentStreak: 0,
      }));
    }
  }, [gameState.guessedLetters, gameState.wrongGuesses, gameState.currentWord, gameState.gameStatus]);

  const handleLetterGuess = (letter: string) => {
    if (gameState.guessedLetters.has(letter) || gameState.gameStatus !== 'playing') {
      return;
    }

    const newGuessedLetters = new Set([...gameState.guessedLetters, letter]);
    const isCorrectGuess = gameState.currentWord.includes(letter);

    setGameState(prev => ({
      ...prev,
      guessedLetters: newGuessedLetters,
      wrongGuesses: isCorrectGuess ? prev.wrongGuesses : prev.wrongGuesses + 1,
    }));
  };

  const startNewGame = () => {
    setGameState(prev => ({
      ...prev,
      currentWord: getRandomWord(),
      guessedLetters: new Set(),
      wrongGuesses: 0,
      gameStatus: 'playing',
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            🎯 Hangman
          </h1>
          <p className="text-xl text-gray-600">
            Guess the word before the drawing is complete!
          </p>
        </div>

        {/* Game Stats */}
        <GameStats 
          wins={gameState.wins}
          losses={gameState.losses}
          currentStreak={gameState.currentStreak}
        />

        {/* Main Game Area */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Hangman Drawing */}
            <div className="flex justify-center">
              <HangmanDrawing
                wrongGuesses={gameState.wrongGuesses}
                maxWrongGuesses={gameState.maxWrongGuesses}
              />
            </div>

            {/* Word Display */}
            <div className="flex flex-col justify-center">
              <WordDisplay
                word={gameState.currentWord}
                guessedLetters={gameState.guessedLetters}
                gameStatus={gameState.gameStatus}
              />
              
              {/* Game Result */}
              <GameResult
                gameStatus={gameState.gameStatus}
                word={gameState.currentWord}
                onNewGame={startNewGame}
              />
            </div>
          </div>

          {/* Letter Buttons */}
          <LetterButtons
            guessedLetters={gameState.guessedLetters}
            onLetterGuess={handleLetterGuess}
            disabled={gameState.gameStatus !== 'playing'}
            word={gameState.currentWord}
          />
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default App;