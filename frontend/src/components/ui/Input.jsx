// src/components/ui/input.jsx
import React from "react";

export const Input = React.forwardRef(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
});

Input.displayName = "Input";
