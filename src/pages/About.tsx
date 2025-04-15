
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import Card from '@/components/ui/Card';
import { 
  Lightbulb, 
  Target, 
  Heart, 
  Users, 
  Award, 
  Tool, 
  Edit, 
  Share2, 
  Map
} from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2010",
      title: "Founding",
      description: "Bean Info System was founded with a vision to provide innovative software solutions to businesses across industries."
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Expanded our services to include consulting and advisory solutions to provide comprehensive support to our clients."
    },
    {
      year: "2016",
      title: "Global Presence",
      description: "Established international offices and partnerships to better serve our global client base."
    },
    {
      year: "2018",
      title: "SocialBirds Launch",
      description: "Launched our flagship product, SocialBirds, to help connect philanthropists with nonprofit organizations."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Pivoted to focus on helping businesses navigate digital transformation in a rapidly changing landscape."
    },
    {
      year: "Present",
      title: "Continued Innovation",
      description: "Continuing to innovate and adapt to emerging technologies to better serve our clients' evolving needs."
    }
  ];

  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
    },
  ];

  return (
    <>
      <PageHero 
        title="About Bean Info System" 
        subtitle="Driving digital transformation through innovation and expertise"
      />

      {/* Company Overview */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-foreground/70 mb-4">
              Founded in 2010, Bean Info System has grown from a small development team to a comprehensive 
              technology partner serving clients across the globe. Our journey is marked by a relentless 
              pursuit of innovation and excellence in everything we do.
            </p>
            <p className="text-foreground/70 mb-4">
              We've built our reputation on delivering high-quality software solutions that address complex 
              business challenges. Over the years, we've expanded our capabilities to include strategic 
              consulting and advisory services, becoming a trusted partner for businesses navigating 
              digital transformation.
            </p>
            <p className="text-foreground/70">
              Today, we continue to push the boundaries of what's possible, leveraging emerging technologies 
              to help our clients stay ahead in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-bean/20 to-bean/5 flex items-center justify-center">
                <div className="relative w-3/4 aspect-square">
                  <div className="absolute top-0 left-0 w-full h-full bg-card rounded-lg transform rotate-6 shadow-lg"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-card rounded-lg transform -rotate-3 shadow-lg"></div>
                  <div className="relative w-full h-full bg-card rounded-lg shadow-lg p-6 flex flex-col justify-center">
                    <div className="text-bean mb-4">
                      <Users size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-foreground/70">
                      To empower businesses through innovative digital solutions that drive growth and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[120%] max-h-[120%] bg-bean/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </PageSection>

      {/* Mission, Vision, Values */}
      <PageSection dark>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Lightbulb size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-foreground/70">
              To empower businesses through innovative digital solutions that drive growth, efficiency, and 
              competitive advantage in an increasingly connected world.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Target size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-foreground/70">
              To be the leading catalyst for digital transformation, helping businesses harness the power 
              of technology to achieve their fullest potential.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Heart size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <ul className="text-foreground/70 space-y-2">
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Innovation at our core</span>
              </li>
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Integrity in every interaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Excellence in execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-bean mr-2">•</span>
                <span>Client success as our success</span>
              </li>
            </ul>
          </Card>
        </div>
      </PageSection>

      {/* Company Timeline */}
      <PageSection title="Our Journey" subtitle="A timeline of Bean Info System's growth and evolution">
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative grid md:grid-cols-2 gap-6 items-center`}>
                {/* Year marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-bean flex items-center justify-center text-white font-semibold z-10">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16 md:text-left'}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-bean/30 transition-all duration-300">
                    <div className="text-bean text-sm font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                  {/* Empty space to maintain grid alignment */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Our Approach */}
      <PageSection dark title="Our Approach" subtitle="How we deliver exceptional results for our clients">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Edit size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Discovery</h3>
            <p className="text-foreground/70">
              We begin with a thorough discovery process to understand your business objectives, challenges, and requirements.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Map size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Strategy</h3>
            <p className="text-foreground/70">
              We develop a comprehensive strategy tailored to your unique needs and aligned with your business goals.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Tool size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Implementation</h3>
            <p className="text-foreground/70">
              Our expert team executes the strategy with precision, leveraging the latest technologies and best practices.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Share2 size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Optimization</h3>
            <p className="text-foreground/70">
              We continuously monitor, analyze, and optimize to ensure sustainable results and ongoing improvement.
            </p>
          </Card>
        </div>
      </PageSection>

      {/* Team Section */}
      <PageSection title="Our Leadership Team" subtitle="Meet the experts behind Bean Info System">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative mx-auto w-32 h-32 overflow-hidden rounded-full border-2 border-bean/30">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-foreground/70">{member.role}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Awards & Recognition */}
      <PageSection dark title="Awards & Recognition" subtitle="Celebrating our achievements and industry recognition">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="text-bean mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Innovation Excellence Award</h3>
            <p className="text-foreground/70">
              Recognized for our innovative approach to software development and digital solutions.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="text-bean mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Best Workplace Award</h3>
            <p className="text-foreground/70">
              Honored for creating an exceptional workplace culture that fosters growth and collaboration.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="text-bean mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Tech Leader of the Year</h3>
            <p className="text-foreground/70">
              Our CEO was recognized for outstanding leadership in the technology sector.
            </p>
          </Card>
        </div>
      </PageSection>
    </>
  );
};

export default About;
