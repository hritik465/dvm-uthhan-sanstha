import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-accent/10">
      <div className="container">
        <div className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-white font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Join Our Educational Community?
            </motion.h2>
            <motion.p 
              className="text-white/90 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Take the next step in your educational journey. Explore our community, or get in touch with our team today.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="/courses" className="btn bg-white text-primary hover:bg-white/90">
                Explore Courses
              </a>
              <a href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;