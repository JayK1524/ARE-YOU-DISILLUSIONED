import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import { MyContext } from "../context/Context";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 12,
	width: "50%",
	marginLeft: "40vh",
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor:
			theme.palette.mode === "light" ? "rgb(32, 173, 180)" : "#308fe8",
	},
}));

export default function CustomizedProgressBars() {
	const { progress } = useContext(MyContext);
	return (
		<Box sx={{ flexGrow: 1, marginTop: 3 }}>
			<BorderLinearProgress
				variant="determinate"
				value={progress ? progress : 20}
			/>
			<h2
				style={{
					textAlign: "center",
					color: "rgb(32, 173, 180)",
					fontFamily: "lato,sans-serif",
				}}
			>
				IDEALISTIC
			</h2>
		</Box>
	);
}
