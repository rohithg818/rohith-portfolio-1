import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis
} from 'recharts';
import { SKILLS } from '../constants';

export const SkillsRadar: React.FC = () => {
  return (
    <div className="w-full h-[400px] relative">
      {/* Decorative background grid effect behind chart */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent opacity-50"></div>
      
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ fill: '#00FF4F', fontSize: 12, fontFamily: 'Share Tech Mono' }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#00FF4F"
            strokeWidth={2}
            fill="#00FF4F"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
      
      {/* Floating stats for decoration */}
      <div className="absolute top-0 right-0 p-4 font-mono text-xs text-slate-500 hidden md:block">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-[#00FF4F] rounded-full animate-pulse"></div>
          <span>NEURAL_NET ACTIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
          <span>UX_SYSTEMS STABLE</span>
        </div>
      </div>
    </div>
  );
};
