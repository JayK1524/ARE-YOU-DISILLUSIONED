import { Button, styled } from "@mui/material";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const BackButton = styled(Button)`
	color: #f5f5f5;
	background-color: rgb(32, 173, 180);
	margin-right: 15;
	:hover {
		background-color: rgb(32, 173, 180);
	}
`;

const Buttons = () => {
	const { questionIndex, setQuestionIndex, setProgress, questions } =
		useContext(MyContext);

	const handleBack = () => {
		const previousQuestionIndex = questionIndex - 1;
		if (previousQuestionIndex >= 0) {
			setQuestionIndex(previousQuestionIndex);
			setProgress((previousQuestionIndex / questions.length) * 100);
		}
	};

	return (
		<div style={{ textAlign: "center", marginTop: 30 }}>
			<BackButton
				variant="contained"
				onClick={handleBack}
				disabled={questionIndex === 0}
			>
				Back
			</BackButton>
		</div>
	);
};

export default Buttons;
