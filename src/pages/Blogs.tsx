import { Link } from "react-router-dom";

const blogs = [
  {
    name: "Understanding React Hooks",
    description:
      "A deep dive into React Hooks, exploring how to use useState, useEffect, and custom hooks effectively in modern React development.",
    github_url: "https://github.com/username/react-hooks-blog",
    live_url: "https://www.react-hooks-blog.com",
    image: "https://i.postimg.cc/fRy3QBmH/complex-project-tools.jpg",
    used_technologies: {
      frontend: ["React", "JavaScript", "Hooks"],
      backend: ["None"],
    },
  },
  {
    name: "A Guide to TailwindCSS",
    description:
      "An extensive guide on how to use TailwindCSS to build responsive and customizable UI components in web applications.",
    github_url: "https://github.com/username/tailwindcss-guide",
    live_url: "https://www.tailwindcssguide.com",
    image: "https://i.postimg.cc/fRy3QBmH/complex-project-tools.jpg",

    used_technologies: {
      frontend: ["React", "TailwindCSS"],
      backend: ["None"],
    },
  },
  {
    name: "Mastering Node.js for Beginners",
    description:
      "A beginner-friendly blog post explaining the fundamentals of Node.js, its ecosystem, and how to build your first Node.js application.",
    github_url: "https://github.com/username/nodejs-for-beginners",
    live_url: "https://www.nodejsbeginners.com",
    image: "https://i.postimg.cc/fRy3QBmH/complex-project-tools.jpg",

    used_technologies: {
      frontend: ["None"],
      backend: ["Node.js", "Express"],
    },
  },
  {
    name: "Exploring MongoDB for Web Applications",
    description:
      "A detailed blog explaining how MongoDB works, why it's useful for web applications, and how to integrate it with Express and Node.js.",
    github_url: "https://github.com/username/mongodb-web-applications",
    live_url: "https://www.mongodb-web-apps.com",
    image: "https://i.postimg.cc/fRy3QBmH/complex-project-tools.jpg",

    used_technologies: {
      frontend: ["None"],
      backend: ["MongoDB", "Node.js", "Express"],
    },
  },
  {
    name: "Building a Personal Portfolio with React",
    description:
      "A step-by-step guide to building your own personal portfolio website using React, showcasing your skills and projects.",
    github_url: "https://github.com/username/personal-portfolio-react",
    live_url: "https://www.personalportfolio.com",
    image: "https://i.postimg.cc/fRy3QBmH/complex-project-tools.jpg",

    used_technologies: {
      frontend: ["React", "JavaScript", "CSS"],
      backend: ["None"],
    },
  },
  {
    name: "Introduction to Web Development with HTML & CSS",
    description:
      "A blog post aimed at beginners who want to learn the fundamentals of web development using HTML and CSS.",
    github_url: "https://github.com/username/html-css-beginners",
    live_url: "https://www.htmlcssbeginners.com",
    image: "https://i.postimg.cc/fRy3QBmH/complex-project-tools.jpg",

    used_technologies: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["None"],
    },
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="grid lg:grid-cols-3 gap-5 px-5">
        {blogs.map((project, index) => (
          <div
            key={index}
            className="card 
            hover:scale-105
            rounded-sm card-compact bg-orange-400 text-white  shadow-xl"
          >
            <figure>
              <img src={project.image} alt="Project-Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
              <div className="grid grid-cols-1 gap-5 text-center font-bold cursor-pointer">
                <span className="bg-yellow-400 text-black rounded-full py-2">
                  <Link to={project.github_url} target="_blank">
                    Read Full Article
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
