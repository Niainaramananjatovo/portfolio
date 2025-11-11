export default function Days() {
  const date = new Date();
  const weekDays = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  return (
    <div>
      <h1 className="font-bold text-white text-4xl sm:text-8xl md:text-8xl lg:text-8xl font-[Montserrat]">
        {weekDays[date.getDay() - 1]}{" "}
      </h1>
      <h2 className="font-bold text-white text-xl sm:text-2xl md:text-2xl lg:text-4xl font-[Montserrat]">
        {" "}
        {date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()}{" "}
      </h2>
    </div>
  );
}
