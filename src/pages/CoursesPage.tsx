import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
  id: 1,
  title: 'Healthcare',
  description: 'Empowering youth with essential skills for the healthcare sector, focusing on hands-on training, patient care, and health education.',
  image: '/health-care.jpeg',
  features: ['Clinical skills training', 'First-aid certification', 'Patient handling techniques'],
  duration: '6 months',
  students: '150+ enrolled',
  slug: 'healthcare'
  },
  {
    id: 2,
    title: 'Job Fairs',
    description: 'Bridging the gap between skilled youth and employment by organizing regular job fairs with reputed companies and industries.',
    image: '/jobfair-gallery.jpeg',
    features: ['Direct employer interaction', 'Placement assistance', 'Regular assessments'],
    duration: '9 months',
    students: '100+ enrolled',
    slug: 'job-fairs'
  },
  {
    id: 3,
    title: 'Community Mobilization',
    description: 'Active engagement with local communities to spread awareness and promote participation in educational and skilling initiatives.',
    image: '/community-mobilization.jpeg',
    features: ['Door-to-door outreach', 'Local awareness campaigns', 'Encouraging inclusivity'],
    duration: '6 months',
    students: '100+ enrolled',
    slug: 'community-mobilization'
  },
  {
    id: 4,
    title: 'Training Facilities',
    description: 'Skill development programs designed to equip youth with practical, industry-relevant training for sustainable livelihoods.',
    image: '/training-facilities.jpeg',
    features: ['Hands-on vocational training', 'Certified skill courses', 'Career readiness modules'],
    duration: '1 year',
    students: '80+ enrolled',
    slug: 'Training-facilities'
  },
  {
    id: 5,
    title: 'Women Empowerment',
    description: 'Dedicated initiatives that uplift women by providing access to training, resources, and opportunities for financial independence.',
    image: '/women-empowerment.jpeg',
    features: ['Tailored skill programs for women', 'Self-help and entrepreneurship support', 'Safe and inclusive learning spaces'],
    duration: 'Varies',
    students: '60+ enrolled',
    slug: 'Women-Empowerment'
  },
  {
  id: 6,
  title: 'Accounting',
  description: 'Equipping students with essential knowledge of accounting principles, financial systems, and taxation to excel in finance-related roles.',
  image: '/accounting.jpeg',
  features: ['Tally and GST training', 'Practical bookkeeping', 'Taxation fundamentals'],
  duration: '6 months',
  students: '120+ enrolled',
  slug: 'accounting',
  },
    {
  id: 7,
  title: 'Fashion Designing',
  description: 'Fostering creativity and design skills in students to prepare them for the dynamic fashion industry through practical and theoretical training.',
  image: '/fashion-designing.jpeg',
  features: ['Hands-on stitching practice', 'Fashion illustration', 'Portfolio development'],
  duration: '9 months',
  students: '80+ enrolled',
  slug: 'fashion-designing'
  },
    {
  id: 8,
  title: 'Electronics',
  description: 'Training youth in the fundamentals of electronics, circuit design, and repair to prepare them for roles in the booming electronics sector.',
  image: '/electronics.jpeg',
  features: ['Circuit building', 'Appliance repair training', 'Hands-on lab work'],
  duration: '6 months',
  students: '90+ enrolled',
  slug: 'electronics'
  }

];

const CoursesPage: React.FC = () => {
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
              Our Courses & Programs
            </motion.h1>
            <motion.p 
              className="text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our comprehensive range of educational programs designed to nurture talent and build strong foundations.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="card h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <ul className="mb-6 space-y-2 flex-grow">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center mb-2 mr-4">
                      <Clock size={16} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Users size={16} className="mr-1" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/courses/${course.slug}`} 
                    className="btn btn-primary text-center mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
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
              Admission Process
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We've made our application process simple and straightforward. Here's how to join our educational community.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 1, title: 'Submit Application', description: 'Complete our application form with personal and academic details.' },
              { step: 2, title: 'Document Verification', description: 'Submit required documents for verification of eligibility and background.' },
              { step: 3, title: 'Final Enrollment', description: 'Welcome on-board. Let the learning begin!' }
            ].map((item, index) => (
              <motion.div 
                key={item.step}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent text-dark text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn-primary">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;

export { courses }