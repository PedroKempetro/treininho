import { StaticImageData } from "next/image";

export interface PapoEstagiario {
  month: string;
  tema: string;
  image: string;
  color: string;
}

export const paposEstagiario: PapoEstagiario[] = [
  {
    month: "Abril",
    tema: "Competência Comportamental",
    image: "/abril.jpeg",
    color: "#f97316"
  },
  {
    month: "Maio",
    tema: "LinkedIn na Prática",
    image: "/maio.jpeg",
    color: "#fb923c"
  },
  {
    month: "Julho",
    tema: "Gestão de Tempo",
    image: "/julho.jpg",
    color: "#fdba74"
  },
  {
    month: "Agosto",
    tema: "Dia do Estagiário",
    image: "/agosto.jpeg",
    color: "#fed7aa"
  },
  {
    month: "Setembro",
    tema: "Conhecendo o Oceanride",
    image: "/setembro.jpeg",
    color: "#ffedd5"
  },
  {
    month: "Outubro",
    tema: "Imersão na Engenharia",
    image: "/outubro.jpeg",
    color: "#fff7ed"
  }
];
