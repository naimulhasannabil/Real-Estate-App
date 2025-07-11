import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import SearchSection from '../components/home/SearchSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
    return (
        <div className='animate-fade-in'>
            <HeroSection />
            <SearchSection />
            <FeaturedProperties />
            <StatsSection />
            <ServicesSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
};

export default HomePage;