import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ config }) => {
  const projects = [
    {
      title: "Expense Tracker 2025",
      description:
        "A modern, responsive expense tracking app with charts, categories, dark mode, and local storage persistence.",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      icon: (
        <svg
          className="w-20 h-20 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      githubUrl: "https://github.com/Kyaw-Zay/MyExpenseTracker",
      liveUrl: "https://myexpensetracker2025.netlify.app/",
    },
    {
      title: "PetalStars/Bookstore",
      description:
        "An interactive poetic web experience blending nature, technology, and floating particles animation.",
      gradient: "bg-gradient-to-br from-pink-400 to-purple-500",
      icon: (
        <svg
          className="w-20 h-20 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
      githubUrl: "https://github.com/Kyaw-Zay/petalstars-bookstore",
      liveUrl: "https://kyaw-zay.github.io/petalstars-bookstore/",
    },
    {
      title: "Todo List App ",
      description:
        "to-do list application with task management features like adding, editing, deleting, and marking tasks as completed.",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: (
        <svg
          className="w-20 h-20 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      githubUrl: "https://github.com/Kyaw-Zay/mvc-todo",
      liveUrl: "https://mvc-todo.netlify.app/",
    },

    {
      title: "My Portfolio Website",
      description:
        "This very portfolio! Built with React, Tailwind, animations, dark mode, EmailJS, and deployed on Vercel.",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      icon: (
        <svg
          className="w-20 h-20 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      githubUrl: "https://github.com/Kyaw-Zay/My-Portfolio",
      liveUrl: "https://calehenitsue.github.io/My-Portfolio/", // or your Vercel/Netlify link
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className="text-5xl font-light mb-16 text-center gradient-text"
          style={{
            fontFamily: config.font_family,
            fontSize: `${config.font_size * 3}px`,
          }}
        >
          {config.projects_title || "My Work"}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              gradient={project.gradient}
              icon={project.icon}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
