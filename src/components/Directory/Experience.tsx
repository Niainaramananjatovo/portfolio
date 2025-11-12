import { useRef, useState } from "react";
import CardXp from "../Experience/CardXp";

interface ExperienceProps {
  onCloseMenu: () => void;
}

type Projet = {
  nom: string;
  stack: string[];
  description: string;
};

export default function Experience({ onCloseMenu }: ExperienceProps) {
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

  const lists: Projet[] = [
    {
      nom: "Développement d' une ERP ",
      stack: ["React JS", "Laravel", "PostgresQL"],
      description: "Dans le cadre du developpement d;une application ERP complete, j'ai participe a la conception et a l'integration de l'interface utilisateur a partir des Templates et Frames sur Figma.",
    },
    {
      nom: "Application de sondage ",
      stack: ["PHP", "Laravel", "MySQL", "JS", "JQuery"],
      description: "Dans le developpement d'une application de sondage pour une entreprise, j'ai contribue en tant que developpeur fullstack Laravel, en travaillant a la fois sur le Front-End et le Back-End. J'ai concu et implemente une interface utilisateur dynamique et intuitive.",
    },
  ];
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
      className="bg-white rounded-2xl p-3 absolute cursor-grab overflow-y-auto flex items-center justify-start w-3/4 lg:w-1/3 md:w-1/2 sm:w-full"
    >
      <header className="border-b-1 mb-2 flex flex-row justify-between w-full px-2">
        <h1 className="text-3xl font-semibold p-2"> Mes Projets </h1>
        <button
          onClick={() => {
            onCloseMenu();
          }}
        >
          {" "}
          X{" "}
        </button>
      </header>
      <div className="flex flex-col items-center justify-center w-full gap-2">
       {
        lists.map(projet => 
            <CardXp projet={projet} />
        )
       }
      </div>
    </div>
  );
}
