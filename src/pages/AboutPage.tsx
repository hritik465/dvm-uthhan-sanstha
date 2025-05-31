import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, BookOpen, Users, Heart, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container">
          <div className="text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Learn about our journey, mission, vision, and the values that drive us.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-heading mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Established in 1993, DVM Utthan Sansthan is committed to delivering quality education and empowering individuals from all backgrounds. Our mission is to nurture young minds with the knowledge, skills, and values needed to thrive in today’s world. With dedicated educators and modern facilities, we create a learning environment that blends traditional values with modern teaching methods to inspire creativity and critical thinking.
                </p>
                <p>
                 We also focus on skill development to help unemployed and under-skilled youth become economically independent. Our programs target individuals aged 18–35, with special provisions for women (30%), minorities (20%), and other vulnerable groups including persons with disabilities. Training is provided in NSQF (National Skills Qualifications Framework) compliant courses, ensuring industry-relevant and standardized learning for long-term employability.
                </p>
                <p>
                  Our skill-based programs include training in areas such as <b>accounting, healthcare, fashion designing, electronics, and much more</b>, equipping students with practical knowledge and job-ready skills to build a brighter, more empowered future.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="/job-fair-gallery-1.jpeg" 
                  alt="DVM Utthan Sansthan" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-dark p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <span className="block text-3xl font-bold">32</span>
                    <span className="text-sm font-medium">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Mission, Vision & Values
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The guiding principles that shape our educational approach and institutional culture.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide transformative training that empowers youth with knowledge, skills, and values necessary to excel in their chosen fields and contribute positively to society.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <BookOpen size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a premier educational institution that nurtures lifelong learners, innovative thinkers, and compassionate individuals who shape a better future for all.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Heart size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Excellence in all endeavors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Integrity and ethical conduct</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Respect for diversity and inclusion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Innovation and continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Social responsibility and community service</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-primary font-heading mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Leadership Team
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Meet the dedicated team of our institution.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Mr. Shubham Bhati', role: 'Chairman', image: '/chairman.png' },
              { name: 'Mr. Rajnesh Bhati', role: 'Secretary', image: '/secretary.png' },
              { name: 'Mr. Satender Bhati', role: 'Vice Chairman', image: '/vice-chairman.png' },
              { name: 'Mrs. Ruby Rani', role: 'Treasurer', image: '/treasurer.png' }
            ].map((person, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Achievements
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A testament to our commitment to excellence in education.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Best Educational Institution', year: '2023', description: 'Awarded by the State Education Department for excellence in academic standards and infrastructure.', icon: <Award size={36} /> },
              { title: 'Innovation in Teaching', year: '2022', description: 'Recognized for implementing innovative teaching methodologies and technology integration.', icon: <BookOpen size={36} /> },
              { title: 'Community Impact Award', year: '2021', description: 'Honored for contributions to community development through educational initiatives.', icon: <Users size={36} /> }
            ].map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 text-accent">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-white/70 text-sm mb-2">{achievement.year}</p>
                <p className="text-white/80">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-primary font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Join Our Educational Journey
            </motion.h2>
            <motion.p 
              className="mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Whether you're a prospective student or a community member, we invite you to be a part of our educational community and experience the Gulshan difference.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
              <a href="/courses" className="btn btn-outline">
                Explore Courses
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;