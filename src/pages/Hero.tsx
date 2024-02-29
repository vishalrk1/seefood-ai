import Navbar from "../components/navbar/Navbar";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-between w-full">
      <Navbar />
      <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-[1.15] text-gray-800 sm:text-6xl text-center">
        {`Snap, Cook, Savor! With`}
        <br className="max-md:hidden" />
        <span className="font-black bg-gradient-to-r from-violet-700 to-purple-400 bg-clip-text text-transparent">{`OpenAI GPT-3`}</span>
      </h1>

      <h2 className="mt-5 text-base md:text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
        {`Capture, Classify, Cook with`}{" "}
        <span className="font-black bg-gradient-to-r from-violet-700 to-purple-400 bg-clip-text text-transparent text-base">{`SeeFood`}</span>
        {". "}
        {`Our app identifies food images and delivers matching recipes instantly.`}
      </h2>
    </header>
  );
};

export default Hero;
