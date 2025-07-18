
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Email format validation (optional)
    // ... your validation code ...

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result) => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "maheswari0206s@gmail.com",
      href: "mailto:maheswari0206s@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "7825991995",
      href: "tel:7825991995",
      color: "green"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/maheswari-saminathan-3744a6354/",
      color: "purple"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out if you're looking for a dedicated Software Testing Engineer 
                or if you have any questions about my experience and skills. I'm always excited 
                to discuss new opportunities and collaborate on interesting projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const colorClasses = getColorClasses(info.color);
                
                if (info.title === 'LinkedIn') {
                  return (
                    <button
                      key={info.title}
                      type="button"
                      onClick={() => window.open(info.href.trim(), '_blank', 'noopener,noreferrer')}
                      className="group bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 w-full text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${colorClasses}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                }
                return (
                  <a
                    key={info.title}
                    href={info.href}
                    className="group bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${colorClasses}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Professional Availability */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border">
              <h4 className="font-semibold mb-2">Professional Status</h4>
              <p className="text-sm text-muted-foreground">
                Currently working as an Intern Test Engineer and open to full-time opportunities 
                in Software Testing and Quality Assurance roles.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
