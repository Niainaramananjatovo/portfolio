import Logo from "../../icons/apple-black-logo.png";
export default function Loading(){
    return <div className="w-screen h-screen bg-gray-200 flex items-center justify-center"> 
        <img src={Logo} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/8 lg:h-1/4 animate-pulse"/>
    </div>
}