import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import Card from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Share2, Zap, Globe, Shield, CheckCircle } from 'lucide-react';

const Product = () => {
  const features = [
    {
      title: "Community Building",
      description: "Create and nurture communities of like-minded philanthropists dedicated to specific causes.",
      icon: <Users size={32} />
    },
    {
      title: "Visual Campaigns",
      description: "Design visually compelling campaigns that effectively communicate your mission and needs.",
      icon: <Share2 size={32} />
    },
    {
      title: "Fundraising Tools",
      description: "Powerful tools to create, manage, and track fundraising campaigns for your organization.",
      icon: <Heart size={32} />
    },
    {
      title: "Volunteer Management",
      description: "Streamlined volunteer recruitment, scheduling, and management features.",
      icon: <Zap size={32} />
    },
    {
      title: "Global Reach",
      description: "Connect with supporters and volunteers from around the world.",
      icon: <Globe size={32} />
    },
    {
      title: "Secure Platform",
      description: "State-of-the-art security to protect sensitive data and transactions.",
      icon: <Shield size={32} />
    }
  ];

  const useCases = [
    {
      title: "Nonprofit Organizations",
      description: "SocialBirds helps nonprofits reach a wider audience, raise funds more effectively, and manage volunteers efficiently.",
      points: [
        "Create compelling fundraising campaigns",
        "Connect with potential donors",
        "Streamline volunteer management",
        "Share impact stories"
      ]
    },
    {
      title: "Community Initiatives",
      description: "Local community groups can leverage SocialBirds to organize events, gather support, and drive positive change.",
      points: [
        "Organize community events",
        "Gather local support",
        "Coordinate volunteers",
        "Share success stories"
      ]
    },
    {
      title: "Educational Institutions",
      description: "Schools and universities can use SocialBirds to engage alumni, raise funds for specific projects, and coordinate volunteer activities.",
      points: [
        "Alumni engagement campaigns",
        "Project-specific fundraising",
        "Student volunteer coordination",
        "Impact reporting"
      ]
    }
  ];

  return (
    <>
      <PageHero 
        title="SocialBirds" 
        subtitle="Connecting communities for meaningful social impact"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Empowering Social Organizations</h2>
            <p className="text-foreground/70 mb-4">
              SocialBirds is an online platform providing help to organizations to achieve their 
              objective. Many social organizations are working to help the communities, however 
              with the increasing social media there is a potential opportunity to quickly reach 
              out and engage the large philanthropists in a meaningful way.
            </p>
            <p className="text-foreground/70 mb-4">
              To fulfill the need, we set off to build SocialBirds online platform that would 
              connect more people with our nonprofit beneficiaries in a more meaningful way. 
              SocialBirds Team has taken extra steps to create a stronger community of like-minded 
              people dedicated to celebrating youth for the social causes.
            </p>
            <p className="text-foreground/70">
              It is our intent to complement your organization's existing fundraising and volunteering 
              activities by giving you a user-friendly Online platform to create visually compelling 
              campaigns that raise awareness and funding for your organizational needs and dreams.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-bean/5 rounded-xl p-8 flex items-center justify-center">
              <div className="glass-card p-8 rounded-lg shadow-lg max-w-[80%] rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-3xl font-bold text-gradient">SocialBirds</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-bean mr-2" />
                    <span>Connect Communities</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-bean mr-2" />
                    <span>Enable Fundraising</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-bean mr-2" />
                    <span>Facilitate Volunteering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-bean mr-2" />
                    <span>Drive Social Impact</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[120%] max-h-[120%] bg-bean/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </PageSection>

      {/* Features Section */}
      <PageSection dark title="Key Features" subtitle="Powerful tools to drive your social impact">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <div className="text-bean mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Benefits Section */}
      <PageSection title="Why Choose SocialBirds" subtitle="The platform designed with your organization's success in mind">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded-full text-bean mr-4 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">User-Friendly Interface</h4>
                  <p className="text-foreground/70">
                    Intuitive design that makes it easy for organizations of all sizes to create and manage campaigns.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded-full text-bean mr-4 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Comprehensive Tools</h4>
                  <p className="text-foreground/70">
                    All-in-one platform for fundraising, volunteer management, and community engagement.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded-full text-bean mr-4 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Customizable Campaigns</h4>
                  <p className="text-foreground/70">
                    Tailor your campaigns to reflect your organization's unique mission and brand.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-bean/20 p-2 rounded-full text-bean mr-4 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Analytics & Insights</h4>
                  <p className="text-foreground/70">
                    Detailed reporting to track campaign performance and understand your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-video bg-gradient-to-br from-bean/10 to-transparent rounded-xl p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute top-0 left-0 w-full h-full bg-card border border-border rounded-lg transform rotate-3 shadow-md"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-card border border-border rounded-lg transform -rotate-2 shadow-md"></div>
                <div className="relative w-full h-full bg-card border border-border rounded-lg shadow-md p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-bean/20 flex items-center justify-center text-bean mr-3">
                        <Heart size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-bean/20 rounded-full w-3/4 mb-2"></div>
                        <div className="h-2 bg-bean/10 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-bean/20 flex items-center justify-center text-bean mr-3">
                        <Users size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-bean/20 rounded-full w-4/5 mb-2"></div>
                        <div className="h-2 bg-bean/10 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-bean/20 flex items-center justify-center text-bean mr-3">
                        <Globe size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-bean/20 rounded-full w-2/3 mb-2"></div>
                        <div className="h-2 bg-bean/10 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Use Cases */}
      <PageSection dark title="Use Cases" subtitle="How different organizations can leverage SocialBirds">
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-foreground/70 mb-4">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <div className="text-bean mr-2 flex-shrink-0 mt-1">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-foreground/70">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Testimonials */}
      <PageSection title="Success Stories" subtitle="Hear from organizations using SocialBirds">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Horizon Youth Foundation</h4>
              <p className="text-foreground/60">Youth Development Nonprofit</p>
            </div>
            <p className="text-foreground/70 italic mb-4">
              "SocialBirds has transformed how we engage with our community. We've seen a 40% increase in 
              volunteer sign-ups and a significant boost in donations since implementing the platform."
            </p>
            <div className="text-sm text-foreground/60">
              Maria Rodriguez, Executive Director
            </div>
          </Card>
          <Card className="p-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold">GreenEarth Initiative</h4>
              <p className="text-foreground/60">Environmental Conservation Organization</p>
            </div>
            <p className="text-foreground/70 italic mb-4">
              "The visual campaign tools in SocialBirds have allowed us to tell our story more effectively. 
              Our latest fundraising campaign exceeded its goal by 75%, thanks to the platform's reach."
            </p>
            <div className="text-sm text-foreground/60">
              James Chen, Development Director
            </div>
          </Card>
        </div>
      </PageSection>

      {/* Pricing Section */}
      <PageSection dark title="Pricing" subtitle="Flexible plans designed for organizations of all sizes">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Starter</h3>
              <p className="text-foreground/60">For small organizations</p>
            </div>
            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">$49<span className="text-lg font-normal text-foreground/60">/month</span></div>
              <p className="text-foreground/60">Billed annually</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Up to 500 community members</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>3 active campaigns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Basic reporting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Email support</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary w-full">
              Get Started
            </Link>
          </Card>
          <Card className="p-6 relative overflow-hidden border-bean">
            {/* Popular tag */}
            <div className="absolute top-6 right-6">
              <div className="bg-bean text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Professional</h3>
              <p className="text-foreground/60">For growing organizations</p>
            </div>
            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">$99<span className="text-lg font-normal text-foreground/60">/month</span></div>
              <p className="text-foreground/60">Billed annually</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Up to 2,000 community members</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>10 active campaigns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Advanced reporting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Priority email support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Custom branding</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary w-full">
              Get Started
            </Link>
          </Card>
          <Card className="p-6 relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
              <p className="text-foreground/60">For large organizations</p>
            </div>
            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">Custom</div>
              <p className="text-foreground/60">Contact for pricing</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Unlimited community members</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Unlimited active campaigns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Custom reporting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Dedicated support manager</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>API access</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-bean mr-2 mt-1" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary w-full">
              Contact Us
            </Link>
          </Card>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Talk to Us?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Contact our team to learn more about SocialBirds and how it can help your organization 
            achieve its social impact goals.
          </p>
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full p-3 rounded-md bg-card border border-border mb-4"
              />
              <Link to="/contact" className="btn-primary w-full">
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <p className="text-sm text-foreground/60">
              We'll respond within 24 hours to schedule a demo or answer any questions.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default Product;
