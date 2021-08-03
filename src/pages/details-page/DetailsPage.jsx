import { useLocation } from "react-router";
import Banner from "../../components/banner/banner";
import RepositoryDetails from "../../components/repository_details/RepositoryDetails";
import styles from "./details_style.module.css";

export default function DetailsPage() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className={styles.detailed_main}>
      <Banner data={data}></Banner>
      <div className={styles.repo_details}>
        <RepositoryDetails data={data}></RepositoryDetails>
      </div>
    </div>
  );
}
