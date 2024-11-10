// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// // Import images from src/assets folder
// import htmlProject1 from "../assets/html-project1.jpg";
// import htmlProject2 from "../assets/js-project1.jpg";
// import htmlProject3 from "../assets/nextjs-project1.jpg";
// import javaScript1 from "../assets/react-project1.jpg";
// import javaScript2 from "../assets/php-project1.jpg";
// import typeScript1 from "../assets/html-project2.jpg";
// import typeScript2 from "../assets/html-project3.jpg";
// import typeScript3 from "../assets/html-project4.jpg";
// import typeScript4 from "../assets/html-project5.jpg";
// import htmlProject6 from "../assets/html-project6.jpg";
// import htmlProject7 from "../assets/html-project7.jpg";
// import htmlProject8 from "../assets/html-project8.jpg";
// import htmlProject9 from "../assets/html-project9.jpg";
// import htmlProject0 from "../assets/html-project0.jpg";

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   image: any;
// }

// const projects: Project[] = [
//   { id: 1, title: "HTML Project 1", category: "HTML", image: htmlProject1 },
//   { id: 2, title: "JavaScript Project 1", category: "HTML", image: htmlProject2 },
//   { id: 3, title: "Next.js Project 1", category: "HTML", image: htmlProject3 },
//   { id: 4, title: "React Project 1", category: "JavaScript", image: javaScript1 },
//   { id: 5, title: "PHP Project 1", category: "JavaScript", image: javaScript2 },
//   { id: 6, title: "HTML Project 2", category: "TypeScript", image: typeScript1 },
//   { id: 7, title: "HTML Project 3", category: "TypeScript", image: typeScript2 },
//   { id: 8, title: "HTML Project 4", category: "TypeScript", image: typeScript3 },
//   { id: 9, title: "HTML Project 5", category: "TypeScript", image: typeScript4 },
//   { id: 10, title: "JavaScript Project 2", category: "JavaScript", image: htmlProject6 },
//   { id: 11, title: "JavaScript Project 3", category: "JavaScript", image: htmlProject7 },
//   { id: 12, title: "React Project 2", category: "React", image: htmlProject8 },
//   { id: 13, title: "Next.js Project 2", category: "Next.js", image: htmlProject9 },
//   { id: 14, title: "Next.js Project 3", category: "Next.js", image: htmlProject0 },
// ];

// const categories = ["All", "HTML", "JavaScript", "Next.js", "React", "TypeScript"];

// const ProjectSection: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [displayLimit, setDisplayLimit] = useState<number>(6);
//   const [showAll, setShowAll] = useState<boolean>(false);

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter(project => project.category === selectedCategory);

//   const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, displayLimit);

//   const handleShowMoreLess = () => {
//     setShowAll(!showAll); // Toggle between showing all and limited projects
//   };

//   return (
//     <section className="p-6 space-y-4 bg-zinc-950 pb-20" id="projects">
//       <h2 className="text-red-500 text-6xl font-bold text-center mt-10 mb-20">Projects</h2>
      
//       {/* Center-aligned red buttons with gap */}
//       <div className="flex justify-center flex-wrap gap-6 mb-8">
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => {
//               setSelectedCategory(category);
//               setDisplayLimit(6); // Reset display limit when category changes
//               setShowAll(false); // Reset show all when category changes
//             }}
//             className={`px-6 py-2 rounded ${
//               selectedCategory === category
//                 ? "bg-red-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {projectsToShow.map(project => (
//           <div key={project.id} className="p-6 border rounded shadow mt-14">
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={400}
//               height={200}
//               className="rounded mb-2"
//             />
//             <h3 className="text-xl font-semibold">{project.title}</h3>
//             <p className="text-gray-500">Category: {project.category}</p>
//           </div>
//         ))}
//       </div>

//       {/* Show More / Show Less Button */}
//       {filteredProjects.length > displayLimit && (
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={handleShowMoreLess}
//             className="px-10 py-4 bg-red-500 text-white rounded-full mt-10"
//           >
//             {showAll ? "Show Less" : "Show More"}
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProjectSection;





"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Import images from src/assets folder
import htmlProject1 from "../assets/html-project1.jpg";
import htmlProject2 from "../assets/js-project1.jpg";
import htmlProject3 from "../assets/nextjs-project1.jpg";
import javaScript1 from "../assets/react-project1.jpg";
import javaScript2 from "../assets/php-project1.jpg";
import typeScript1 from "../assets/html-project2.jpg";
import typeScript2 from "../assets/html-project3.jpg";
import typeScript3 from "../assets/html-project4.jpg";
import typeScript4 from "../assets/html-project5.jpg";
import htmlProject6 from "../assets/html-project6.jpg";
import htmlProject7 from "../assets/html-project7.jpg";
import htmlProject8 from "../assets/html-project8.jpg";
import htmlProject9 from "../assets/html-project9.jpg";
import htmlProject0 from "../assets/html-project0.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData; // Specify StaticImageData type for images
}

const projects: Project[] = [
  { id: 1, title: "HTML Project 1", category: "HTML", image: htmlProject1 },
  { id: 2, title: "JavaScript Project 1", category: "HTML", image: htmlProject2 },
  { id: 3, title: "Next.js Project 1", category: "HTML", image: htmlProject3 },
  { id: 4, title: "React Project 1", category: "JavaScript", image: javaScript1 },
  { id: 5, title: "PHP Project 1", category: "JavaScript", image: javaScript2 },
  { id: 6, title: "HTML Project 2", category: "TypeScript", image: typeScript1 },
  { id: 7, title: "HTML Project 3", category: "TypeScript", image: typeScript2 },
  { id: 8, title: "HTML Project 4", category: "TypeScript", image: typeScript3 },
  { id: 9, title: "HTML Project 5", category: "TypeScript", image: typeScript4 },
  { id: 10, title: "JavaScript Project 2", category: "JavaScript", image: htmlProject6 },
  { id: 11, title: "JavaScript Project 3", category: "JavaScript", image: htmlProject7 },
  { id: 12, title: "React Project 2", category: "React", image: htmlProject8 },
  { id: 13, title: "Next.js Project 2", category: "Next.js", image: htmlProject9 },
  { id: 14, title: "Next.js Project 3", category: "Next.js", image: htmlProject0 },
];

const categories = ["All", "HTML", "JavaScript", "Next.js", "React", "TypeScript"];

const ProjectSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [displayLimit, setDisplayLimit] = useState<number>(6);
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, displayLimit);

  const handleShowMoreLess = () => {
    setShowAll(!showAll); // Toggle between showing all and limited projects
  };

  return (
    <section className="p-6 space-y-4 bg-zinc-950 pb-20" id="projects">
      <h2 className="text-red-500 text-6xl font-bold text-center mt-10 mb-20">Projects</h2>
      
      {/* Center-aligned red buttons with gap */}
      <div className="flex justify-center flex-wrap gap-6 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setDisplayLimit(6); // Reset display limit when category changes
              setShowAll(false); // Reset show all when category changes
            }}
            className={`px-6 py-2 rounded ${
              selectedCategory === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectsToShow.map(project => (
          <div key={project.id} className="p-6 border rounded shadow mt-14">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="rounded mb-2"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-500">Category: {project.category}</p>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {filteredProjects.length > displayLimit && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMoreLess}
            className="px-10 py-4 bg-red-500 text-white rounded-full mt-10"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
