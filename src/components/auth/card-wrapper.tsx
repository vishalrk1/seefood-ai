import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";
import { Socials } from "./socials";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLbel: string;
  backButtonHref: string;
  showSocials?: boolean;
  showHeader?: boolean;
  googlClick?: () => void;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLbel,
  backButtonHref,
  showSocials = false,
  showHeader = true,
  googlClick
}: CardWrapperProps) => {
  return (
    <Card className="w-[300px] md:w-[400px] shadow-md pt-4">
      {showHeader && (
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials googlClick={googlClick}/>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLbel} />
      </CardFooter>
    </Card>
  );
};
