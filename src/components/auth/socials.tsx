import React from "react";
import { Button } from "../ui/button";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex flex-row items-center w-full gap-x-2">
      <Button size={"lg"} className="w-full" variant={"outline"}>
        <FcGoogle size={20}/>
      </Button>
    </div>
  );
};