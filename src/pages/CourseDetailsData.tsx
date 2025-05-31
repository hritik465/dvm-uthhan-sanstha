import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const courseDetails = [
  {
  id: 1,
  title: 'Healthcare',
  description: 'Empowering youth with essential skills for the healthcare sector, focusing on hands-on training, patient care, and health education.',
  image: '/health-care.jpeg',
  features: ['Clinical skills training', 'First-aid certification', 'Patient handling techniques'],
  duration: '6 months',
  students: '150+ enrolled',
  slug: 'healthcare',
  curriculum: [
    'Basics of human anatomy and physiology',
    'First-aid and emergency response training',
    'Patient interaction and empathy skills',
    'Hospital visit and real-world exposure',
    'Workshops on hygiene and safety protocols'
  ],
  outcomes: [
    'Readiness for healthcare assistant roles',
    'Improved soft skills and empathy',
    'Basic medical knowledge',
    'Preparedness for further nursing/paramedical studies',
    'Community health awareness'
  ]
  },
  {
    id: 2,
    title: 'Job Fairs',
    description: 'Bridging the gap between skilled youth and employment by organizing regular job fairs with reputed companies and industries.',
    image: '/jobfair-gallery.jpeg',
    features: ['Direct employer interaction', 'Placement assistance', 'Regular assessments'],
    duration: '9 months',
    students: '100+ enrolled',
    slug: 'job-fairs',
    curriculum: [
      'Resume-building and interview preparation',
      'Exposure to various industries',
      'Mock interviews and career counseling',
      'Personality development sessions',
      'Collaboration with hiring companies'
    ],
    outcomes: [
      'Professional readiness',
      'Confidence in interviews',
      'Industry-specific awareness',
      'Effective communication',
      'Employability enhancement'
    ]
  },
  {
    id: 3,
    title: 'Community Mobilization',
    description: 'Active engagement with local communities to spread awareness and promote participation in educational and skilling initiatives.',
    image: '/community-mobilization.jpeg',
    features: ['Door-to-door outreach', 'Local awareness campaigns', 'Encouraging inclusivity'],
    duration: '6 months',
    students: '100+ enrolled',
    slug: 'community-mobilization',
    curriculum: [
      'Workshops on the value of education',
      'Engagement with parents and stakeholders',
      'Street plays and info sessions',
      'Peer influencer programs',
      'Feedback-driven program refinement'
    ],
    outcomes: [
      'Increased participation in education',
      'Awareness of rights and opportunities',
      'Strengthened community-school relationships',
      'Empowered local role models',
      'Supportive peer networks'
    ]
  },
  {
    id: 4,
    title: 'Training Facilities',
    description: 'Skill development programs designed to equip youth with practical, industry-relevant training for sustainable livelihoods.',
    image: '/training-facilities.jpeg',
    features: ['Hands-on vocational training', 'Certified skill courses', 'Career readiness modules'],
    duration: '1 year',
    students: '80+ enrolled',
    slug: 'Training-facilities',
    curriculum: [
      'Technical and vocational modules',
      'Soft skill and communication training',
      'Real-world projects and simulations',
      'Time and task management',
      'Workplace ethics and safety'
    ],
    outcomes: [
      'Job-ready technical skills',
      'Improved confidence and work ethic',
      'Teamwork and leadership',
      'Effective time management',
      'Increased employability'
    ]
  },
  {
    id: 5,
    title: 'Women Empowerment',
    description: 'Dedicated initiatives that uplift women by providing access to training, resources, and opportunities for financial independence.',
    image: '/women-empowerment.jpeg',
    features: ['Tailored skill programs for women', 'Self-help and entrepreneurship support', 'Safe and inclusive learning spaces'],
    duration: 'Varies',
    students: '60+ enrolled',
    slug: 'Women-Empowerment',
    curriculum: [
      'Vocational and entrepreneurship training',
      'Financial literacy and digital inclusion',
      'Legal awareness and rights education',
      'Health and hygiene workshops',
      'Peer networking and mentorship'
    ],
    outcomes: [
      'Self-reliance and confidence',
      'Entrepreneurial thinking',
      'Informed decision-making',
      'Financial management skills',
      'Active community participation'
    ]
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
  curriculum: [
    'Basics of accounting and financial statements',
    'Tally ERP software training',
    'Introduction to GST and taxation',
    'Bank reconciliation and payroll management',
    'Audit practices and reporting'
  ],
  outcomes: [
    'Job readiness in accounting roles',
    'Proficiency in Tally and basic finance tools',
    'Understanding of business finance',
    'Foundation for CA/CMA preparation',
    'Increased employability in SMEs'
  ]
  },
    {
  id: 7,
  title: 'Fashion Designing',
  description: 'Fostering creativity and design skills in students to prepare them for the dynamic fashion industry through practical and theoretical training.',
  image: '/fashion-designing.jpeg',
  features: ['Hands-on stitching practice', 'Fashion illustration', 'Portfolio development'],
  duration: '9 months',
  students: '80+ enrolled',
  slug: 'fashion-designing',
  curriculum: [
    'Basics of fashion design and trends',
    'Fabric types and garment construction',
    'Sketching and illustration techniques',
    'Stitching, embroidery, and finishing',
    'Creating personal fashion portfolios'
  ],
  outcomes: [
    'Creativity and design thinking',
    'Skill in garment creation',
    'Preparation for internships in boutiques',
    'Confidence in personal styling and branding',
    'Pathway to fashion entrepreneurship'
  ]
  },
    {
  id: 8,
  title: 'Electronics',
  description: 'Training youth in the fundamentals of electronics, circuit design, and repair to prepare them for roles in the booming electronics sector.',
  image: '/electronics.jpeg',
  features: ['Circuit building', 'Appliance repair training', 'Hands-on lab work'],
  duration: '6 months',
  students: '90+ enrolled',
  slug: 'electronics',
  curriculum: [
    'Basics of electrical and electronic components',
    'Soldering and circuit board assembly',
    'Introduction to sensors and IoT basics',
    'Troubleshooting and repair techniques',
    'Practical labs and project-based learning'
  ],
  outcomes: [
    'Ability to build and repair simple electronics',
    'Preparedness for technician roles',
    'Foundation for electronics engineering education',
    'Enhanced problem-solving skills',
    'Understanding of modern electronics applications'
  ]
  }

];

const CourseDetailsData: React.FC = () => {
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
            {courseDetails.map((course, index) => (
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
 </>
   );
};

export default CourseDetailsData;

export { courseDetails }