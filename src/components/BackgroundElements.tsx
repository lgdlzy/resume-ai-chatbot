import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      {/* 动态几何图形 */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-neon-blue/30 rotate-45"
        animate={{ 
          rotate: [45, 225, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-neon-purple/30"
        animate={{ 
          rotate: [0, 360],
          borderRadius: ["0%", "50%", "0%"]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-full"
        animate={{ 
          y: [-10, 10, -10],
          x: [-5, 5, -5]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* 渐变光晕 */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-l from-neon-purple/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundElements;