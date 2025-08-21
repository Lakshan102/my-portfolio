"use client";
import React, { useEffect } from "react";
import git from "../../../public/images/git.png";
import linkedin from "../../../public/images/linkedin.png";
import Link from "next/link";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";

const EmailSection = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Portfolio`);
  }, [userName, setValue]);

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };
  return (
    <section className="py-8 sm:py-12 lg:py-16 relative" id="contact">
      <div className="bg-[radial-gradient(ellipse_at_center,_#6b21a8c9,_transparent)] rounded-full h-60 w-60 sm:h-80 sm:w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Contact Info Section */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
              <Image
                src="/images/portfolio_logo.png"
                alt="Contact Image"
                width={150}
                height={150}
              // className="sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Let's Connect
            </h2>

            <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              I'm currently looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </p>

            <div className="socials flex justify-center lg:justify-start gap-4">
              <Link href="https://github.com/Lakshan102" className="touch-target hover:scale-110 transition-transform duration-300">
                <Image src={git} alt="github" width={45} height={45} className="sm:w-[50px] sm:h-[50px]" />
              </Link>
              <Link href="https://www.linkedin.com/in/kavindu-lakshan-b29091287/" className="touch-target hover:scale-110 transition-transform duration-300">
                <Image src={linkedin} alt="linkedin" width={45} height={45} className="sm:w-[50px] sm:h-[50px]" />
              </Link>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            {!isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 sm:space-y-6">
                <input
                  type="hidden"
                  value={process.env.NEXT_PUBLIC_ACCESS_KEY}
                  {...register("access_key")}
                />
                <input type="hidden" {...register("subject")} />
                <input
                  type="hidden"
                  value="Someone Contact You"
                  {...register("from_name")}
                />

                <div>
                  <label
                    htmlFor="name"
                    className="text-white block mb-2 text-sm sm:text-base font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    autoComplete="false"
                    className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm sm:text-base rounded-lg block w-full p-3 sm:p-4 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.name
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-indigo-600"
                      }`}
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                  />
                  {errors.name && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.name.message}</small>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email_address"
                    className="text-white block mb-2 text-sm sm:text-base font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    id="email_address"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="false"
                    className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm sm:text-base rounded-lg block w-full p-3 sm:p-4 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.email
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-indigo-600"
                      }`}
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.email.message}</small>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-white block mb-2 text-sm sm:text-base font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm sm:text-base rounded-lg block w-full p-3 sm:p-4 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-indigo-600"
                      }`}
                    {...register("message", { required: "Enter your Message" })}
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.message.message}</small>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="touch-target bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 sm:py-4 px-5 sm:px-6 rounded-lg w-full transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}

            {/* Success Message */}
            {isSubmitSuccessful && isSuccess && (
              <div className="flex flex-col items-center justify-center text-center bg-green-50 rounded-lg p-6 sm:p-8">
                <svg
                  width="80"
                  height="80"
                  className="text-green-500 mb-4"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="text-xl sm:text-2xl text-green-600 font-semibold mb-2">Success!</h3>
                <p className="text-gray-700 mb-4">{Message}</p>
                <button
                  className="touch-target text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                  onClick={() => reset()}
                >
                  Send Another Message
                </button>
              </div>
            )}

            {/* Error Message */}
            {isSubmitSuccessful && !isSuccess && (
              <div className="flex flex-col items-center justify-center text-center bg-red-50 rounded-lg p-6 sm:p-8">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 97 97"
                  className="text-red-500 mb-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                    stroke="CurrentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="text-xl sm:text-2xl text-red-600 font-semibold mb-2">
                  Something went wrong!
                </h3>
                <p className="text-gray-700 mb-4">{Message}</p>
                <button
                  className="touch-target text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                  onClick={() => reset()}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
