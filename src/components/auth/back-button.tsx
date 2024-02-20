import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, label }) => {
  return (
    <Button variant="link" className="font-normal w-full">
      <Link to={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;