import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Code, Users, BarChart, ArrowRight, Lightbulb } from 'lucide-react';
import Card from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Application Development",
      description: "Custom software applications designed to meet your unique business requirements and drive digital transformation.",
      icon: <Code size={40} />,
      link: "/services/application-development",
      benefits: [
        "Tailored solutions that perfectly match your needs",
        "Scalable architecture to grow with your business",
        "User-centric design for exceptional experiences",
        "Continuous support and maintenance"
      ]
    },
    {
      title: "Consulting Services",
      description: "Strategic guidance from industry experts to optimize your technology investments and improve business processes.",
      icon: <Users size={40} />,
      link: "/services/consulting-services",
      benefits: [
        "Expert analysis of your current technology landscape",
        "Strategic roadmaps for digital transformation",
        "Technology selection and implementation guidance",
        "Process optimization recommendations"
      ]
    },
    {
      title: "Advisory Services",
      description: "Insights and recommendations to help you navigate digital trends and make informed business decisions.",
      icon: <BarChart size={40} />,
      link: "/services/advisory-services",
      benefits: [
        "Industry trend analysis and insights",
        "Competitive landscape evaluation",
        "Risk assessment and mitigation strategies",
        "Innovation opportunity identification"
      ]
    }
  ];

  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive solutions to drive your digital success"
      />

      {/* Services Philosophy */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Service Philosophy</h2>
            <p className="text-foreground/70 mb-4">
              At Bean Info System, we believe that technology should serve as an enabler for 
              business success. Our services are designed with this philosophy at the core, 
              focusing on delivering solutions that drive tangible business outcomes.
            </p>
            <p className="text-foreground/70 mb-4">
              We take a collaborative approach, working closely with our clients to understand 
              their unique challenges and objectives. This enables us to develop tailored 
              solutions that address specific needs rather than offering one-size-fits-all options.
            </p>
            <p className="text-foreground/70">
              Whether you're looking to develop a custom application, optimize your technology 
              investments, or gain strategic insights, our team of experts is ready to help you 
              navigate the complex digital landscape and achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="p-4 flex items-center glass-card">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} />
                </div>
                <span className="font-medium">Innovative</span>
              </Card>
              <Card className="p-4 flex items-center glass-card translate-y-6">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} />
                </div>
                <span className="font-medium">Strategic</span>
              </Card>
            </div>
            <div className="space-y-4 pt-6">
              <Card className="p-4 flex items-center glass-card">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} />
                </div>
                <span className="font-medium">Collaborative</span>
              </Card>
              <Card className="p-4 flex items-center glass-card">
                <div className="text-bean mr-3">
                  <Lightbulb size={24} />
                </div>
                <span className="font-medium">Results-Driven</span>
              </Card>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Services Cards */}
      <PageSection dark title="Our Core Services" subtitle="Explore how we can help your business thrive">
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className={`p-8 ${index % 2 === 0 ? '' : ''}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="text-bean mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link} 
                    className="btn-primary inline-flex"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-bean/20 to-transparent rounded-xl p-8 flex items-center justify-center">
                    <div className="w-full max-w-xs aspect-square relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-bean opacity-10">
                          {React.cloneElement(service.icon, { size: 180 })}
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-transparent to-background/80 rounded-xl">
                        <div className="text-center p-6">
                          <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                          <p className="text-foreground/70 text-sm">
                            Tailored solutions for your unique business needs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Contact us today to discuss how our services can help you achieve your digital objectives 
            and drive business growth.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Get in Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default Services;
