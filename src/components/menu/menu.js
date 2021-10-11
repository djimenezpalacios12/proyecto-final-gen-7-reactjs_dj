import TheatersIcon from "@material-ui/icons/Theaters";
import Search from "@material-ui/icons/Search";

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
    menu: "Buscador",
    icon: <Search />,
    ruta: "/buscador",
  },
];

export default listMenu;
