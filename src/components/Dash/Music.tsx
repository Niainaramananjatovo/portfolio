import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/20/solid";
import cover from "../../images/vlcsnap-2025-11-07-15h42m21s797.png";
import music1 from "../../audio/Moon Music - Album by Coldplay - Apple Music.m4a";
import music2 from "../../audio/Moon Music - Album by Coldplay - Apple Music_2.m4a";
import music3 from "../../audio/yung kai - blue (Official Music Video).mp3"; 
import music4 from "../../audio/Lifehouse - Blind.mp3";
import music5 from "../../audio/Joji - Sanctuary (Official Video).mp3";


// pochette 
import pochette1 from "../../images/pochette/ab67616d0000b273f733e50079838090eebc3fe4.jpeg";
import pochette2 from "../../images/pochette/images.jpeg";
import pochette3 from "../../images/pochette/o6539ekg0sj51.jpg"; 

import { useRef, useState } from "react";

type Music = {
  artist: string;
  title: string;
  cover?: string;
  url?: string;
};

export default function Music() {
  const lists: Music[] = [
    {
      artist: "Yung Kai",
      title: "Blue",
      url: music3,
      cover: pochette2,
    },
    {
      artist: "Joji",
      title: "Sanctuary",
      url: music5,
      cover: pochette1,
    },
    {
      artist: "Lifehouse",
      title: "Blind",
      url: music4,
      cover: pochette3,
    },
    {
      artist: "Coldplay",
      title: "Feelslikefallinginlove",
      url: music1,
      cover: cover,
    },
    {
      artist: "Coldplay",
      title: "All my love",
      url: music2,
      cover: cover,
    },
  ];

  const [currentTrack, setCurrentTrack] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const TogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextPlay = () => {
    const audio = audioRef.current;
    audio?.pause();
    if (currentTrack + 1 > lists.length - 1) {
      setCurrentTrack(0);
    } else {
      setCurrentTrack(currentTrack + 1);
    }
    audio?.play();
  };

  const previousPlay = () => {
    const audio = audioRef.current;
    if (currentTrack - 1 < 0) {
      setCurrentTrack(lists.length - 1);
    } else {
      setCurrentTrack(currentTrack - 1);
    }
    audio?.play();
  };
  return (
    <div className="rounded-2xl bg-white/20 p-1 text-white text-center w-full flex-row flex items-center gap-3 mt-1 mb-2 backdrop-blur-md sm:hidden md:hidden lg:hidden">
      <div className="w-1/4 lg:w-full">
        <img src={lists[currentTrack].cover} alt="cover page" className="rounded-2xl lg:rounded-br-none " />
      </div>
      <div className="flex items-center justify-center flex-col gap-2 w-3/4">
        <div className="flex items-center justify-center flex-col">
          <h3 className="font-semibold text-lg">
            {" "}
            {lists[currentTrack].title}{" "}
          </h3>
          <span className="text-md"> {lists[currentTrack].artist} </span>
          <audio src={lists[currentTrack].url} ref={audioRef}></audio>
        </div>
        <div className="flex flex-row items-center justify-between gap-3">
          <BackwardIcon
            className="w-7 h-7"
            onClick={() => {
              previousPlay();
            }}
          />
          {isPlaying == false ? (
            <PlayIcon
              className=" w-7 h-7 cursor-pointer"
              onClick={() => {
                TogglePlay();
              }}
            />
          ) : (
            <PauseIcon
              className="text-black w-7 h-7 cursor-pointer"
              onClick={() => {
                TogglePlay();
              }}
            />
          )}
          <ForwardIcon
            className="w-7 h-7"
            onClick={() => {
              nextPlay();
            }}
          />
        </div>
      </div>
    </div>
  );
}
