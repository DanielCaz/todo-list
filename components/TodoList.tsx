import styles from "../styles/TodoList.module.scss";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <div className={styles.container}>
      <ul>
        <TodoListItem text="Finish this project" />
        <TodoListItem text="Clean all the dishes and also bla bla" />
        <TodoListItem text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, magni. Officiis minus aliquam nihil commodi porro sed maxime, ea quia eaque optio possimus fugiat eos saepe temporibus eius iure esse." />
        <TodoListItem text="Profit" />
      </ul>
    </div>
  );
};

export default TodoList;
