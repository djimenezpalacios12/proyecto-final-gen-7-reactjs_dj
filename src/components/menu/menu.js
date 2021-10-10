import TheatersIcon from "@material-ui/icons/Theaters";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import VideocamIcon from "@material-ui/icons/Videocam";

// Menú
const listMenu = [
  {
    id: 1,
    menu: "Cartelera",
    icon: <TheatersIcon />,
    ruta: "/cartelera",
  },
  {
    id: 2,
    menu: "Populares",
    icon: <VideocamIcon />,
    ruta: "/populares",
  },
  {
    id: 3,
    menu: "drama",
    icon: <PeopleAltIcon />,
    ruta: "/drama",
  },
];

export default listMenu;
