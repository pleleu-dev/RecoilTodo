import React from "react";
import { filteredTodoListState } from "./selectors";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const todoList = useRecoilValue(filteredTodoListState);

	return (
		<>
			<TodoListStats />
			<TodoListFilters />
			<TodoItemCreator />

			{todoList.map((todoItem) => (
				<TodoItem key={todoItem.id} item={todoItem} />
			))}
		</>
	);
}
