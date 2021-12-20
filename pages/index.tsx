import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import { FcBusinessman, FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="My Todo List" />
      <div className={styles.buttonGroup}>
        <button>
          <FcGoogle /> Continue with Google
        </button>
        <button>
          <FcBusinessman /> Continue as guest
        </button>
      </div>
    </div>
  );
}
