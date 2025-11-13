import { useEffect, useState } from "react";
import DateTime from "../../components/Dash/DateTime";
import Music from "../../components/Dash/Music";
import Weather from "../../components/Dash/Weather";
import NavbarMenu from "../../components/NavbarMenu";
import wallpaper from "../../images/waves-macos-big-sur-colorful-5k-6016x6016-4992.jpg";
import Contact from "../../components/Directory/Contact";
import Profil from "../../components/Directory/Profil";
import Skill from "../../components/Directory/Skill";
import Days from "../../components/Dash/Days";
import Loading from "../laoding/Loading";
import Experience from "../../components/Directory/Experience";
export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const onCloseMenu = () => {
    setSelectedMenu("");
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading == true ? (
        <Loading />
      ) : (
        <div
          style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: "cover",
          }}
          className="h-screen md:h-screen lg:h-screen p-2 flex items-center justify-between flex-col"
        >
          {/* Gadgets for Mobile View and Desktop View */}
          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 w-full gap-1 mb-2 mt-2">
              <DateTime />
              <Weather />
            </div>
            <Music />
            <Days />
          </div>
          {selectedMenu == "Contacts" && <Contact onCloseMenu={onCloseMenu} />}
          {selectedMenu == "Profil" && <Profil onCloseMenu={onCloseMenu} />}
          {selectedMenu == "Skills" && <Skill onCloseMenu={onCloseMenu} />}
          {selectedMenu == "Projets" && (
            <Experience onCloseMenu={onCloseMenu} />
          )}
          <NavbarMenu
            setSelectedMenu={setSelectedMenu}
            selectedMenu={selectedMenu}
          />
        </div>
      )}
    </>
  );
}
