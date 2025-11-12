import { MapPinIcon } from "@heroicons/react/16/solid";

export default function Weather(){
    return <div className="text-white rounded-2xl backdrop-blur-lg bg-white/20 p-4 text-center md:w-1/3 lg:1/3 justify-self-end">
       <h1 className="text-6xl font-bold">15°C</h1>
       <span className="flex flex-row items-center justify-center mt-1 mr-1">
            <MapPinIcon className="w-5 h-5"/>
         Séoul, Corée du Sud </span>
    </div>
}