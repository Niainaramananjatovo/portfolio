import { useRef, useState } from "react";

interface SkillProps {
  onCloseMenu: () => void;
}
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
      className="bg-white rounded-2xl p-3 absolute cursor-grab overflow-y-auto flex items-center justify-start lg:w-1/2 h-[500px] md:h-[500px] lg:h-[600px] w-[300px] md:w-1/2 sm:w-1/2"
    >
      <header className="border-b-1 mb-2 flex flex-row justify-between w-full px-2">
        <h1 className="text-3xl font-semibold p-2"> Compétences </h1>
        <button
          onClick={() => {
            onCloseMenu();
          }}
        >
          {" "}
          X{" "}
        </button>
      </header>
      <div className="bg-gray-50 p-3 rounded-lg w-full flex flex-col gap-2 mt-2 mb-2">
        <h1 className="text-xl font-semibold">
          Junior FullStack Web developer{" "}
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-2  md:grid grid-col-1 gap-2 w-full overflow-y-auto h-[500px]">
        <div className="bg-gray-50 p-3 rounded-lg flex flex-col gap-2 mt-2 mb-2 w-full">
          <h1 className="text-xl w-full"> Front-End </h1>
          <h2> HTML & CSS </h2>
          <h2> Javascript </h2> 
          <h2> Typescript </h2>
          <h2> Tailwindcss + Material UI </h2>
          <h2> Bootstrap </h2>
          <h2> React.js </h2>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg flex flex-col gap-2 mt-2 mb-2 w-full">
          <h1 className="text-xl w-full"> Back-End </h1>
          <h2> PHP </h2>
          <h2> Laravel </h2>
          <h2> Node.js </h2>
          <h2> Express.js </h2>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg flex flex-col gap-2 mt-2 mb-2 w-full">
          <h1 className="text-xl w-full"> Base de données </h1>
          <h2> MySQL </h2>
          <h2> PostgresQL </h2>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg flex flex-col gap-2 mt-2 mb-2 w-full">
          <h1 className="text-xl w-full"> Langues </h1>
          <h2> Malagasy (natif)  </h2> 
          <h2> Français </h2>
          <h2> Anglais </h2>
          <h2> Allemand </h2>
          <h2> Japonais </h2>
        </div>
      </div>
    </div>
  );
}
