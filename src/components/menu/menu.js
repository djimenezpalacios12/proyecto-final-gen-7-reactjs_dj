import TheatersIcon from "@material-ui/icons/Theaters";
import ChildCareIcon from "@material-ui/icons/ChildCare";
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
  {
    id: 4,
    menu: "Infantiles",
    icon: <ChildCareIcon />,
    ruta: "/infantiles",
  },
];

export default listMenu;
