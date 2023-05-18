import React from "react";
import { Box, styled } from "@mui/material";
import Progress from "../Progress";
import Stepper from "../Stepper";
import Questions from "../Questions";

const Container = styled(Box)`
	width: 80%;
	min-height: 480px;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px;
	margin-top: 18vh;
	margin-left: 20vh;
`;

const RoundedBox = () => {
	return (
		<>
			<Container>
				<Progress />
				<Questions />
				<Stepper />
			</Container>
		</>
	);
};

export default RoundedBox;
