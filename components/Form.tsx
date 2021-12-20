import styles from "../styles/Form.module.scss";
import { FcPlus } from "react-icons/fc";
import { FormEvent } from "react";

const Form = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className={styles.container}>
      <div className={styles.inputGroup}>
        <input type="text" />
        <button className={styles.formButton} type="submit">
          Add <FcPlus />
        </button>
      </div>
      <div className={styles.selectGroup}>
        <select>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
