import { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "./Button";
import { MyContext } from "../context/Context";

const steps = [
	"Strongly Disagree",
	"Disagree",
	"Neutral",
	"Agree",
	"Strongly Agree",
];

export default function HorizontalLabelPositionBelowStepper() {
	const { questionIndex, setQuestionIndex, setProgress, questions } =
		useContext(MyContext);

	const handleNext = () => {
		const nextQuestionIndex = questionIndex + 1;
		if (nextQuestionIndex < questions.length) {
			setQuestionIndex(nextQuestionIndex);
			setProgress(((nextQuestionIndex + 1) / questions.length) * 100);
		}
	};

	return (
		<>
			<Box sx={{ width: "100%", marginTop: 18 }}>
				<Stepper activeStep={-1} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel
								onClick={handleNext}
								disabled={questionIndex === questions.length - 1}
								style={{ cursor: "pointer" }}
								color="inherit"
							>
								{label}
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</Box>
			<Button />
		</>
	);
}
