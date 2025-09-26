import React from "react";
import AnimationUp from "../Animations/AnimationUp";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center mb-16">
      <AnimationUp>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      </AnimationUp>
      <AnimationUp transition={{delay:0.1}}>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      </AnimationUp>
    </div>
  );
};

export default SectionHeader;
