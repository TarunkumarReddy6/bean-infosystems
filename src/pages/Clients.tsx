
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import Card from '@/components/ui/Card';
import { Star, Quote } from 'lucide-react';

const Clients = () => {
  // Placeholder client logos
  const clientLogos = [
    { name: "TechCorp", industry: "Technology" },
    { name: "FinanceHub", industry: "Finance" },
    { name: "RetailGiant", industry: "Retail" },
    { name: "HealthPlus", industry: "Healthcare" },
    { name: "EduLearn", industry: "Education" },
    { name: "ManufacturePro", industry: "Manufacturing" },
    { name: "EnergyNext", industry: "Energy" },
    { name: "MediaForce", industry: "Media" },
    { name: "LogisticsGo", industry: "Logistics" },
    { name: "FoodDelight", industry: "Food & Beverage" },
    { name: "HospitalityOne", industry: "Hospitality" },
    { name: "RealtyGroup", industry: "Real Estate" },
  ];

  // Placeholder testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      quote: "Bean Info System transformed our digital infrastructure with their innovative approach and technical expertise. Their team was exceptional from initial planning through implementation.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "COO, FinanceHub",
      quote: "Working with Bean Info System has been a game-changer for our organization. Their strategic guidance helped us navigate complex technological decisions and stay ahead of industry trends.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Technology, RetailGiant",
      quote: "The custom application developed by Bean Info System has revolutionized our customer experience and streamlined our operations. Their team's ability to understand our business needs and translate them into technical solutions was impressive.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Director of Innovation, HealthPlus",
      quote: "Bean Info System's advisory services provided invaluable insights that shaped our digital transformation strategy. Their team's deep industry knowledge and technical expertise made them the perfect partner for our journey.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop",
      rating: 4
    }
  ];

  // Placeholder case studies
  const caseStudies = [
    {
      title: "Digital Transformation for RetailGiant",
      description: "How we helped a major retail chain modernize their technology infrastructure and enhance their customer experience.",
      industry: "Retail",
      outcome: "35% increase in online sales, improved customer satisfaction scores"
    },
    {
      title: "Custom CRM for FinanceHub",
      description: "Developing a tailored CRM solution that integrated with existing systems and streamlined client management processes.",
      industry: "Finance",
      outcome: "40% reduction in administrative time, improved client retention"
    },
    {
      title: "Healthcare Platform for PatientCare",
      description: "Building a secure, HIPAA-compliant platform for patient management and telehealth services.",
      industry: "Healthcare",
      outcome: "50% increase in telehealth appointments, enhanced patient data security"
    }
  ];

  return (
    <>
      <PageHero 
        title="Our Clients" 
        subtitle="Partnerships built on trust, collaboration, and exceptional results"
      />

      {/* Client Logos Grid */}
      <PageSection title="Trusted by Leading Organizations" subtitle="Across industries and around the globe">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {clientLogos.map((client, index) => (
            <div 
              key={index} 
              className="bg-card border border-border hover:border-bean/30 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-bean/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-bean font-bold text-xl">{client.name.charAt(0)}</span>
              </div>
              <div className="font-semibold">{client.name}</div>
              <div className="text-sm text-foreground/60">{client.industry}</div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Testimonials Section */}
      <PageSection dark title="Client Testimonials" subtitle="Hear what our clients have to say about working with us">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative hover:border-bean/30 transition-all duration-300">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-bean/10">
                <Quote size={48} />
              </div>
              
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-foreground/60">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "text-bean fill-bean" : "text-foreground/30"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic relative z-10">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Case Studies Section */}
      <PageSection title="Success Stories" subtitle="Real-world examples of how we've helped our clients succeed">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-6 md:p-8 hover:border-bean/30 transition-all duration-300">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <div className="flex items-center mb-3">
                    <span className="bg-bean/20 text-bean text-sm px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                  <p className="text-foreground/70 mb-4">{study.description}</p>
                  <div>
                    <h4 className="font-semibold mb-1">Outcome:</h4>
                    <p className="text-foreground/70">{study.outcome}</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-lg p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-bean mb-3">
                        <Star size={48} className="mx-auto fill-bean/20" />
                      </div>
                      <div className="text-2xl font-bold">Success</div>
                      <p className="text-foreground/70 mt-1">Delivering exceptional results</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Industries Section */}
      <PageSection dark title="Industries We Serve" subtitle="Expertise across diverse sectors and business domains">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["Technology", "Finance", "Healthcare", "Retail", "Education", "Manufacturing", "Energy", "Media"].map((industry, index) => (
            <Card key={index} className="p-6 text-center hover:border-bean/30 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-1">{industry}</h3>
              <p className="text-foreground/60 text-sm">Specialized solutions</p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Partnership Approach */}
      <PageSection title="Our Partnership Approach" subtitle="How we work with clients to deliver exceptional results">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
            <p className="text-foreground/70">
              We work closely with your team, fostering an environment of open communication, 
              knowledge sharing, and collaborative problem-solving.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
            <p className="text-foreground/70">
              We maintain complete transparency throughout our engagement, providing regular 
              updates, clear communication, and honest assessments.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Long-term Value</h3>
            <p className="text-foreground/70">
              We focus on delivering solutions that provide sustainable value and position 
              your organization for long-term success.
            </p>
          </Card>
        </div>
      </PageSection>

      {/* Global Presence */}
      <PageSection dark title="Global Reach" subtitle="Serving clients around the world">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
                <p className="text-foreground/70 mb-4">
                  Offices and partnerships across North America, Europe, and Asia
                </p>
                <div className="flex justify-center space-x-6 text-foreground/70">
                  <div>
                    <div className="text-2xl font-bold text-bean">25+</div>
                    <div className="text-sm">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-bean">100+</div>
                    <div className="text-sm">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-bean">200+</div>
                    <div className="text-sm">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </PageSection>
    </>
  );
};

export default Clients;
