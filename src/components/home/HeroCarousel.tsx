import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const carouselData = [
  {
    id: 1,
    image: '/banner-skill.jpeg'
  },
  {
    id: 2,
    image: '/banner-lab.jpeg'
  },
  {
    id: 3,
    image: '/banner-people.png'
  }
];

const HeroCarousel: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  // 🛠️ Fix navigation after render
  useEffect(() => {
    if (navigationPrevRef.current && navigationNextRef.current) {
      const swiperInstance = document.querySelector('.swiper')?.swiper;
      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
        swiperInstance.params.navigation.nextEl = navigationNextRef.current;
        swiperInstance.navigation.destroy();
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, []);

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {carouselData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="container text-center text-white p-4">
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation buttons - hidden on small screens */}
      <button
        ref={navigationPrevRef}
        className="hidden sm:flex absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      
      <button
        ref={navigationNextRef}
        className="hidden sm:flex absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

export default HeroCarousel;
