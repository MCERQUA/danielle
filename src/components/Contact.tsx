import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      description: 'Connect professionally'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: '#',
      description: 'See my latest work'
    },
    {
      name: 'Dribbble',
      icon: '🏀',
      url: '#',
      description: 'Design portfolio'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:hello@danielle.design',
      description: 'hello@danielle.design'
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-feminine-pink to-feminine-lavender bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-display font-semibold text-gray-800 mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-effect rounded-lg border-0 focus:ring-2 focus:ring-feminine-pink focus:outline-none transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-effect rounded-lg border-0 focus:ring-2 focus:ring-feminine-pink focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-effect rounded-lg border-0 focus:ring-2 focus:ring-feminine-pink focus:outline-none transition-all duration-300"
                >
                  <option value="">Select a project type</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="branding">Brand Design</option>
                  <option value="web-design">Website Design</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-effect rounded-lg border-0 focus:ring-2 focus:ring-feminine-pink focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-feminine-pink to-feminine-rose text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message ✨
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Professional Info */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                Professional Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl">
                    🏢
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Current Role</h4>
                    <p className="text-gray-600">Social Media Manager at JamSocial.app</p>
                    <a
                      href="https://jamsocial.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-feminine-rose hover:text-feminine-pink transition-colors duration-300"
                    >
                      Visit JamSocial.app →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl">
                    🎯
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Specialties</h4>
                    <p className="text-gray-600">Brand Design, Web Design, Social Media Strategy</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Available for remote collaboration worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold text-gray-800 mb-6">
                Connect with me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group text-center"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{link.name}</h4>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold text-gray-800 mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">
                I typically respond to messages within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;