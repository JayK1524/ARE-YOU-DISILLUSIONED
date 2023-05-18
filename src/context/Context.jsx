import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [progress, setProgress] = useState(0);

	const questions = [
		"I have ambitious aims of making a difference?",
		"My leadership journey has progressed as I anticipated.",
		"I have spent fewer than 4 years in full time service or ministry.",
	];

	return (
		<MyContext.Provider
			value={{
				questionIndex,
				setQuestionIndex,
				progress,
				setProgress,
				questions,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyContextProvider;
