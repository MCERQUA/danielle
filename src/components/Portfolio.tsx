import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "JamSocial.app Social Strategy",
      category: "social-media",
      description: "Comprehensive social media strategy and content creation for music collaboration platform",
      image: "/portfolio/jamsocial-social.jpg",
      tags: ["Social Media", "Content Strategy", "Community Building"],
      link: "https://jamsocial.app"
    },
    {
      id: 2,
      title: "Boutique Brand Identity",
      category: "branding",
      description: "Complete brand identity design for luxury fashion boutique including logo, colors, and guidelines",
      image: "/portfolio/boutique-brand.jpg",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Website Design",
      category: "web-design",
      description: "Modern, responsive e-commerce website with focus on user experience and conversion optimization",
      image: "/portfolio/ecommerce-web.jpg",
      tags: ["Web Design", "UX/UI", "E-commerce"],
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Social Campaign",
      category: "social-media",
      description: "Instagram and TikTok content strategy that increased engagement by 300% in 3 months",
      image: "/portfolio/restaurant-social.jpg",
      tags: ["Social Media", "Content Creation", "Campaign"],
      link: "#"
    },
    {
      id: 5,
      title: "Tech Startup Branding",
      category: "branding",
      description: "Modern brand identity for AI startup including logo, website, and marketing materials",
      image: "/portfolio/tech-brand.jpg",
      tags: ["Branding", "Tech", "Startup"],
      link: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web-design",
      description: "Clean, minimalist portfolio website for creative professional with smooth animations",
      image: "/portfolio/portfolio-web.jpg",
      tags: ["Web Design", "Portfolio", "Minimalist"],
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'social-media', name: 'Social Media', count: portfolioItems.filter(item => item.category === 'social-media').length },
    { id: 'branding', name: 'Branding', count: portfolioItems.filter(item => item.category === 'branding').length },
    { id: 'web-design', name: 'Web Design', count: portfolioItems.filter(item => item.category === 'web-design').length }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 px-4 relative" id="portfolio">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-feminine-pink to-feminine-lavender bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in social media, branding, and web design
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-feminine-pink to-feminine-rose text-white shadow-lg'
                  : 'glass-effect text-gray-700 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-feminine-pink/30 to-feminine-lavender/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                  {item.category === 'social-media' && '📱'}
                  {item.category === 'branding' && '🎨'}
                  {item.category === 'web-design' && '💻'}
                </div>
                <div className="absolute top-4 right-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-gray-700 hover:bg-white/30 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-feminine-pink/20 text-feminine-rose text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              I'd love to show you more examples of my work and discuss how we can collaborate.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-feminine-pink to-feminine-rose text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;