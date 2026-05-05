import { useNavigate } from "react-router-dom";

const LessonCard = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Title (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center p-4">
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default LessonCard;
