import React from "react";

export const Select = ({ children, ...props }) => {
  return (
    <select className="border rounded p-2 w-full" {...props}>
      {children}
    </select>
  );
};

export const SelectTrigger = ({ children, ...props }) => {
  return (
    <div className="border rounded px-2 py-1 bg-white" {...props}>
      {children}
    </div>
  );
};

export const SelectValue = ({ children }) => {
  return <span>{children}</span>;
};

export const SelectContent = ({ children }) => {
  return <div className="mt-1">{children}</div>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
