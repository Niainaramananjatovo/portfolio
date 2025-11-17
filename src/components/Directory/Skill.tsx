import closed from "../../icons/cross.png";
import { useRef, useState } from "react";

interface SkillProps {
  onCloseMenu: () => void;
}

// front-end
import icon1 from "../../icons/skills/html.png";
import icon2 from "../../icons/skills/js.png";
import icon3 from "../../icons/skills/atom.png";
import icon4 from "../../icons/skills/text.png";
import icon5 from "../../icons/skills/typescript.png";

// back-end
import icon6 from "../../icons/skills/php.png";
import icon7 from "../../icons/skills/programing.png";
import icon15 from "../../icons/skills/Laravel.png";

// database
import icon8 from "../../icons/skills/database.png";
import icon9 from "../../icons/skills/mysql.png";

// langues
import icon10 from "../../icons/skills/madagascar.png";
import icon11 from "../../icons/skills/france.png";
import icon12 from "../../icons/skills/allemagne.png";
import icon13 from "../../icons/skills/royaume-uni.png";
// import icon14 from "../../icons/skills/japon.png";

type Skill = {
  url: string;
  nom: string;
  niveau?: string;
};
export default function Skill({ onCloseMenu }: SkillProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    x: 5,
    y: 30,
  });
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });
  const [dragging, setDragging] = useState(false);
  const frontEnd: Skill[] = [
    {
      url: icon1,
      nom: "HTML5",
    },
    {
      url: icon4,
      nom: "CSS3",
    },
    {
      url: icon2,
      nom: "Javascript",
    },
    {
      url: icon5,
      nom: "Typescript",
    },
    {
      url: icon3,
      nom: "React.js",
    },
  ];

  const backEnd: Skill[] = [
    {
      url: icon6,
      nom: "PHP",
    },
    {
      url: icon7,
      nom: "Express.js",
    },
    {
      url: icon15,
      nom: "Laravel",
    },
  ];
  const database: Skill[] = [
    {
      url: icon9,
      nom: "MySQL",
    },
    {
      url: icon8,
      nom: "PostgresQL",
    },
  ];
  const langues: Skill[] = [
    {
      url: icon10,
      nom: "Malagasy",
      niveau: "natif",
    },
    {
      url: icon13,
      nom: "Anglais",
      niveau: "C2",
    },
    {
      url: icon11,
      nom: "French",
      niveau: "B1",
    },
    {
      url: icon12,
      nom: "Allemand",
      niveau: "A2",
    },

    // {
    //   url: icon14,
    //   nom: "Japonais",
    //   niveau: "JLTP5",
    // },
  ];
  const onMouseDown = (e: React.MouseEvent) => {
    if (!divRef.current) return;
    setDragging(true);
    setOffset({
      x: e.clientX - divRef.current.getBoundingClientRect().left,
      y: e.clientY - divRef.current.getBoundingClientRect().top,
    });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const onMouseUp = () => setDragging(false);
  return (
    <div
      ref={divRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        left: position.x,
        top: position.y,
      }}
      className="bg-white rounded-2xl absolute cursor-grab overflow-y-auto flex items-center justify-start lg:w-1/2 h-[500px] md:h-[500px] lg:h-[600px] w-3/4 md:w-2/3 sm:w-2/3"
    >
      <header className="border-b-1 mb-2 flex flex-row items-center justify-between w-full px-2">
        <h1 className="text-3xl font-semibold p-2 font-[Montserrat]"> Mes compétences </h1>
        <button
          onClick={() => {
            onCloseMenu();
          }}
        >
          <img src={closed} className="w-7 h-7" />
        </button>
      </header>
      <div className="bg-gray-50/80 p-3 w-full flex flex-col gap-2 mt-2 mb-2">
        <h1 className="text-xl font-semibold">
          Junior Fullstack Web developer{" "}
        </h1>
      </div>
      <div
        className="lg:grid lg:grid-col-1 md:grid grid-col-1 w-full overflow-y-auto h-[500px]"
        style={{
          scrollbarWidth: "thin", 
          scrollbarColor: '#94a3b8'
        }}
      >
        <div className="bg-gray-50/80 p-3 flex flex-col gap-2 mt-1 mb-1 w-full">
          <h1 className="text-xl w-full"> Front-End </h1>
          <div className="flex flex-wrap gap-4">
            {frontEnd.map((skill) => (
              <img
                src={skill.url}
                key={skill.nom}
                title={skill.nom}
                className="w-10 h-10 rounded"
              />
            ))}
          </div>
        </div>
        <div className="bg-gray-50/80 p-3  flex flex-col gap-2 mt-1 mb-1 w-full">
          <h1 className="text-xl w-full"> Back-End </h1>
          <div className="flex flex-wrap gap-4">
            {backEnd.map((skill) => (
              <img
                src={skill.url}
                key={skill.nom}
                title={skill.nom}
                className="w-10 h-10 rounded"
              />
            ))}
          </div>
        </div>
        <div className="bg-gray-50/80 p-3 flex flex-col gap-2 mt-1 mb-1 w-full">
          <h1 className="text-xl w-full"> Base de données </h1>
          <div className="flex flex-wrap gap-4">
            {database.map((skill) => (
              <img
                src={skill.url}
                key={skill.nom}
                title={skill.nom}
                className="w-10 h-10 rounded"
              />
            ))}
          </div>
        </div>
        <div className="bg-gray-50/80 p-3 flex flex-col gap-2 mt-1 mb-1 w-full">
          <h1 className="text-xl w-full"> Langues </h1>
          <div className="flex flex-wrap gap-4">
            {langues.map((skill) => (
              <img
                src={skill.url}
                key={skill.nom}
                title={skill.nom + " - " + skill.niveau}
                className="w-10 h-10 rounded"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
