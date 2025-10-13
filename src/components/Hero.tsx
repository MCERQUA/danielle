import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto rounded-full glass-card p-2 animate-glow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-feminine-pink to-feminine-lavender flex items-center justify-center">
              <span className="text-6xl font-display text-white">D</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-6">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-feminine-pink to-feminine-lavender bg-clip-text text-transparent">
              Danielle
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Social Media Manager at{' '}
            <a
              href="https://jamsocial.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-feminine-rose hover:text-feminine-pink transition-colors duration-300 font-semibold"
            >
              JamSocial.app
            </a>
            <br />
            Website & Brand Designer
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I create beautiful digital experiences that connect brands with their audiences.
            Specializing in social media strategy, brand identity, and web design with a focus
            on elegant, user-centered solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-feminine-pink to-feminine-rose text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            <button className="px-8 py-3 glass-effect rounded-full font-semibold text-gray-700 hover:bg-white/20 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;