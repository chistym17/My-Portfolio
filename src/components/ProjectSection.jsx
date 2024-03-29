
import  {  useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TagTalk",
    description: "A Blogging Website",
    image: "https://i.ibb.co/mbqsFSs/tagtalk.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/TagTalk",
    previewUrl: "https://tagtalk-5e7ed.web.app",
  },
  {
    id: 2,
    title: "YouVid",
    description: "A Youtube Clone",
    image: "https://i.ibb.co/sQ80mn8/youvid.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/YouVid",
    previewUrl:"https://polite-semifreddo-b98601.netlify.app",
  },
  {
    id: 3,
    title: "Flavour Fusion",
    description: "A Food Ordering Website",
    image: "https://i.ibb.co/K9VGcMc/fl.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/Restuarant-management-project",
    previewUrl: "https://restaurant-management-e7db6.firebaseapp.com",
  },

  {
    id: 5,
    title: "Gamers Hub",
    description: "Simple Gaming static website",
    image: "https://i.ibb.co/rcbDG9Z/gamer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mchisty17/milestone-2-assignment",
    previewUrl: "https://github.com/mchisty17/GamersHub",
  },
  {
    id: 6,
    title: "ChatVid",
    description: "A video Chatting app",
    image: "https://i.ibb.co/K5jMmzS/c2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/ChatVid-Video-Chat-project",
    previewUrl: "https://mchisty17.pythonanywhere.com",
  },

  {
    id: 4,
    title: "My portfolio",
    description: "Portfolio",
    image: "https://i.ibb.co/TrdwQ3D/port.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/chistym17/My-Portfolio",
    previewUrl: "https://my-portfolio-b9aa1.web.app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects ">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        My Projects
      </h2>

     

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 px-10">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;