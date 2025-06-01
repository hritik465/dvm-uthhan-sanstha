import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Parent',
    quote: 'Dvm Utthan Sansthan Society has provided my children with an exceptional learning environment. The teachers are attentive and the curriculum is comprehensive.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Former Student',
    quote: 'My years at DVM laid the foundation for my success. The institution\'s focus on both academics and personal development prepared me for the challenges of the real world.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    id: 3,
    name: 'Anand Patel',
    role: 'Teacher',
    quote: 'The nurturing and supportive teaching environment and commitment to excellence makes Dvm Utthan Sansthan stand out.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-heading mb-4">What People Say</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from our students and community members.
          </p>
        </motion.div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col">
                <div className="mb-4 text-accent">
                  <Quote size={32} />
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;