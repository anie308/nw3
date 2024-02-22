"use client";

import React from "react";

type TooltipProps = {
  children: React.ReactNode;
  content: string;
  title: string;
};

type ToolComp = {
  text: string;
  content: string;
  title: string;
  attr: string;
};

const Tooltip = ({ children, content, title }: TooltipProps) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div
      className="relative inline-block    transition-all duration-300 ease-in-out"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute hidden lg:flex bg-black text-white z-30 bottom-[50px] rounded-md w-[200px]  lg:flex-col items-start p-[15px] border">
          <p className=" text-[20px]">{title}</p>
          <p className="text-[15px] text-start mt-[5px] z-30">{content}</p>
        </div>
      )}
    </div>
  );
};

function TooltipComponent({ text, content, title, attr }: ToolComp) {
  return (
    <>
      <Tooltip title={title} content={content}>
        <span className={`${attr} cursor-pointer mx-[5px] z-10`}>{text}</span>
      </Tooltip>
    </>
  );
}

export default TooltipComponent;
