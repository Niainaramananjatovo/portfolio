import { useRef, useState } from "react";
import closed from "../../icons/cross.png";

interface ProfilProps {
  onCloseMenu: () => void;
}

type Profil = {
  nom: string;
  prenom: string;
  birthDate: Date;
  location: string;
  nationality: string;
  situtaion: "En couple" | "Célibataire" | "Marié";
  interest: string[];
};

export default function Profil({ onCloseMenu }: ProfilProps) {
  const person1: Profil = {
    nom: "RAMANANJATOVO",
    prenom: "Tianaharivola Hery Niaina",
    birthDate: new Date("10/01/2004"),
    location: "Talatamaty, Antananarivo",
    situtaion: "Célibataire",
    interest: [
      "eSport (éléctronique sport)",
      "le Sport (Football, Basketball, la natation)",
      "La découverte culturelle",
    ],
    nationality: "Malagasy",
  };

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

  const returnAge = (d: Date) => {
    const date = new Date();
    return date.getFullYear() - d.getFullYear() + " ans";
  };
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
      className="bg-white rounded-2xl p-3 absolute cursor-grab h-[620px]  overflow-y-auto flex items-center justify-start"
    >
      <header className="border-b-1 mb-2 flex flex-row items-center justify-between w-full px-2">
        <h1 className="text-3xl font-semibold p-2"> Mon profil </h1>
        <button
          onClick={() => {
            onCloseMenu();
          }}
        >
          <img src={closed} className="w-7 h-7" />
        </button>
      </header>
      <div className="bg-gray-50/80 p-3 rounded-lg flex flex-col gap-2 mt-2 mb-2 w-full">
        <h1 className="text-xl font-semibold">
          {" "}
          {person1.nom + " " + person1.prenom}{" "}
        </h1>
      </div>
      <div className="bg-gray-50/80 p-3 rounded-lg flex flex-col gap-2 mt-2 mb-2 w-full">
        <h2 className="border-b-1 p-2 w-full">
          {" "}
          Age : {returnAge(person1.birthDate)}{" "}
        </h2>
        <h2 className="border-b-1 p-2 w-full"> Adresse : {person1.location}</h2>
        <h2 className="border-b-1 p-2 w-full">
          {" "}
          Nationalité : {person1.nationality}{" "}
        </h2>
        <h2 className="p-2 w-full">
          {" "}
          Situation Matrimoniale : {person1.situtaion}{" "}
        </h2>
      </div>
      <div className="bg-gray-50/80 p-3 rounded-lg flex flex-col gap-2 mt-2 mb-2 w-full">
        <h1 className="text-xl w-full"> Centres d'Intérêt </h1>
        {person1.interest &&
          person1.interest.map((interest) => (
            <h2
              className={` p-2 w-full ${
                person1.interest[person1.interest.length - 1] !== interest
                  ? "border-b-1"
                  : ""
              }`}
              key={interest}
            >
              {" "}
              {interest}{" "}
            </h2>
          ))}
      </div>
    </div>
  );
}
