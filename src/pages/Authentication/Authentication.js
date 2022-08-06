import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import BasicCard from "../../components/Common/BasicCard/BasicCard";
import SearchBar from "../../components/Common/SearchBar/SearchBar";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import GridWrapper from "../../components/Common/GridWrapper/GridWrapper";
import { cardHeaderStyles, cardContentStyles } from "./authStyles";

const Authentication = () => {
	const getHeader = () => {
		const handleChange = (value) => {
			console.log(value);
		};

		const addUser = () => {
			console.log("click");
		};

		return (
			<Box sx={cardHeaderStyles.wrapper}>
				<SearchBar
					placeholder="Search by email address, phone number, or user UID"
					onChange={(event) => handleChange(event.target.value)}
					searchBarWidth="720px"
				/>
				<Box>
					<CommonButton
						variant="contained"
						onClick={addUser}
						size="large"
						sx={cardHeaderStyles.addUserButton}>
						Add user
					</CommonButton>
					<IconButton>
						<RefreshIcon />
					</IconButton>
				</Box>
			</Box>
		);
	};

	const getContent = () => (
		<Typography align="center" sx={cardContentStyles}>
			No users for this project yet
		</Typography>
	);

	return (
		<GridWrapper>
			<BasicCard header={getHeader()} content={getContent()} />
		</GridWrapper>
	);
};

export default Authentication;
