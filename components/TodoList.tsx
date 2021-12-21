import TodoListItem from "./TodoListItem";
import styles from "../styles/TodoList.module.scss";

const TodoList = ({
  todoItems,
  onRemoveTodo,
  onToggleCompleted,
  todoFilter,
}: {
  todoItems: { id: string; text: string; completed: boolean }[];
  onRemoveTodo: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  todoFilter: string;
}) => {
  return (
    <div className={styles.container}>
      <ul>
        {todoItems.map((todoItem) => {
          return todoFilter === "all" ? (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              onRemoveTodo={onRemoveTodo}
              onToggleCompleted={onToggleCompleted}
              todoFilter={todoFilter}
            />
          ) : todoFilter === "completed" && todoItem.completed ? (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              onRemoveTodo={onRemoveTodo}
              onToggleCompleted={onToggleCompleted}
              todoFilter={todoFilter}
            />
          ) : todoFilter === "uncompleted" && !todoItem.completed ? (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              onRemoveTodo={onRemoveTodo}
              onToggleCompleted={onToggleCompleted}
              todoFilter={todoFilter}
            />
          ) : (
            <></>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
