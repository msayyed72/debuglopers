
import React from "react";
import { motion } from "framer-motion";
import { ViewMode, categories, viewModes } from "./ProjectData";

type ProjectFiltersProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  rotateSpeed: number;
  setRotateSpeed: (speed: number) => void;
};

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeCategory,
  setActiveCategory,
  viewMode,
  setViewMode,
  rotateSpeed,
  setRotateSpeed,
}) => {
  return (
    <>
      {/* View mode toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center gap-4 mb-8"
      >
        {viewModes.map((mode) => {
          const IconComponent = mode.icon;
          return (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id as ViewMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                viewMode === mode.id
                  ? "bg-neon text-jet font-medium"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <IconComponent size={16} />
              <span>{mode.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Category filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category
                ? "bg-neon text-jet font-medium"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* 3D Controls */}
      {viewMode === "3d" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-6 flex justify-center"
        >
          <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-300 mr-2">Rotation:</span>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={rotateSpeed}
                onChange={(e) => setRotateSpeed(parseFloat(e.target.value))}
                className="w-24 accent-neon"
              />
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="text-sm text-gray-300">Use arrow keys to navigate categories</div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectFilters;
