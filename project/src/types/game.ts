export interface GameState {
  currentWord: string;
  guessedLetters: Set<string>;
  wrongGuesses: number;
  maxWrongGuesses: number;
  gameStatus: 'playing' | 'won' | 'lost';
  wins: number;
  losses: number;
  currentStreak: number;
}

export interface GameStats {
  wins: number;
  losses: number;
  currentStreak: number;
  bestStreak: number;
}