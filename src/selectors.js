import { selector } from "recoil";
import { todoListFilterState, todoListState } from "./atoms";

export const filteredTodoListState = selector({
	key: "filteredTodoListState",
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case "Show Completed":
				return list.filter((item) => item.isComplete);
			case "Show Uncompleted":
				return list.filter((item) => !item.isComplete);
			default:
				return list;
		}
	},
});

export const todoListStatsState = selector({
	key: "todoListStatsState",
	get: ({ get }) => {
		const list = get(todoListState);
		const length = list.length;
		const completed = list.filter((item) => item.isComplete).length;
		const uncompleted = length - completed;
		const percent = (completed * 100) / length;

		return {
			length,
			completed,
			uncompleted,
			percent,
		};
	},
});
