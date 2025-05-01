
import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-snow flex items-center">
        <span className="text-xl md:text-2xl font-mono">{"{"}</span>
        <span className="text-neon text-xl md:text-2xl font-bold">D</span>
        <span className="text-xl md:text-2xl font-mono">{"}"}</span>
      </div>
      <span className="ml-2 text-xl md:text-2xl font-bold text-snow">Debuglopers</span>
    </div>
  );
};

export default Logo;
