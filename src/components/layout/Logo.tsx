import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = '#1E3A8A' }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20">
      <GraduationCap size={24} color={color} />
    </div>
  );
};

export default Logo;