import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, TrendingUp, SearchCheck, ArrowRight, LineChart, BarChart2, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ConsultingServices = () => {
  const services = [
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape to identify strengths, weaknesses, and opportunities for improvement.",
      icon: <SearchCheck size={36} />
    },
    {
      title: "Digital Strategy",
      description: "Development of a cohesive digital strategy aligned with your business objectives and market position.",
      icon: <Lightbulb size={36} />
    },
    {
      title: "Process Optimization",
      description: "Analysis and redesign of business processes to enhance efficiency, reduce costs, and improve outcomes.",
      icon: <TrendingUp size={36} />
    },
    {
      title: "Technology Selection",
      description: "Expert guidance on selecting the right technologies and tools to meet your specific business needs.",
      icon: <Brain size={36} />
    },
    {
      title: "Implementation Planning",
      description: "Detailed planning and roadmapping for technology implementation to ensure smooth execution and adoption.",
      icon: <LineChart size={36} />
    },
    {
      title: "Change Management",
      description: "Strategies and support for managing the human aspects of technology and process changes.",
      icon: <Users size={36} />
    }
  ];

  const approach = [
    {
      title: "Understand",
      description: "We begin by deeply understanding your business, its challenges, and objectives through interviews, workshops, and analysis."
    },
    {
      title: "Analyze",
      description: "Our team conducts a thorough analysis of your current state, identifying gaps, risks, and opportunities for improvement."
    },
    {
      title: "Strategize",
      description: "Based on our findings, we develop strategic recommendations and a roadmap tailored to your specific needs and goals."
    },
    {
      title: "Implement",
      description: "We guide and support you through the implementation of our recommendations, ensuring they deliver the expected value."
    },
    {
      title: "Optimize",
      description: "We continuously monitor and refine our approach to optimize results and ensure sustained success."
    }
  ];

  return (
    <>
      <PageHero 
        title="Consulting Services" 
        subtitle="Strategic guidance to optimize your technology investments"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Drive Business Transformation Through Expert Consulting</h2>
            <p className="text-foreground/70 mb-4">
              In an increasingly complex technological landscape, making the right decisions about 
              your digital strategy and technology investments is critical. Bean Info System's 
              consulting services provide the guidance and expertise you need to navigate these 
              challenges successfully.
            </p>
            <p className="text-foreground/70 mb-4">
              Our team of experienced consultants combines deep technical knowledge with business 
              acumen to help you optimize your technology ecosystem, streamline processes, and 
              unlock new opportunities for growth and innovation.
            </p>
            <p className="text-foreground/70">
              Whether you're embarking on a digital transformation journey, evaluating new technologies, 
              or looking to enhance your existing systems, our consulting services can provide the 
              insights and direction you need.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-bean/5 rounded-xl p-8 flex items-center justify-center">
              <div className="glass-card p-8 rounded-lg shadow-lg max-w-[80%] rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-bean mb-6">
                  <BarChart2 size={48} />
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-bean/20 rounded-full w-full"></div>
                  <div className="h-3 bg-bean/30 rounded-full w-4/5"></div>
                  <div className="h-3 bg-bean/40 rounded-full w-3/5"></div>
                  <div className="h-3 bg-bean/50 rounded-full w-2/5"></div>
                  <div className="h-3 bg-bean/60 rounded-full w-1/5"></div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[120%] max-h-[120%] bg-bean/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </PageSection>

      {/* Services Grid */}
      <PageSection dark title="Our Consulting Services" subtitle="Comprehensive solutions to address your business challenges">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <div className="text-bean mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Approach Section */}
      <PageSection title="Our Consulting Approach" subtitle="A structured methodology for delivering impactful results">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {approach.map((step, index) => (
            <Card key={index} className="p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-bean flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 pt-3">{step.title}</h3>
              <p className="text-foreground/70">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Benefits Section */}
      <PageSection dark>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Partner with Our Consulting Team</h2>
            <p className="text-foreground/70 mb-6">
              Working with Bean Info System's consulting team offers unique advantages that can 
              significantly impact your business outcomes.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Deep Technical Expertise</h4>
                  <p className="text-foreground/70">
                    Our consultants possess extensive knowledge of the latest technologies and industry best practices.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Business Acumen</h4>
                  <p className="text-foreground/70">
                    We understand that technology exists to serve business objectives, and our advice is always aligned with your goals.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Objective Perspective</h4>
                  <p className="text-foreground/70">
                    As external advisors, we bring fresh insights and unbiased recommendations to your challenges.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Proven Methodology</h4>
                  <p className="text-foreground/70">
                    Our structured approach ensures consistent, high-quality results across diverse projects and industries.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="aspect-square flex items-center justify-center p-6 glass-card">
                <div className="text-bean">
                  <Lightbulb size={48} />
                </div>
              </Card>
              <Card className="aspect-square flex items-center justify-center p-6 glass-card translate-y-6">
                <div className="text-bean">
                  <Users size={48} />
                </div>
              </Card>
            </div>
            <div className="space-y-4 pt-6">
              <Card className="aspect-square flex items-center justify-center p-6 glass-card">
                <div className="text-bean">
                  <TrendingUp size={48} />
                </div>
              </Card>
              <Card className="aspect-square flex items-center justify-center p-6 glass-card">
                <div className="text-bean">
                  <BarChart2 size={48} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Contact us today to schedule a consultation with our team. We'll help you navigate your 
            digital journey and unlock new opportunities for growth and innovation.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Schedule a Consultation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default ConsultingServices;
