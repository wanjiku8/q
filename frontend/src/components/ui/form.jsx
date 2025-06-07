import React from "react";

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const FormField = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const FormItem = ({ children }) => {
  return <div className="mb-2">{children}</div>;
};

export const FormLabel = ({ children }) => {
  return <label className="block font-medium mb-1">{children}</label>;
};

export const FormControl = ({ children }) => {
  return <div>{children}</div>;
};

export const FormMessage = ({ children }) => {
  return <p className="text-red-500 text-sm mt-1">{children}</p>;
};
