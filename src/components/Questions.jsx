import { useContext } from "react";
import { MyContext } from "../context/Context";

const Questions = () => {
	const { questions, questionIndex } = useContext(MyContext);
	return (
		<>
			<div
				style={{
					textAlign: "center",
					marginTop: 80,
					fontSize: 12,
					fontFamily: "lato,sans-serif",
					color: "#343333",
				}}
			>
				<h1>{questions[questionIndex]}</h1>
			</div>
		</>
	);
};

export default Questions;
