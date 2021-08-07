import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

import _ from "lodash";
import styles from "./search_style.module.css";

export default function Search() {
  const [repoName, setRepoName] = useState("");
  const [errror, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  const sendQuery = (query) => {
    fetch(`https://api.github.com/repositories`)
      .then((res) => res.json())
      .then(
        (result) => {
          const filteredResult = result.filter((item) =>
            item.name.includes(query)
          );
          setIsLoaded(true);
          setRepos(filteredResult);
        },
        (error) => {
          setError(error);
          console.log(errror, isLoaded);
        }
      );
  };

  const delayedQuery = useCallback(
    _.debounce((q) => sendQuery(q), 500),
    []
  );

  useEffect(() => {
    delayedQuery();
  }, [delayedQuery]);
  const onChange = (e) => {
    setRepoName(e.target.value);
    delayedQuery(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
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
          onChange={onChange}
        ></TextField>
      </form>
      <div className={styles.repo_list}>
        {repoName &&
          repos.map((item) => {
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
