import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-heading mb-6">About Us</h2>
            <div className="space-y-4">
              <p>
                Established in 1993, Dvm Utthan Sansthan is committed to delivering quality education and empowering individuals from all backgrounds. Our mission is to nurture young minds with the knowledge, skills, and values needed to thrive in today’s world. With dedicated educators and modern facilities.
              </p>
              <p>
               We also focus on skill development to help unemployed and under-skilled youth become economically independent. Our programs target individuals aged 18–35, with special provisions for women (30%), minorities (20%), and other vulnerable groups including persons with disabilities. 
              </p>
              <p>
                Our skill-based programs include training in areas such as <b>accounting, healthcare, fashion designing, electronics, and much more</b>, equipping students with practical knowledge and job-ready skills to build a brighter, more empowered future.
              </p>
            </div>
            <div className="mt-8">
              <a href="/about" className="btn btn-primary">Learn More About Us</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/job-fair-gallery-1.jpeg" 
                alt="Gulshan Educational Welfare Society" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-lg shadow-lg flex items-center justify-center p-4">
              <div className="text-center">
                <span className="block text-3xl font-bold">32</span>
                <span className="text-sm">Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;