import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code,
  Users,
  BarChart,
  ExternalLink,
  ChevronDown,
  Zap,
  Laptop,
  Star,
  User,
  UserRound,
  UserCheck,
  UserPlus,
} from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import FeaturedCard from '@/components/ui/FeaturedCard';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxSection from '@/components/ui/ParallaxSection';
import CountUp from '@/components/ui/CountUp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Building from '@/components/ui/Building';
import MapPin from '@/components/ui/MapPin';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const words = ["Digital", "Business", "Creative", "Innovative"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (heroRef.current) {
        const yPos = window.scrollY * 0.4;
        heroRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jobOpenings = [
    {
      title: "Senior Full-Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering",
      id: "job-1",
      icon: <User className="text-bean" size={20} />
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      department: "Design",
      id: "job-2",
      icon: <UserRound className="text-bean" size={20} />
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      id: "job-3",
      icon: <UserCheck className="text-bean" size={20} />
    },
    {
      title: "DevOps Engineer",
      location: "Austin, TX",
      type: "Full-time",
      department: "Operations",
      id: "job-4",
      icon: <UserPlus className="text-bean" size={20} />
    }
  ];

  const stats = [
    { label: "Projects Completed", value: 320 },
    { label: "Happy Clients", value: 150 },
    { label: "Team Members", value: 45 },
    { label: "Years of Experience", value: 12 }
  ];

  // --- New carousel options for "Our Capabilities" section ---
  // Embla options for 3 slides per view
  const carouselOptions = {
    align: 'start' as const,
    slidesToScroll: 3,
    dragFree: false,
    loop: false,
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/50 z-0"></div>
        
        <div className="absolute inset-0 z-0 hero-gradient">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="absolute top-1/4 right-[15%] w-48 h-48 bg-bean/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-bean/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-bean/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10" ref={heroRef}>
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimator animation="fade-in" threshold={0.1} delay={200}>
              <div className="inline-block mb-6 px-3 py-1 border border-bean/30 rounded-full bg-card/40 backdrop-blur-sm text-bean text-sm">
                <span className="animate-pulse mr-2">•</span>
                Innovation that transforms
              </div>
            </ScrollAnimator>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              <ScrollAnimator animation="slide-in-down" threshold={0.1} delay={300}>
                Empowering
              </ScrollAnimator>
              <ScrollAnimator animation="slide-in-up" threshold={0.1} delay={600}>
                <div className="h-[1.2em] overflow-hidden relative mt-2 text-center">
                  {words.map((word, index) => (
                    <span 
                      key={word}
                      className="text-gradient absolute w-full left-0 right-0 transition-all duration-700"
                      style={{
                        opacity: currentWordIndex === index ? 1 : 0,
                        transform: currentWordIndex === index ? 'translateY(0)' : 'translateY(100%)'
                      }}
                    >
                      {word} Evolution
                    </span>
                  ))}
                </div>
              </ScrollAnimator>
            </h1>
            
            <ScrollAnimator animation="fade-in" threshold={0.1} delay={900}>
              <p className="text-xl text-foreground/70 mb-8">
                We create innovative software solutions that help businesses thrive in the digital landscape. 
                Our expert team delivers cutting-edge applications, strategic consulting, and transformative advisory services.
              </p>
            </ScrollAnimator>
            
            <div className="flex justify-center items-center space-x-4 mt-8">
              <ScrollAnimator animation="slide-in-right" delay={1100}>
                <MagneticButton className="btn-primary glow-effect">
                  <Link to="/services" className="flex items-center">
                    Explore Our Services
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </MagneticButton>
              </ScrollAnimator>
              
              <ScrollAnimator animation="slide-in-left" delay={1200}>
                <MagneticButton className="px-6 py-2 border border-border hover:border-bean rounded-md transition-all duration-300 flex items-center justify-center">
                  <Link to="/contact" className="flex items-center">
                    Contact Us
                  </Link>
                </MagneticButton>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>

      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollAnimator animation="slide-in-left" className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Transforming Ideas into Digital Reality</h3>
            <p className="text-foreground/70 mb-4">
              At Bean Info System, we envision a world where technology empowers businesses to achieve their fullest potential. 
              Our mission is to deliver exceptional digital experiences through innovative software solutions and strategic partnerships.
            </p>
            <p className="text-foreground/70 mb-6">
              We combine technical expertise with deep industry knowledge to create tailor-made solutions that address complex business challenges. 
              Our approach is collaborative, agile, and focused on delivering measurable results that drive growth and efficiency.
            </p>
            <Link to="/about" className="text-bean flex items-center font-medium hover:underline interactive">
              Learn more about us
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </ScrollAnimator>
          
          <ScrollAnimator animation="slide-in-right" className="order-1 md:order-2">
            <div className=" overflow-hidden shadow-xl rotate-element">
              <div className="bg-gradient-to-br from-bean/10 to-bean/5 aspect-video  flex items-center justify-center p-6 shadow-inner relative">
                <div className="shimmer-effect"></div>
                <div className="glass-card p-1 max-w-[80%] hover:rotate-0 transition-all duration-500">
                    <div className="text-4xl font-bold text-center mb-4 text-gradient">Bean Info System</div>
                    <img src="/images/career.jpg" alt="Career" className="w-full h-auto rounded-md mt-4" />
                  <div className="bg-secondary/80 h-4 rounded w-2/3 mx-auto"></div>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </PageSection>

      <ParallaxSection className="diagonal-section bg-secondary py-20" speed={0.3}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollAnimator 
                key={index} 
                animation="fade-in" 
                delay={index * 200}
                className="text-center p-6"
              >
                <CountUp 
                  end={stat.value} 
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2" 
                  duration={2500}
                />
                <p className="text-foreground/70">{stat.label}</p>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <PageSection dark title="Our Services" subtitle="Comprehensive solutions to solve your business challenges">
        <div className="grid md:grid-cols-3 gap-6">
          <ScrollAnimator animation="slide-in-up" delay={200}>
            <FeaturedCard
              title="Application Development"
              description="Custom software applications designed to meet your unique business requirements and drive digital transformation."
              icon={<Code size={36} className="text-bean" />}
              link="/services/application-development"
            />
          </ScrollAnimator>
          
          <ScrollAnimator animation="slide-in-up" delay={400}>
            <FeaturedCard
              title="Consulting Services"
              description="Strategic guidance from industry experts to optimize your technology investments and improve business processes."
              icon={<Users size={36} className="text-bean" />}
              link="/services/consulting-services"
            />
          </ScrollAnimator>
          
          <ScrollAnimator animation="slide-in-up" delay={600}>
            <FeaturedCard
              title="Advisory Services"
              description="Insights and recommendations to help you navigate digital trends and make informed business decisions."
              icon={<BarChart size={36} className="text-bean" />}
              link="/services/advisory-services"
            />
          </ScrollAnimator>
        </div>
      </PageSection>

      <PageSection title="Our Capabilities" subtitle="Explore our expertise">
        <div className="relative">
          <Carousel opts={{ align: "start", slidesToScroll: 3 }}>
            <CarouselPrevious />
            <CarouselContent>
              {[
                { title: "Web Development", icon: Laptop },
                { title: "Mobile Applications", icon: SmartphoneIcon },
                { title: "Cloud Solutions", icon: CloudIcon },
                { title: "UI/UX Design", icon: PaletteIcon },
                { title: "Data Analytics", icon: BarChart },
                { title: "API Integration", icon: LinkIcon }
              ].map((item, index) => (
                <CarouselItem 
                  key={index} 
                  className="flex justify-center items-center basis-full md:basis-1/3"
                >
                  <div className="w-[300px] flex-shrink-0">
                    <Card className="h-full p-6 flex flex-col items-center justify-center text-center">
                      <div className="text-bean mb-4">
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">
                        Expert solutions tailored to your unique business needs.
                      </p>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </PageSection>

      <PageSection dark title="Career Opportunities" subtitle="Join our team and help shape the future of technology">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {jobOpenings.map((job) => (
            <Card
              key={job.id}
              className="p-6 bg-card/50 backdrop-blur-sm border-border"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-bean/10">
                    {job.icon}
                  </div>
                  <span className="text-sm font-medium text-bean px-3 py-1 rounded-full bg-bean/10">
                    {job.type}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-foreground/70">
                      <Building className="w-4 h-4 mr-2" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-sm text-foreground/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                  </div>
                </div>

                <Link 
                  to={`/careers/${job.id}`} 
                  className="inline-flex items-center text-sm font-medium text-bean"
                >
                  View Position
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/careers" 
            className="inline-flex items-center justify-center px-6 py-3 bg-bean text-white font-medium rounded-md hover:bg-bean-dark transition-colors"
          >
            View All Positions
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>

      <ParallaxSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimator animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
            </ScrollAnimator>
            <ScrollAnimator animation="fade-in" delay={200}>
              <p className="text-lg text-foreground/70 mb-8">
                Let's discuss how Bean Info System can help your business thrive in the digital landscape.
              </p>
            </ScrollAnimator>
            <ScrollAnimator animation="fade-in" delay={400}>
              <MagneticButton strength={20} className="btn-primary inline-flex">
                <Link to="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </MagneticButton>
            </ScrollAnimator>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
};

const SmartphoneIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const CloudIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const PaletteIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const LinkIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export default Home;
