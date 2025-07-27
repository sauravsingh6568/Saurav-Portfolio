const TechIcon = ({ icon }) => {
  return (
    <div className="flex-none md:w-32 md:h-32 w-20 h-20 bg-black-300 flex-center gradient-border marquee-item hover:-translate-y-3 transition-all duration-700">
      <img src={icon.image} alt={icon.name} className="md:size-16 size-10" />
    </div>
  );
};

export default TechIcon;
