import { useEffect, useState } from "react";

export const SetLocalStorage = (key: string) => {
	const [passwordView, setPasswordView] = useState(
		"true" === localStorage.getItem(key) ? true : false
	);
	useEffect(() => {
		localStorage.setItem(key, passwordView.toString());
	}, [passwordView]);

	return {
		value: passwordView,
		setter: setPasswordView,
	};
};
