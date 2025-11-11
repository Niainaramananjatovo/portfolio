import React, { useRef, useState } from "react";
import Facebook from "../../icons/facebook.png";
import LinkedIn from "../../icons/linkedin.png";
import GitHub from "../../icons/github.png";
import Gmail from "../../icons/gmail.png";
import Tel from "../../icons/silhouette-de-poignee-de-telephone.png"; 

interface ContactProps {
  onCloseMenu : ()=> void
}
type Contact = {
  plateform: string;
  value: string | number;
  url?: string;
};

export default function Contact({onCloseMenu} : ContactProps) {
  const list: Contact[] = [
    {
      plateform: "Git",
      value: "Niainaramananjatovo@github.com",
      url: GitHub,
    },
    {
      plateform: "Gmail",
      value: "ramananjatovoheriniaina@gmail.com",
      url: Gmail,
    },
    {
      plateform: "LinkedIn",
      value: "Ramananjatovo Niaina",
      url: LinkedIn,
    },
    {
      plateform: "Tel",
      value: "(+261) 33 68 969 01",
      url: Tel,
    },
    {
      plateform: "Tel",
      value: "(+261) 34 29 349 05",
      url: Tel,
    },
    {
      plateform: "Facebook",
      value: "Hery Niaina",
      url: Facebook,
    },
  ];

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
      className="bg-white rounded-2xl p-3 absolute cursor-grab"
    >
      <header className="border-b-1 mb-2 flex flex-row justify-between w-full px-2">
        <h1 className="text-3xl font-semibold p-2"> Contacts </h1> 
        <button  onClick={() => {
          onCloseMenu()
        }}> X </button>
      </header>
      {list.map((contact) => (
        <section
          className="flex flex-row gap-3 items-center hover:bg-gray-100 p-3 rounded w-full"
          key={contact.plateform + contact.value}
        >
          <img src={contact.url} className="w-7 h-7" />
          {/* <span className="font-semibold"> {contact.plateform} </span> */}
          <h1> {contact.value} </h1>
        </section>
      ))}
    </div>
  );
}
