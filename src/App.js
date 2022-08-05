import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
	const [title, setTitle] = useState(null);
	const location = useLocation();

	useEffect(() => {
		const parsedTitle = location.pathname.replace(/\W/g, "");
		setTitle(parsedTitle);
	}, [location]);
	return (
		<Grid container>
			<Header title={title} />
			<Navbar />
			<Outlet />
		</Grid>
	);
}

export default App;
