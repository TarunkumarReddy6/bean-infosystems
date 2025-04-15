
import React, { useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import Card from '@/components/ui/Card';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Heart, Zap, Lightbulb, Award } from 'lucide-react';

const Careers = () => {
  // Filter state
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [locationFilter, setLocationFilter] = useState<string>('All');

  // Placeholder job listings
  const jobListings = [
    {
      id: "job-1",
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "We're looking for an experienced Full-Stack Developer to join our engineering team."
    },
    {
      id: "job-2",
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
      description: "Join our design team to create exceptional user experiences for our clients' products."
    },
    {
      id: "job-3",
      title: "Project Manager",
      department: "Operations",
      location: "New York, NY",
      type: "Full-time",
      posted: "3 days ago",
      description: "Lead project teams and ensure successful delivery of client projects."
    },
    {
      id: "job-4",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      posted: "1 month ago",
      description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines."
    },
    {
      id: "job-5",
      title: "Business Analyst",
      department: "Consulting",
      location: "Chicago, IL",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "Work with clients to analyze business needs and translate them into technical requirements."
    },
    {
      id: "job-6",
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      posted: "5 days ago",
      description: "Help us grow our brand and reach new clients through innovative marketing strategies."
    },
    {
      id: "job-7",
      title: "Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "1 week ago",
      description: "Join our frontend team to build beautiful, responsive web applications."
    },
    {
      id: "job-8",
      title: "Data Scientist",
      department: "Analytics",
      location: "Boston, MA",
      type: "Full-time",
      posted: "3 weeks ago",
      description: "Apply your expertise in data analysis and machine learning to solve complex business problems."
    }
  ];

  // Extract unique departments and locations for filters
  const departments = ['All', ...new Set(jobListings.map(job => job.department))];
  const locations = ['All', ...new Set(jobListings.map(job => job.location))];

  // Filter jobs based on selected filters
  const filteredJobs = jobListings.filter(job => 
    (departmentFilter === 'All' || job.department === departmentFilter) &&
    (locationFilter === 'All' || job.location === locationFilter)
  );

  // Benefits
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages, performance bonuses, and equity options.",
      icon: <Award size={32} />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support.",
      icon: <Heart size={32} />
    },
    {
      title: "Growth & Development",
      description: "Continuous learning opportunities, mentorship, and career advancement pathways.",
      icon: <Zap size={32} />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements, generous PTO, and respect for personal time.",
      icon: <Lightbulb size={32} />
    }
  ];

  return (
    <>
      <PageHero 
        title="Careers at Bean Info System" 
        subtitle="Join our team and help shape the future of technology"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Build Your Career With Us</h2>
            <p className="text-foreground/70 mb-4">
              At Bean Info System, we're more than just a technology company—we're a community of 
              innovators, problem-solvers, and creative thinkers passionate about making an impact 
              through technology.
            </p>
            <p className="text-foreground/70 mb-4">
              We believe in fostering an inclusive, collaborative environment where diverse perspectives 
              are valued and where every team member has the opportunity to grow, contribute, and thrive.
            </p>
            <p className="text-foreground/70">
              Whether you're just starting your career or are a seasoned professional, we offer 
              exciting opportunities to work on meaningful projects, learn from industry experts, 
              and make your mark in the digital landscape.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-bean/5 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-bean mb-4">
                    <Users size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Our Team</h3>
                  <p className="text-foreground/70 max-w-xs mx-auto">
                    Join a diverse community of talented professionals dedicated to excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Culture Section */}
      <PageSection dark title="Our Culture" subtitle="What makes Bean Info System a great place to work">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
            <p className="text-foreground/70">
              We believe in the power of teamwork and foster an environment where collaboration, 
              knowledge-sharing, and mutual support are encouraged.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation-Driven</h3>
            <p className="text-foreground/70">
              We're passionate about innovation and provide the resources, support, and freedom 
              for our team members to explore new ideas and approaches.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-bean mb-4">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-foreground/70">
              We're committed to ongoing learning and professional development, offering various 
              opportunities for growth and skill enhancement.
            </p>
          </Card>
        </div>
      </PageSection>

      {/* Benefits Section */}
      <PageSection title="Employee Benefits" subtitle="We take care of our team members">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <div className="text-bean mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Open Positions */}
      <PageSection dark title="Open Positions" subtitle="Explore opportunities to join our team">
        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block mb-2 text-foreground/70">Department</label>
            <select 
              className="w-full p-2 rounded-md bg-card border border-border"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              {departments.map(department => (
                <option key={department} value={department}>{department}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-foreground/70">Location</label>
            <select 
              className="w-full p-2 rounded-md bg-card border border-border"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <Briefcase size={48} className="mx-auto text-foreground/30 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No positions found</h3>
            <p className="text-foreground/70">
              Try adjusting your filters or check back later for new opportunities.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card 
                key={job.id} 
                className="p-6 hover:border-bean/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold mr-3">{job.title}</h3>
                      <span className="text-sm text-foreground/60 bg-foreground/10 px-2 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center text-foreground/70 text-sm mb-3">
                      <span className="mr-4">{job.department}</span>
                      <span className="mr-4">{job.location}</span>
                      <span>Posted {job.posted}</span>
                    </div>
                    <p className="text-foreground/70">{job.description}</p>
                  </div>
                  <div className="flex space-x-3">
                    <Link 
                      to={`/careers/${job.id}`} 
                      className="btn-primary whitespace-nowrap"
                    >
                      View Details
                    </Link>
                    <Link 
                      to={`/careers/${job.id}/apply`} 
                      className="px-6 py-2 border border-border hover:border-bean rounded-md transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </PageSection>

      {/* Employee Testimonials */}
      <PageSection title="Life at Bean Info System" subtitle="Hear from our team members">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="mb-4 flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                  alt="Employee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">David Rodriguez</h4>
                <p className="text-sm text-foreground/60">Senior Developer</p>
              </div>
            </div>
            <p className="text-foreground/70 italic">
              "Working at Bean Info System has been an incredible journey. The collaborative culture, 
              challenging projects, and opportunities for growth have made it the perfect place to 
              advance my career."
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                  alt="Employee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Lisa Chen</h4>
                <p className="text-sm text-foreground/60">UX Designer</p>
              </div>
            </div>
            <p className="text-foreground/70 italic">
              "The supportive environment and focus on continuous learning at Bean Info System have 
              allowed me to grow both professionally and personally. I'm proud to be part of a team 
              that truly values innovation and quality."
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" 
                  alt="Employee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">James Wilson</h4>
                <p className="text-sm text-foreground/60">Project Manager</p>
              </div>
            </div>
            <p className="text-foreground/70 italic">
              "What sets Bean Info System apart is the genuine care for employees and commitment to 
              work-life balance. The challenging projects and collaborative team make it a rewarding 
              place to build a career."
            </p>
          </Card>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection dark>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Don't see a position that matches your skills? We're always looking for talented individuals 
            to join our team. Send us your resume, and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Contact Us
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default Careers;
