import styles from "./repdetails_style.module.css";
export default function RepositoryDetails({ data }) {
  return (
    <div className={styles.detailed_card}>
      <div className={styles.repo_info}>
        <p>Node ID:</p>
        <span>{data.owner.node_id}</span>
      </div>
      <div className={styles.repo_info}>
        <p>Repository Link</p>
        <a href={`${data.html_url}`}>{data.html_url}</a>
      </div>
      <div className={styles.repo_info}>
        <p>Description</p>
        <span className={styles.description}>{data.description}</span>
      </div>
      <div className={styles.repo_info}>
        <p>Organizations</p>
        <a href={`${data.owner.organizations_url}`}>
          {data.owner.organizations_url}
        </a>
      </div>
      <div className={styles.repo_info}>
        <p>Organizations</p>
        <a href={`${data.owner.followers_url}`}>{data.owner.followers_url}</a>
      </div>
      <div className={styles.repo_info}>
        <p>Teams Link</p>
        <a href={`${data.teams_url}`}>{data.teams_url}</a>
      </div>
      <div className={styles.repo_info}>
        <p>Forks Link</p>
        <a href={`${data.forks_url}`}>{data.forks_url}</a>
      </div>
      <div className={styles.repo_info}>
        <p>Tags Link</p>
        <a href={`${data.tags_url}`}>{data.tags_url}</a>
      </div>
    </div>
  );
}
