import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Building } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: <Users size={36} className="text-white" />,
    value: '1500+',
    label: 'Students'
  },
  {
    id: 2,
    icon: <BookOpen size={36} className="text-white" />,
    value: '10+',
    label: 'Programmes'
  },
  {
    id: 3,
    icon: <Award size={36} className="text-white" />,
    value: '5+',
    label: 'Awards'
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="text-center p-6 rounded-lg border border-white/20 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;