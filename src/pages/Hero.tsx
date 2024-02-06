import Navbar from "../components/navbar/Navbar";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-between w-full">
      <Navbar />
      <h1 className="head_text">
        {`Snap, Cook, Savor! With`}
        <br className="max-md:hidden" />
        <span className="blue_gradient">{`OpenAI GPT-3`}</span>
      </h1>

      <h2 className="desc">
        {`Capture, Classify, Cook with`}{" "}
        <span className="blue_gradient text-base">{`SeeFood`}</span>
        {". "}
        {`Our app identifies food images and delivers matching recipes instantly.`}
      </h2>
    </header>
  );
};

export default Hero;
