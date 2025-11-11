interface Menu {
  setSelectedMenu: (value: string) => void;
  selectedMenu: string;
}
import Call from "../icons/apple_16566077.png";
import Profile from "../icons/paragraph_13125503.png";
import Project from "../icons/Numbers_Icon_iOS_7.png";
import Skill from "../icons/microsoft_visual_studio_code_macos_bigsur_icon_189957 (1).png";
export default function NavbarMenu({ setSelectedMenu, selectedMenu }: Menu) {
  return (
    <nav className="rounded-2xl flex flex-row items-center justify-center w-full lg:w-fit  p-2 backdrop-blur-md bg-sky-200/30">
      <ul className="flex flex-inline items-center text-center justify-between text-white font-semibold gap-5 ">
        <li
          className={`hover:text-yellow-700 cursor-pointer p-1 ${
            selectedMenu == "Contacts"
              ? "bg-white/10 rounded-3xl backdrop-blur"
              : ""
          }`}
          value={"Contacts"}
          onClick={() => {
            setSelectedMenu("Contacts");
          }}
        >
          {" "}
          <img src={Call} className="w-15 h-15" title="Contact" />
        </li>
        <li
          className={`hover:text-yellow-700 cursor-pointer p-1 ${
            selectedMenu == "Profil"
              ? "bg-white/10 rounded-3xl backdrop-blur"
              : ""
          }`}
          value={"Profil"}
          onClick={() => {
            setSelectedMenu("Profil");
          }}
        >
          <img src={Profile} className="w-15 h-15" title="Profil " />
        </li>
        <li
          className={`hover:text-yellow-700 cursor-pointer p-1 ${
            selectedMenu == "Projets"
              ? "bg-white/10 rounded-3xl backdrop-blur"
              : ""
          }`}
          value={"Projets"}
          onClick={() => {
            setSelectedMenu("Projets");
          }}
        >
          <img src={Project} className="w-15 h-15" title="Projets " />
        </li>
        <li
          className={`hover:text-yellow-700 cursor-pointer p-1 ${
            selectedMenu == "Skills"
              ? "bg-white/10 rounded-3xl backdrop-blur"
              : ""
          }`}
          value={"Skills"}
          onClick={() => {
            setSelectedMenu("Skills");
          }}
        >
          <img src={Skill} className="w-18 h-18" title="Compétences" />
        </li>
      </ul>
    </nav>
  );
}
