import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import ProjectCard from "../Components/ProjectCard";

const ProjectSection = ({ initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects || []);

  useEffect(() => {
    console.log("Received initialProjects:", initialProjects);
    if (initialProjects && initialProjects.length > 0) {
      setProjects(initialProjects);
    }
  }, [initialProjects]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = projects.findIndex((p) => p.title === active.id);
    const newIndex = projects.findIndex((p) => p.title === over.id);
    setProjects(arrayMove(projects, oldIndex, newIndex));
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <p className="text-center mb-8 text-black dark:text-white ">Drag to reorder projects</p>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={projects.map((p) => p.title)} strategy={verticalListSortingStrategy}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                  <ProjectCard project={project} />
              
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
};

export default ProjectSection;
