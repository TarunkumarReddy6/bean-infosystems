
import React, { useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import Card from '@/components/ui/Card';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  subject: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    subject: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        subject: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: [
        "123 Tech Drive, Innovation Valley",
        "San Francisco, CA 94105",
        "United States"
      ]
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Numbers",
      details: [
        "Main: +1 (555) 123-4567",
        "Support: +1 (555) 987-6543",
        "Fax: +1 (555) 456-7890"
      ]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Addresses",
      details: [
        "info@beaninfosystem.com",
        "support@beaninfosystem.com",
        "careers@beaninfosystem.com"
      ]
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <>
      <PageHero 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out to us with any questions or inquiries."
      />

      {/* Contact Form and Info */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground/70 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-md bg-card border border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground/70 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-md bg-card border border-border"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className="block text-foreground/70 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md bg-card border border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-foreground/70 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md bg-card border border-border"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-foreground/70 mb-1">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-card border border-border"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Service Information">Service Information</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Career Information">Career Information</option>
                    <option value="Support Request">Support Request</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-foreground/70 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-md bg-card border border-border"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start">
                    <div className="text-bean mr-4 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <ul className="space-y-1 text-foreground/70">
                        {info.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Map Section */}
      <PageSection dark>
        <Card className="p-0 overflow-hidden h-96">
          <div className="h-full w-full bg-muted flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="text-foreground/70">
                Map integration would be displayed here. For implementation, consider using Google Maps API, Mapbox, or LeafletJS.
              </p>
            </div>
          </div>
        </Card>
      </PageSection>

      {/* FAQ Section */}
      <PageSection title="Frequently Asked Questions" subtitle="Quick answers to common questions">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
            <p className="text-foreground/70">
              We offer a comprehensive range of services including application development, 
              consulting services, and advisory services. Each service is tailored to meet 
              your specific business needs and objectives.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">How can I request a quote?</h3>
            <p className="text-foreground/70">
              You can request a quote by filling out our contact form, sending us an email, 
              or calling our sales team directly. We'll get back to you promptly to discuss 
              your requirements and provide a detailed quote.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Do you work with international clients?</h3>
            <p className="text-foreground/70">
              Yes, we work with clients globally. Our team is experienced in managing projects 
              across different time zones and has established processes to ensure effective 
              communication and collaboration regardless of location.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">What is your typical project timeline?</h3>
            <p className="text-foreground/70">
              Project timelines vary based on scope and complexity. During our initial 
              consultation, we'll provide a detailed timeline that outlines key milestones 
              and deliverables for your specific project.
            </p>
          </Card>
        </div>
      </PageSection>
    </>
  );
};

export default Contact;
