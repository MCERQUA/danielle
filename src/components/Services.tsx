import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "Strategic content planning, community engagement, and brand voice development across all platforms.",
      icon: "📱",
      features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Brand Voice Development"]
    },
    {
      title: "Brand Design",
      description: "Creating cohesive visual identities that reflect your brand's personality and connect with your audience.",
      icon: "🎨",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Color Palettes"]
    },
    {
      title: "Website Design",
      description: "Beautiful, responsive websites that provide exceptional user experiences and drive conversions.",
      icon: "💻",
      features: ["UI/UX Design", "Responsive Design", "User Experience", "Conversion Optimization"]
    },
    {
      title: "Content Creation",
      description: "Engaging visual content and copywriting that tells your brand story and resonates with your audience.",
      icon: "✨",
      features: ["Graphic Design", "Copywriting", "Visual Storytelling", "Campaign Development"]
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            What I{' '}
            <span className="bg-gradient-to-r from-feminine-pink to-feminine-lavender bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your brand and connect with your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-feminine-pink to-feminine-rose rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's create something beautiful that represents your brand and connects with your audience.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-feminine-pink to-feminine-rose text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;