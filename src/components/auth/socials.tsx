import { Button } from "../ui/button";

import { FcGoogle } from "react-icons/fc";

interface SocialsProps {
  googlClick?: () => void;
}

export const Socials: React.FC<SocialsProps> = ({
  googlClick
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-x-2">
      <Button size={"lg"} className="w-full" variant={"outline"} onClick={googlClick}>
        <FcGoogle size={20}/>
      </Button>
    </div>
  );
};