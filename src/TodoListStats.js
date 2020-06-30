import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./selectors";

export default function TodoListStats() {
	const { length, completed, uncompleted, percent } = useRecoilValue(
		todoListStatsState
	);
	return (
		<ul>
			<li>Total items: {length}</li>
			<li>Items completed: {completed}</li>
			<li>Items not completed: {uncompleted}</li>
			<li>Percent completed: {percent}</li>
		</ul>
	);
}
