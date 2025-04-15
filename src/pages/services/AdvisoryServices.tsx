
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import { BarChart, Target, TrendingUp, ArrowRight, PieChart, LineChart, Compass, Presentation, Shield, Globe } from 'lucide-react';
import Card from '@/components/ui/Card';

const AdvisoryServices = () => {
  const services = [
    {
      title: "Technology Forecasting",
      description: "Analysis of emerging technologies and their potential impact on your industry and business.",
      icon: <Compass size={36} />
    },
    {
      title: "Market Analysis",
      description: "In-depth research and insights into market trends, competitor positioning, and growth opportunities.",
      icon: <BarChart size={36} />
    },
    {
      title: "Business Strategy",
      description: "Expert guidance on aligning your business and technology strategies for maximum impact.",
      icon: <Target size={36} />
    },
    {
      title: "Innovation Workshops",
      description: "Facilitated sessions to identify innovation opportunities and develop actionable plans.",
      icon: <Presentation size={36} />
    },
    {
      title: "Risk Assessment",
      description: "Identification and analysis of potential risks to your digital initiatives and strategies for mitigation.",
      icon: <Shield size={36} />
    },
    {
      title: "Global Expansion",
      description: "Advisory services for technology considerations related to international growth and market entry.",
      icon: <Globe size={36} />
    }
  ];

  const benefits = [
    {
      title: "Informed Decision Making",
      description: "Make better business decisions with access to expert insights and analysis."
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the curve by anticipating industry trends and technological changes."
    },
    {
      title: "Risk Mitigation",
      description: "Identify and address potential risks before they impact your business."
    },
    {
      title: "Strategic Alignment",
      description: "Ensure your technology investments support and enhance your business objectives."
    }
  ];

  return (
    <>
      <PageHero 
        title="Advisory Services" 
        subtitle="Expert guidance to navigate digital trends and make informed business decisions"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Navigate the Future with Confidence</h2>
            <p className="text-foreground/70 mb-4">
              In a rapidly evolving digital landscape, making informed decisions about technology 
              investments, market positioning, and innovation strategies is more challenging—and 
              more critical—than ever before.
            </p>
            <p className="text-foreground/70 mb-4">
              Bean Info System's advisory services provide the insights and expertise you need to 
              navigate this complexity with confidence. Our team of industry experts offers strategic 
              guidance based on deep market knowledge, technological foresight, and business acumen.
            </p>
            <p className="text-foreground/70">
              Whether you're exploring new market opportunities, evaluating emerging technologies, 
              or developing a long-term digital strategy, our advisory services can help you make 
              decisions that drive sustainable business growth and competitive advantage.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-bean/5 rounded-xl p-8 flex items-center justify-center">
              <div className="glass-card p-8 rounded-lg shadow-lg max-w-[80%] rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-bean mb-6">
                  <TrendingUp size={48} />
                </div>
                <div className="flex items-end h-32 space-x-3">
                  <div className="bg-bean/20 h-1/3 w-12 rounded-t"></div>
                  <div className="bg-bean/30 h-1/2 w-12 rounded-t"></div>
                  <div className="bg-bean/40 h-2/3 w-12 rounded-t"></div>
                  <div className="bg-bean/50 h-4/5 w-12 rounded-t"></div>
                  <div className="bg-bean/60 h-full w-12 rounded-t"></div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[120%] max-h-[120%] bg-bean/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </PageSection>

      {/* Services Grid */}
      <PageSection dark title="Our Advisory Services" subtitle="Expert guidance across key areas to drive your business forward">
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
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Our Advisory Approach</h2>
            <p className="text-foreground/70 mb-6">
              Our approach to advisory services is collaborative, rigorous, and tailored to your 
              specific business context and objectives.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded text-bean mr-4 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Discovery & Assessment</h4>
                  <p className="text-foreground/70">
                    We begin by understanding your business context, challenges, and objectives through 
                    in-depth discussions and analysis of relevant data.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded text-bean mr-4 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Research & Analysis</h4>
                  <p className="text-foreground/70">
                    Our team conducts thorough research and analysis of market trends, emerging technologies, 
                    and competitive landscapes relevant to your situation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded text-bean mr-4 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Strategic Recommendations</h4>
                  <p className="text-foreground/70">
                    Based on our findings, we develop actionable recommendations and strategies tailored 
                    to help you achieve your goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded text-bean mr-4 mt-1">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Implementation Support</h4>
                  <p className="text-foreground/70">
                    We provide ongoing guidance and support as you implement our recommendations, 
                    adapting our approach as needed based on results and changing circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="p-6 flex items-center justify-center glass-card">
                <div className="text-bean">
                  <LineChart size={48} />
                </div>
              </Card>
              <Card className="p-6 flex items-center justify-center glass-card translate-y-6">
                <div className="text-bean">
                  <BarChart size={48} />
                </div>
              </Card>
            </div>
            <div className="space-y-4 pt-6">
              <Card className="p-6 flex items-center justify-center glass-card">
                <div className="text-bean">
                  <PieChart size={48} />
                </div>
              </Card>
              <Card className="p-6 flex items-center justify-center glass-card">
                <div className="text-bean">
                  <TrendingUp size={48} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Benefits Section */}
      <PageSection dark title="Benefits of Our Advisory Services" subtitle="Creating value through expert insights and guidance">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Case Study Section */}
      <PageSection title="Success Story" subtitle="See how our advisory services have helped clients succeed">
        <Card className="p-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="flex items-center mb-4">
                <div className="bg-bean/20 rounded-full px-3 py-1 text-sm text-bean font-medium">
                  Case Study
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Helping a Global Retail Brand Navigate Digital Transformation
              </h3>
              <p className="text-foreground/70 mb-4">
                A leading retail brand was facing challenges adapting to rapidly changing consumer 
                behaviors and digital commerce trends. They engaged Bean Info System's advisory 
                team to help develop a comprehensive digital transformation strategy.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-1">Challenge</h4>
                  <p className="text-foreground/70">
                    The client needed to modernize their technology infrastructure and digital 
                    capabilities while maintaining business continuity and controlling costs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Approach</h4>
                  <p className="text-foreground/70">
                    Our team conducted a comprehensive assessment of their current state, market 
                    trends, and competitive landscape, then developed a phased transformation roadmap.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Results</h4>
                  <p className="text-foreground/70">
                    The implementation of our recommendations led to a 35% increase in online sales, 
                    improved customer satisfaction scores, and significant operational efficiencies.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="text-bean font-medium flex items-center hover:underline"
              >
                Discuss your challenges with our team
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-xl h-full flex items-center justify-center p-6">
                <div className="rounded-lg overflow-hidden shadow-lg aspect-square w-full max-w-xs relative">
                  <div className="absolute inset-0 bg-card p-6 flex flex-col justify-center">
                    <div className="text-bean text-center mb-4">
                      <TrendingUp size={48} className="mx-auto" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">+35%</div>
                      <div className="text-foreground/70">Online Sales Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </PageSection>

      {/* CTA Section */}
      <PageSection>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Gain a Competitive Edge with Expert Advisory</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Contact us today to learn how our advisory services can help you navigate complex business 
            challenges and capitalize on emerging opportunities.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Request a Consultation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default AdvisoryServices;
