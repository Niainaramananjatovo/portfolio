export default function DateTime() {
  const date = new Date();
  const returnHourTime = (d: Date) => {
    const hour = d.getHours();
    const  minute = d.getMinutes();

    return (
      hour.toString().padStart(2, "0") +
      ":" +
      minute.toString().padStart(2, "0")
    );
  };

  return (
    <div className="flex rounded-2xl backdrop-blur-lg bg-white/20 p-4 text-center md:w-1/3 lg:w-1/3 text-white justify-center items-center">
      <h1 className="text-7xl font-bold"> {returnHourTime(date)} </h1>
    </div>
  );
}
