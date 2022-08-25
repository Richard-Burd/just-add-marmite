import { useState, useEffect } from "react";

const GitHubGistUser = () => {
  // const jsonUrl =
  //   "https://gist.githubusercontent.com/Richard-Burd/6e4471c0c7b76d0a17b35366abc0684f/raw/a6fbeb5ec941b3db084efbd0d7b577501887bc61/referencesTest.json";

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(jsonUrl)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);

  // console.log(data);

  const [entries, setEntries] = useState(null);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Richard-Burd/6e4471c0c7b76d0a17b35366abc0684f/raw/a6fbeb5ec941b3db084efbd0d7b577501887bc61/referencesTest.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEntries(data);
      });
  }, []);

  return (
    <div>
      <p>This is the GitHubGistUser.js component</p>
      <div className="gist-list">
        The first title for the first entry is:
        {entries && entries.beckers.title}
      </div>
    </div>
  );
};

export default GitHubGistUser;
