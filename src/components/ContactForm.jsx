import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_ml92j69", // e.g. service_abc123
        "template_itt1cub", // e.g. template_xyz456
        data,
        "vCUEcvdE3Dd69H0CG" // e.g. _abcdEfGhIjk
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          reset();
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex-center w-full py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl  rounded-2xl p-8 flex flex-col gap-5"
      >
        <h2 className="text-white text-2xl font-bold">Contact Me</h2>

        <div className="flex flex-col">
          <label className="text-white mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="px-4 py-2 rounded-md bg-black-100 text-white outline-none border border-gray-600"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="px-4 py-2 rounded-md bg-black-100 text-white outline-none border border-gray-600"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-1">Message</label>
          <textarea
            {...register("message", { required: true })}
            rows="4"
            className="px-4 py-2 rounded-md bg-black-100 text-white outline-none border border-gray-600"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md mt-4 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
