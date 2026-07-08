const AboutSection = ({ config }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-5xl font-light mb-12 text-center gradient-text"
          style={{
            fontFamily: `${config.font_family}`,
            fontSize: `${config.font_size * 3}px`,
          }}
        >
          {config.about_title}
        </h2>
        <div className="bg-surface rounded-3xl shadow-xl p-12 border border-custom">
          <p
            className="text-lg text-secondary leading-relaxed mb-8"
            style={{ fontSize: `${config.font_size * 1.125}px` }}
          >
            {config.about_text}
          </p>
          {/* <p
            className="text-lg text-secondary leading-relaxed mb-8"
            style={{ fontSize: `${config.font_size * 1.125}px` }}
          >
            While I specialize in frontend work, I am actively preparing to
            expand into backend development with Node.js and MongoDB. My
            long-term goal is to grow into a full-stack developer who can build
            reliable, scalable, and user-centered web applications from end to
            end.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
