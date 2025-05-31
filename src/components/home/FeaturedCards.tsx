import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    title: 'Health Care',
    description: 'Empowering youth with essential skills for the healthcare sector, focusing on hands-on training, patient care, and health education.',
    image: '/health-care.jpeg'
  },
  {
    id: 2,
    title: 'Job Fairs',
    description: 'Connecting skilled youth with employment opportunities through regular job fairs and placement drives.',
    image: '/jobfair-gallery.jpeg'
  },
  {
    id: 3,
    title: 'Community Mobilization',
    description: 'Engaging communities to raise awareness and encourage participation in education and skill-building programs.',
    image: '/community-mobilization.jpeg'
  },
  {
    id: 4,
    title: 'Training Facilities',
    description: 'Equipping youth with industry-relevant skills through hands-on training and expert-led sessions.',
    image: '/training-facilities.jpeg'
  },
  {
    id: 5,
    title: 'Women Empowerment',
    description: 'Focused initiatives to train and support women from underserved communities toward financial independence.',
    image: '/women-empowerment.jpeg'
  },
  {
    id: 6,
    title: 'Accounting',
    description: 'Equipping students with essential knowledge of accounting principles, financial systems, and taxation to excel in finance-related roles.',
    image: '/accounting.jpeg'
  },
    {
    id: 7,
    title: 'Fashion Designing',
    description: 'Fostering creativity and design skills in students to prepare them for the dynamic fashion industry through practical and theoretical training.',
    image: '/fashion-designing.jpeg'
  },
    {
    id: 8,
    title: 'Electronics',
    description: 'Training youth in the fundamentals of electronics, circuit design, and repair to prepare them for roles in the booming electronics sector.',
    image: '/electronics.jpeg'
  }
];

const FeaturedCards: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-primary font-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Programs
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our diverse range of educational programs designed to nurture talents and build strong foundations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="card h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a href="/courses" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;