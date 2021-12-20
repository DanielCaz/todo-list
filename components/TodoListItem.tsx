import styles from "../styles/TodoListItem.module.scss";
import { FcFullTrash, FcOk } from "react-icons/fc";

const TodoListItem = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <li>{text}</li>
      <button className={styles.deleteButton}>
        <FcFullTrash />
      </button>
      <button className={styles.finishedButton}>
        <FcOk />
      </button>
    </div>
  );
};

export default TodoListItem;
