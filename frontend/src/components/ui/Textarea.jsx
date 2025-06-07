// src/components/ui/textarea.jsx
import React from "react";

export const Textarea = React.forwardRef(({ ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
