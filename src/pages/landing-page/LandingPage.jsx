import Search from "../../components/search";
import styles from "./landing_style.module.css";

export default function LandingPage() {
  return (
    <div className={styles.main_bg}>
      <div>
        <Search></Search>
      </div>
    </div>
  );
}
