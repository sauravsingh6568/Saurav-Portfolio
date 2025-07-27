import GradientSpheres from "../components/GradientSpheres";
// import TestimonialCard from "../components/TestimonialCard";
import TitleHeader from "../components/TitleHeader";
// import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="testimonial-gradient-sphere testimonial-sphere-1"
        sphere2Class="testimonial-gradient-sphere testimonial-sphere-2"
      />

      <div className="w-full h-full container relative z-10 md:my-40 my-20">
        <TitleHeader
          title="TESTIMONIALS"
          number="03"
          text="Watch what our clients are saying about us"
        />

        {/* Placeholder Message */}
        <div className="mt-16 flex justify-center items-center px-4">
          <div className="gradient-border p-6 sm:p-8 rounded-2xl text-center max-w-xl w-full">
            <p className="text-white text-base sm:text-lg font-medium italic leading-relaxed">
              I’m currently building my client base.{" "}
              <br className="hidden sm:block" />
              <span className="text-pink-500">
                Be the first to work with me and get featured here with your
                honest feedback! 🚀
              </span>
            </p>
          </div>
        </div>

        {/* Future Testimonials */}
        {/* 
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div> 
        */}
      </div>
    </section>
  );
};

export default Testimonials;
