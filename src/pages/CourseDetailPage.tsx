import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, Award, CheckCircle } from 'lucide-react';

// Import courses data
import { courseDetails } from './CourseDetailsData';

const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = courseDetails.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary hover:underline">
            Return to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {course.title}
            </motion.h1>
            <motion.p 
              className="text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {course.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Course Image */}
                <div className="rounded-lg overflow-hidden mb-8">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Course Overview */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                      <Users className="w-5 h-5 text-primary mr-2" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 mr-2" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Curriculum Highlights</h2>
                  <div className="space-y-4">
                    {course.curriculum.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <BookOpen className="w-5 h-5 text-primary mt-1 mr-2" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Learning Outcomes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-2" />
                        <p>{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
                <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p>{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Students</p>
                      <p>{course.students}</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full mt-6 text-center">
                  Enroll Now
                </Link>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Have questions?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact our team for more information about this program.
                  </p>
                  <Link 
                  to="/contact" 
                  className="btn btn-outline w-full">
                  Contact Us
                </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Related Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseDetails
              .filter(c => c.id !== course.id)
              .slice(0, 3)
              .map((relatedCourse) => (
                <motion.div 
                  key={relatedCourse.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedCourse.image} 
                      alt={relatedCourse.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{relatedCourse.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedCourse.description}</p>
                    <Link 
                      to={`/courses/${relatedCourse.slug}`} 
                      className="text-primary font-medium hover:underline"
                    >
                      Learn More →
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

export default CourseDetailPage;