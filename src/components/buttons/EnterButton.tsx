import React from "react";

const EnterButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
      title="Summarize Article"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M19.3 0a.7.7 0 0 1 .7.7v8.278a6.7 6.7 0 0 1-6.699 6.698l-10.996-.001l3.131 3.13a.7.7 0 0 1-.99.99l-4.24-4.241a.7.7 0 0 1 0-.99l4.241-4.241a.7.7 0 1 1 .99.99l-2.965 2.963h10.83A5.299 5.299 0 0 0 18.6 8.978V.7a.7.7 0 0 1 .7-.7Z"
        />
      </svg>
    </button>
  );
};

export default EnterButton;
