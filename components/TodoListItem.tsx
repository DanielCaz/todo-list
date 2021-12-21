import { FcFullTrash, FcOk } from "react-icons/fc";
import styles from "../styles/TodoListItem.module.scss";

const TodoListItem = ({
  todoItem,
  onRemoveTodo,
  onToggleCompleted,
  todoFilter,
}: {
  todoItem: { id: string; text: string; completed: boolean };
  onRemoveTodo: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  todoFilter: string;
}) => {
  return (
    <div
      style={todoItem.completed ? { backgroundColor: "#F0F0F0" } : {}}
      className={styles.container}
    >
      <li
        style={todoItem.completed ? { textDecorationLine: "line-through" } : {}}
      >
        {todoItem.text}
      </li>
      <button
        className={styles.deleteButton}
        onClick={() => onRemoveTodo(todoItem.id)}
      >
        <FcFullTrash />
      </button>
      <button
        className={styles.finishedButton}
        onClick={() => onToggleCompleted(todoItem.id)}
      >
        <FcOk />
      </button>
    </div>
  );
};

export default TodoListItem;
