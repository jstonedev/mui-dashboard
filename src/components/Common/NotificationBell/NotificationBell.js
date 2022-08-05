import React, { useState } from "react";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const NotificationBell = ({ iconColor, badgeContent }) => {
	const [open, setOpen] = useState(false);
	const [anchorel, setanchorel] = useState(null);

	const handleOpen = (event) => {
		setanchorel(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const notifications = [
		{
			id: 0,
			label: "First notification",
		},
		{
			id: 1,
			label: "Second notification",
		},
		{
			id: 2,
			label: "Third notification",
		},
	];

	const newNotifications = `You have ${notifications.length} new notifications!`;
	const noNotifications = "No new notifications";
	return (
		<div>
			<Tooltip
				title={notifications.length ? newNotifications : noNotifications}>
				<IconButton
					color={iconColor}
					onClick={notifications.length ? handleOpen : null}
					anchorel={anchorel}>
					<Badge badgeContent={notifications.length} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Tooltip>
			<BasicMenu
				open={open}
				anchorel={anchorel}
				handleClose={handleClose}
				menuItems={notifications}
			/>
		</div>
	);
};

export default NotificationBell;
