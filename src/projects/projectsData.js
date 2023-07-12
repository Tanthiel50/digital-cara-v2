import projectOne from "../assets/laurentius.png";
import projectTwo from "../assets/digital-cara-back.png";
import projectThree from "../assets/hangman.png";

const projects = {
  1: {
    title: "Laurentius",
    image: projectOne,
    description: (
      <>
        <p>
          Demande d'un site one page qui pourrait mettre en évidence les compétences et la recherche d'une alternance. Le style devait refléter le thème "data".
        </p>
      </>
    ),
    github: "https://github.com/Tanthiel50/laurentius",
    demo: "http://laurentius.cloud/",
  },
  2: {
    title: "Digital Cara avec back",
    image: projectTwo,
    description: (
      <>
        <p>
          Le projet initial proposé par Believemy était de faire une blog où il serait possible de publier des articles de blog et des projets via un dashboard. Les utilisateurs devaient également être en mesure de poster et gérer les commentaires via leur dashbord.
        </p>
      </>
    ),
    github: "https://github.com/Tanthiel50/digital-cara",
    demo: "https://github.com/Tanthiel50/digital-cara",
  },
  3: {
    title: "The Hangman",
    image: projectThree,
    description: (
      <>
        <p>
          Projet fait dans le cadre de la formation Believemy, où il s'agissait de créer un jeu de pendu. La création était libre, j'ai donc décidé de m'éloigner du thème classique du pendu. Le pendu est donc Doc pendu aux aiguilles d'une horloge et le thème du pendu est donc sur l'univers cinématographique.
        </p>
      </>
    ),
    github: "https://github.com/Tanthiel50/Hangman",
    demo: "https://tanthiel50.github.io/Hangman/",
  },
};

export default projects;
