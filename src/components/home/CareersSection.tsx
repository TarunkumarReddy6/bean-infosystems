
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserRound, User, UserCheck, UserPlus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Building from '@/components/ui/Building';
import MapPin from '@/components/ui/MapPin';
import PageSection from '@/components/layout/PageSection';

const CareersSection = () => {
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

  return (
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
  );
};

export default CareersSection;
