import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DiamondIcon from "@mui/icons-material/Diamond";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MenuIcon from "@mui/icons-material/Menu";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";

import { toggleTheme } from "../app/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      className={`w-64 h-full text-black ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-yellow-100"
      }`}
    >
      <Box
        className={`bg-red-400 text-center py-2 pt-3 cursor-pointer hover:bg-red-700 ${
          theme === "dark" ? "hover:text-white" : "hover:text-black"
        }`}
        onClick={toggleDrawer(false)}
      >
        <div className="">Close this drawer</div>
      </Box>
      <List>
        {[
          { text: "Profile", icon: <AccountCircleIcon /> },
          { text: "Account", icon: <AssignmentIcon /> },
          { text: "Orders", icon: <ReceiptIcon /> },
          { text: "Offers", icon: <LocalOfferIcon /> },
          { text: "Settings", icon: <SettingsIcon /> },
        ].map((item, index) => (
          <ListItem
            key={item.text}
            disablePadding
            className={`hover:bg-red-100 rounded-2xl ${
              theme === "dark" ? "hover:text-white" : "hover:text-black"
            }`}
            onClick={toggleDrawer(false)}
          >
            <ListItemButton>
              <ListItemIcon style={{ color: theme === "dark" ? "#fff" : "#000" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div className="px-5 pb-2 text-2xl font-bold">Categories</div>
        {[
          {
            text: "All Products",
            icon: <ProductionQuantityLimitsIcon />,
            link: "/",
          },
          {
            text: "Electronics",
            icon: <ElectricBoltIcon />,
            link: "/products/electronics",
          },
          {
            text: "Garments",
            icon: <CheckroomIcon />,
            link: "/products/wardrobe",
          },
          {
            text: "Jewelry",
            icon: <DiamondIcon />,
            link: "/products/jewelery",
          },
        ].map((category, index) => (
          <Link to={category.link} key={category.text}>
            <ListItem
              disablePadding
              className={`hover:bg-red-100 rounded-2xl ${
                theme === "dark" ? "hover:text-white" : "hover:text-black"
              }`}
              onClick={toggleDrawer(false)}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: theme === "dark" ? "#fff" : "#000" }}>
                  {category.icon}
                </ListItemIcon>
                <ListItemText primary={category.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Box className="px-5 py-2">
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {theme === 'dark'? "Switch to Light Theme" : "Switch to Dark Theme"}
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <MenuIcon className="mr-1" onClick={toggleDrawer(true)} />
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        transitionDuration={100}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
