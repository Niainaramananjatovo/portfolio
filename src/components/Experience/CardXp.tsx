import { Chip } from "@heroui/react";
type Projet = {
  nom: string;
  stack: string[];
  description: string;
};

interface Cardinterface {
  projet: Projet;
}
export default function CardXp({ projet }: Cardinterface) {
  return (
    <div className="flex flex-col gap-2 w-full bg-gray-100 p-4 rounded-lg">
      <h1 className="text-lg"> {projet.nom} </h1>
      <section className="flex flex-row flex-wrap gap-3 w-full">
        {projet.stack &&
          projet.stack.map((projet, index) => (
            <Chip
              size="md"
              color="primary"
              variant="solid"
              className="text-white bg-black/90 rounded-full w-fit"
              key={index}
            >
              {projet}
            </Chip>
          ))}
      </section>
      <p className="text-sm">{projet.description}</p>
    </div>
  );
}
