import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "../Consts/navbarItems";
import { navbarStyles } from "./styles";
import { useParams, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
				<Toolbar />
				<Divider />
				<List>
					{mainNavbarItems.map((item) => (
						<ListItem key={item.id} disablePadding>
							<ListItemButton onClick={() => navigate(item.route)}>
								<ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
								<ListItemText sx={navbarStyles.text} primary={item.label} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
};

export default Navbar;
