import React from 'react';
import { Trophy, Target, Zap } from 'lucide-react';

interface GameStatsProps {
  wins: number;
  losses: number;
  currentStreak: number;
}

const GameStats: React.FC<GameStatsProps> = ({ wins, losses, currentStreak }) => {
  const totalGames = wins + losses;
  const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-700">Win Rate</p>
            <p className="text-2xl font-bold text-blue-900">{winRate}%</p>
          </div>
          <Trophy className="w-8 h-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-700">Games Won</p>
            <p className="text-2xl font-bold text-green-900">{wins}</p>
          </div>
          <Target className="w-8 h-8 text-green-500" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-purple-700">Current Streak</p>
            <p className="text-2xl font-bold text-purple-900">{currentStreak}</p>
          </div>
          <Zap className="w-8 h-8 text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default GameStats;