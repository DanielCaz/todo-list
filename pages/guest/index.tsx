import Form from "../../components/Form";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList";
import styles from "../../styles/GuestScreen.module.scss";

const GuestScreen = () => {
  return (
    <div className={styles.container}>
      <Header title="Guest's Todo List" userStatus={0} />
      <Form />
      <TodoList />
    </div>
  );
};

export default GuestScreen;
