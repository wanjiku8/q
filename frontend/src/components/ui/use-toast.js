// src/components/ui/use-toast.js
export const useToast = () => {
  return {
    toast: ({ title, description }) => {
      alert(`${title}\n${description}`);
    },
  };
};
