import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import listMenu from "./menu";
import MovieIcon from "@material-ui/icons/Movie";
import "./styles.css";
// React
import { getLoading } from "../../actions/index";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    marginBottom: 70,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const loadingState = useSelector(getLoading);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menú
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {listMenu.map((menu) => (
          <div key={menu.id}>
            <Link to={menu.ruta} className="text-secondary textLink">
              <ListItem button key={menu.id}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.menu} />
              </ListItem>
            </Link>
          </div>
        ))}
      </List>
      <Divider />
      <Link to="/estadisticas" className="text-secondary">
        <ListItem button key={1}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Estadisticas"} />
        </ListItem>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="back-color">
          {/* Estado de carga */}
          {loadingState ? (
            <div className="fixed-top">
              <LinearProgress />
            </div>
          ) : null}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className="textLink text-white">
            <Typography variant="h6" noWrap>
              <MovieIcon className="pb-1" />
              Portal Películas
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: propTypes.func,
};

export default ResponsiveDrawer;
