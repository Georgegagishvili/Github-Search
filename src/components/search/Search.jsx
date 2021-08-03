import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./search_style.module.css";

import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

export default function Search() {
  const [repoName, setRepoName] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);
  const RepSearch = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/repositories`)
      .then((res) => res.json())
      .then(
        (result) => {
          const filteredResult = result.filter((item) =>
            item.name.includes(repoName)
          );
          setIsLoaded(true);
          setRepos(filteredResult);
        },
        (error) => {
          setError(error);
          console.log(error);
        }
      );
  };
  return (
    <div>
      <form
        onSubmit={RepSearch}
        className={styles.main_form}
        autoComplete="off"
      >
        <TextField
          variant="outlined"
          color="secondary"
          margin="normal"
          label="repository"
          name="search"
          id="search"
          value={repoName}
          onChange={(un) => setRepoName(un.target.value)}
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
        >
          Search
        </Button>
      </form>
      <div className={styles.repo_list}>
        {repos.map((item) => {
          return (
            <div key={item.id} className={styles.single_repository}>
              <Link
                className={styles.single_repository_link}
                to={{
                  pathname: `/detailed/${item.owner.login}}/${item.name}`,
                  state: item,
                }}
              >
                {item.full_name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
