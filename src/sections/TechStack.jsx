import image1 from "../../public/assets/html.png";
import image2 from "../../public/assets/css.webp";
import image3 from "../../public/assets/javascript.png";
import image4 from "../../public/assets/react.svg";
import image5 from "../../public/assets/nodejs.png";
import image6 from "../../public/assets/express.png";
import image7 from "../../public/assets/mongodb.png";

const technologies = [
  { name: 'HTML', image: image1 },
  { name: 'CSS', image: image2 },
  { name: 'JavaScript', image: image3 },  
  { name: 'React', image: image4 },
  { name: 'Nodejs', image: image5 },
  { name: 'Express', image: image6 },
  { name: 'MongoDB', image: image7 },
];

const TechStack = () => {// Use percentage for responsiveness

  return (
    <div className="relative w-full pt-[100%]  rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {technologies.map((tech, index) => {
          const angle = ((Math.PI * 2) / technologies.length) * index - Math.PI / 2;
          const x = `${50 + 35 * Math.cos(angle)}%`;
          const y = `${50 + 35 * Math.sin(angle)}%`;

          return (
            <div
              key={tech.name}
              className="absolute w-[14%] h-[14%] flex items-center justify-center"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img 
                src={tech.image} 
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;