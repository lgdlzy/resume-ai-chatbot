import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from './components/ProfileSection';
import ChatSection from './components/ChatSection';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative">
      <BackgroundElements />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6 h-screen">
          {/* 标题头部 */}
          <motion.header 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
              智能简历展示
            </h1>
            <p className="text-gray-400 text-lg">与AI助手对话，了解罗之尧这位充满活力的产品经理实习生 ✨</p>
          </motion.header>

          {/* 主要内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
            {/* 左侧：个人信息 */}
            <motion.div 
              className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProfileSection />
            </motion.div>

            {/* 右侧：AI对话 */}
            <motion.div 
              className="overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ChatSection />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;