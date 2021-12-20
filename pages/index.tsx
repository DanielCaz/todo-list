import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import { FcBusinessman, FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onGoogleButtonClick = () => {
    //TODO: Add Google Sign In
  };

  const onGuestButtonClick = () => {
    router.push("/guest");
  };

  return (
    <div className={styles.container}>
      <Header title="My Todo List" />
      <div className={styles.buttonGroup}>
        <button onClick={onGoogleButtonClick}>
          <FcGoogle /> Continue with Google
        </button>
        <button onClick={onGuestButtonClick}>
          <FcBusinessman /> Continue as guest
        </button>
      </div>
    </div>
  );
}
