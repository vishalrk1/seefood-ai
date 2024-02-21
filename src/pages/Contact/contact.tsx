import { CardWrapper } from "@/components/auth/card-wrapper";
import Navbar from "@/components/navbar/Navbar";
import { SucessInfo } from "@/components/sucessInfo";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const persistObj = JSON.parse(
      localStorage.getItem("persist:root") as string
    );
    const email = JSON.parse(persistObj.auth)?.user?.email;
    const name = JSON.parse(persistObj.auth)?.user?.name;

    if (email) {
      setFormData((prevState) => ({
        ...prevState,
        email: email,
        name: name
      }));
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_MAILJS_SERVICE_ID,
        import.meta.env.VITE_MAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_MAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully 😎", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          navigation("/");
        },
        (error) => {
          toast.success("Message Not sent, please try again 😔😓", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      );
  };

  return (
    <main className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
      <Navbar />
      <section className="h-screen">
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex flex-col p-4 w-max">
            <CardWrapper
              backButtonHref="/"
              backButtonLbel="Dont want to message?"
              headerLabel="Cook some crazy food with seefood"
              showSocials={false}
              showHeader={false}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mb-2 w-full font-s rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                value={formData.email}
                onChange={handleChange}
                readOnly={formData.email !== "" ? true : false}
              />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                value={formData.name}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="write your message"
                rows={4}
                className="flex w-full mt-3 items-start justify-start rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
                value={formData.message}
                onChange={handleChange}
              />
              <SucessInfo message="If you need credits mention it i'll add credits to your account" />
              <button
                className="w-full bg-black mt-3 text-white py-2.5 font-satoshi font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-0 disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={status === "loading"}
              >
                Submit
              </button>
            </CardWrapper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
