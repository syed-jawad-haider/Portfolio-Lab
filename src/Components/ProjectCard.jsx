import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ProjectCard = ({ project }) => {
  const { title, description, image, githubLink } = project;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: title });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-lg shadow-lg cursor-pointer dark:bg-gray-900"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
