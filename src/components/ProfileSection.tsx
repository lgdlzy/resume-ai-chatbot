import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Database, Cloud, Palette, User, GraduationCap, Target } from 'lucide-react';

const ProfileSection: React.FC = () => {
  const skills = [
    { name: '产品设计', icon: Code, items: ['Figma', 'Axure', '墨刀', '原型设计'] },
    { name: '数据分析', icon: Database, items: ['Excel', 'SQL基础', 'Python基础', '用户分析'] },
    { name: '项目管理', icon: Cloud, items: ['Jira', 'Trello', '飞书', '敏捷开发'] },
    { name: '市场研究', icon: Palette, items: ['用户调研', '竞品分析', '需求分析', '用户体验'] },
  ];

  const experiences = [
    {
      period: '2024 - 至今',
      company: '西南财经大学',
      position: '产品经理方向学习',
      description: '深入学习产品理论，参与校园创新项目，积累产品设计经验'
    },
    {
      period: '2023 - 2024',
      company: '校园项目实践',
      position: '产品设计与用户研究',
      description: '参与多个校园创新创业项目，负责产品规划与用户体验设计'
    },
    {
      period: '2022 - 2023',
      company: '自主学习阶段',
      position: '产品知识积累',
      description: '系统学习产品经理相关知识，关注互联网产品发展趋势'
    }
  ];

  const highlights = [
    { icon: GraduationCap, title: '西南财经大学', desc: '2026届在读' },
    { icon: Target, title: '产品经理实习', desc: '每周5天，6个月+' },
    { icon: User, title: '立刻到岗', desc: '随时可以开始实习' }
  ];

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      {/* 个人信息头部 */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-white">罗之尧</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">产品经理实习生</h1>
        <p className="text-gray-400 mb-6">西南财经大学 · 2026届 · 充满活力的产品新人</p>
        
        {/* 核心亮点 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <item.icon className="text-neon-blue mx-auto mb-2" size={20} />
              <h3 className="font-semibold text-white text-sm">{item.title}</h3>
              <p className="text-gray-400 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 技能部分 */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Code className="text-neon-blue" size={20} />
          核心技能
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex items-center gap-2 mb-3">
                <skill.icon className="text-neon-purple" size={18} />
                <h3 className="font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item}
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 学习与实践经历 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Palette className="text-neon-purple" size={20} />
          学习与实践经历
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-purple/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-semibold text-white">{exp.position}</h3>
                <span className="text-xs text-neon-blue font-mono">{exp.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ProfileSection;