import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import { Code, Layers, Database, Shield, Globe, ArrowRight, Monitor, Smartphone, Laptop } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const ApplicationDevelopment = () => {
  const capabilities = [
    {
      title: "Web Applications",
      description: "Responsive, feature-rich web applications that deliver exceptional user experiences across all devices.",
      icon: <Monitor size={36} />
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications designed for optimal performance and usability.",
      icon: <Smartphone size={36} />
    },
    {
      title: "Desktop Applications",
      description: "Powerful desktop applications that leverage the full capabilities of modern operating systems.",
      icon: <Laptop size={36} />
    },
    {
      title: "Enterprise Software",
      description: "Comprehensive enterprise solutions designed to streamline operations and enhance productivity.",
      icon: <Layers size={36} />
    },
    {
      title: "Database Solutions",
      description: "Robust database architectures that ensure data integrity, security, and accessibility.",
      icon: <Database size={36} />
    },
    {
      title: "API Development",
      description: "Well-designed APIs that enable seamless integration between systems and services.",
      icon: <Code size={36} />
    }
  ];

  const process = [
    {
      title: "Discovery & Planning",
      description: "We begin by understanding your business objectives, user needs, and technical requirements to establish a solid foundation for the project.",
      color: "bg-bean/10",
      borderColor: "border-bean/30"
    },
    {
      title: "Design & Architecture",
      description: "Our team creates detailed designs and technical architectures that align with your requirements and industry best practices.",
      color: "bg-bean/15",
      borderColor: "border-bean/40"
    },
    {
      title: "Development & Testing",
      description: "We employ agile development methodologies, coupled with rigorous testing, to deliver high-quality applications efficiently.",
      color: "bg-bean/20",
      borderColor: "border-bean/50"
    },
    {
      title: "Deployment & Integration",
      description: "We ensure smooth deployment and integration with your existing systems and processes.",
      color: "bg-bean/25",
      borderColor: "border-bean/60"
    },
    {
      title: "Maintenance & Support",
      description: "Our team provides ongoing maintenance and support to ensure your application continues to perform optimally.",
      color: "bg-bean/30",
      borderColor: "border-bean/70"
    }
  ];

  return (
    <>
      <PageHero 
        title="Application Development" 
        subtitle="Custom software solutions designed to drive your business forward"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Transform Your Business with Custom Applications</h2>
            <p className="text-foreground/70 mb-4">
              In today's digital-first world, custom applications can be a significant competitive advantage. 
              At Bean Info System, we specialize in developing tailored software solutions that address your 
              unique business challenges and opportunities.
            </p>
            <p className="text-foreground/70 mb-4">
              Our team of experienced developers combines technical expertise with deep industry knowledge 
              to create applications that not only meet your functional requirements but also deliver 
              exceptional user experiences.
            </p>
            <p className="text-foreground/70">
              Whether you need a web application, mobile app, or enterprise software, we have the skills and 
              experience to bring your vision to life.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-bean/5 rounded-xl p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute top-0 left-0 w-full h-full bg-card border border-border rounded-lg transform rotate-3 shadow-md"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-card border border-border rounded-lg transform -rotate-2 shadow-md"></div>
                <div className="relative w-full h-full bg-card border border-border rounded-lg shadow-md p-6">
                  <div className="text-bean mb-4">
                    <Code size={32} />
                  </div>
                  <div className="h-4 w-3/4 bg-bean/20 rounded mb-3"></div>
                  <div className="h-4 w-1/2 bg-bean/20 rounded mb-3"></div>
                  <div className="h-4 w-2/3 bg-bean/20 rounded mb-3"></div>
                  <div className="h-4 w-1/2 bg-bean/20 rounded"></div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[120%] max-h-[120%] bg-bean/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </PageSection>

      {/* Key Features */}
      <PageSection dark title="Our Development Capabilities" subtitle="Comprehensive solutions tailored to your needs">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <div className="text-bean mb-4">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-foreground/70">
                {capability.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Development Process - New Design */}
      <PageSection title="Our Development Process" subtitle="A structured approach to delivering exceptional applications">
        <div className="space-y-6">
          {/* Process steps as connected cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col">
                <Card className={`p-6 h-full relative ${step.color} border ${step.borderColor} transition-all hover:shadow-md`}>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-bean flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="text-bean" size={20} />
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mobile view carousel */}
          <div className="lg:hidden mt-8">
            <Carousel>
              <CarouselPrevious />
              <CarouselContent>
                {process.map((step, index) => (
                  <CarouselItem key={index}>
                    <Card className={`p-6 relative ${step.color} border ${step.borderColor}`}>
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-bean flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                      <p className="text-foreground/70">{step.description}</p>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </PageSection>

      {/* Benefits Section */}
      <PageSection dark title="Why Choose Our Application Development Services" subtitle="Experience the Bean Info System advantage">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-foreground/70">
              Our rigorous quality assurance processes ensure that your application meets the highest standards 
              of reliability, performance, and security.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Layers size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
            <p className="text-foreground/70">
              We design applications with scalability in mind, allowing them to grow seamlessly as your business 
              expands and evolves.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Future-Ready</h3>
            <p className="text-foreground/70">
              Our applications are built using modern technologies and best practices, ensuring they remain 
              relevant and effective well into the future.
            </p>
          </Card>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Application Needs?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Contact us today to schedule a consultation with our development team. We'll help you explore 
            the possibilities and develop a solution tailored to your specific requirements.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Start a Conversation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default ApplicationDevelopment;
