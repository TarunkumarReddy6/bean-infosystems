import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, BarChart, ExternalLink, Briefcase } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import Card from '@/components/ui/card';
import FeaturedCard from '@/components/ui/FeaturedCard';

const Home = () => {
  const jobOpenings = [
    {
      title: "Senior Full-Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      id: "job-1"
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      id: "job-2"
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      id: "job-3"
    },
    {
      title: "DevOps Engineer",
      location: "Austin, TX",
      type: "Full-time",
      id: "job-4"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0 hero-gradient">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '50px 50px' }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-[15%] w-48 h-48 bg-bean/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-bean/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-3 py-1 border border-bean/30 rounded-full bg-card/40 backdrop-blur-sm text-bean text-sm">
              Innovation that transforms
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Empowering<br />
              <span className="text-gradient">Digital Evolution</span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 animate-fade-in">
              We create innovative software solutions that help businesses thrive in the digital landscape. 
              Our expert team delivers cutting-edge applications, strategic consulting, and transformative advisory services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Link to="/services" className="btn-primary">
                Explore Our Services
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="px-6 py-2 border border-border hover:border-bean rounded-md transition-all duration-300 flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <PageSection title="Our Vision & Mission" subtitle="Building the digital future through innovation, expertise, and strategic partnership">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Transforming Ideas into Digital Reality</h3>
            <p className="text-foreground/70 mb-4">
              At Bean Info System, we envision a world where technology empowers businesses to achieve their fullest potential. 
              Our mission is to deliver exceptional digital experiences through innovative software solutions and strategic partnerships.
            </p>
            <p className="text-foreground/70 mb-6">
              We combine technical expertise with deep industry knowledge to create tailor-made solutions that address complex business challenges. 
              Our approach is collaborative, agile, and focused on delivering measurable results that drive growth and efficiency.
            </p>
            <Link to="/about" className="text-bean flex items-center font-medium hover:underline">
              Learn more about us
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl animate-float">
            <div className="bg-gradient-to-br from-bean/10 to-bean/5 aspect-video rounded-xl flex items-center justify-center p-6 shadow-inner">
              <div className="glass-card p-8 max-w-[80%] rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-4xl font-bold text-center mb-4 text-gradient">Bean Info System</div>
                <div className="bg-secondary/80 h-4 rounded w-3/4 mx-auto mb-3"></div>
                <div className="bg-secondary/80 h-4 rounded w-4/5 mx-auto mb-3"></div>
                <div className="bg-secondary/80 h-4 rounded w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Services Section */}
      <PageSection dark title="Our Services" subtitle="Comprehensive solutions to solve your business challenges">
        <div className="grid md:grid-cols-3 gap-6">
          <FeaturedCard
            title="Application Development"
            description="Custom software applications designed to meet your unique business requirements and drive digital transformation."
            icon={<Code size={36} />}
            link="/services/application-development"
          />
          <FeaturedCard
            title="Consulting Services"
            description="Strategic guidance from industry experts to optimize your technology investments and improve business processes."
            icon={<Users size={36} />}
            link="/services/consulting-services"
          />
          <FeaturedCard
            title="Advisory Services"
            description="Insights and recommendations to help you navigate digital trends and make informed business decisions."
            icon={<BarChart size={36} />}
            link="/services/advisory-services"
          />
        </div>
      </PageSection>

      {/* SocialBirds Product Section */}
      <PageSection title="Featured Product" subtitle="Connect communities for meaningful social impact">
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-3">SocialBirds</h3>
                <p className="text-foreground/70">
                  An online platform helping organizations achieve their social impact objectives by connecting philanthropists with nonprofit initiatives in a meaningful way.
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Connect with like-minded philanthropists</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Create compelling fundraising campaigns</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Enhance volunteer engagement strategies</span>
                </li>
              </ul>
              <Link to="/product" className="btn-primary inline-flex">
                Learn More
                <ExternalLink size={18} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-card rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl font-bold mb-2 text-gradient">SocialBirds</div>
                  <p className="text-foreground/70 mb-4">Connecting communities for social good</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <div className="bg-bean/20 rounded-full px-3 py-1 text-xs text-bean">Fundraising</div>
                    <div className="bg-bean/20 rounded-full px-3 py-1 text-xs text-bean">Volunteering</div>
                    <div className="bg-bean/20 rounded-full px-3 py-1 text-xs text-bean">Social Impact</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-bean/10 rounded-full blur-xl"></div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-bean/20 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Careers Section */}
      <PageSection dark title="Career Opportunities" subtitle="Join our team and help shape the future of technology">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {jobOpenings.map((job, index) => (
            <Card key={job.id} className="p-6 hover:translate-y-[-5px]">
              <div className="mb-3">
                <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                <div className="text-foreground/60 text-sm">{job.location}</div>
                <div className="text-foreground/60 text-sm">{job.type}</div>
              </div>
              <Link 
                to={`/careers/${job.id}`} 
                className="text-bean hover:text-bean-light text-sm font-medium flex items-center"
              >
                View Details <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link to="/careers" className="btn-primary inline-flex">
            <Briefcase size={18} className="mr-2" />
            Browse All Positions
          </Link>
        </div>
      </PageSection>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let's discuss how Bean Info System can help your business thrive in the digital landscape.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
