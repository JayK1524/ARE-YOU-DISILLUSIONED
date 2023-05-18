import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "./Button";
import { MyContext } from "../context/Context";
import { useContext, useState } from "react";

const steps = [
	"Strongly Disagree",
	"Disagree",
	"Neutral",
	"Agree",
	"Strongly Agree",
];

export default function HorizontalNonLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed] = useState({});

	const { questionIndex, setQuestionIndex, setProgress, questions } =
		useContext(MyContext);

	const handleStep = (step) => () => {
		const nextQuestionIndex = questionIndex + 1;
		if (nextQuestionIndex < questions.length) {
			setQuestionIndex(nextQuestionIndex);
			setProgress(((nextQuestionIndex + 1) / questions.length) * 100);
			setActiveStep(step);
		}
	};

	return (
		<>
			<Box sx={{ width: "90%", marginTop: 20, marginLeft: 5 }}>
				<Stepper nonLinear activeStep={activeStep > 0 && activeStep}>
					{steps.map((label, index) => (
						<Step key={label} completed={completed[index]}>
							<StepButton
								color="inherit"
								onClick={handleStep(index)}
								disabled={questionIndex === questions.length - 1}
							>
								{label}
							</StepButton>
						</Step>
					))}
				</Stepper>
			</Box>
			<Button />
		</>
	);
}
