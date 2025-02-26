import React from "react";

interface LoadingButtonProps {
  disabled?: boolean;
}

function LoadingButton({ disabled = true }: LoadingButtonProps) {
  return (
    <button
      disabled={disabled}
      type="button"
      className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
    font-medium rounded-lg text-sm px-8 py-3 text-center disabled:bg-blue-400 disabled:cursor-not-allowed"
    >
      <div className="w-4 h-4 border-4 border-white border-t-transparent rounded-full animate-spin mx-3"></div>
    </button>
  );
}

export default LoadingButton;
