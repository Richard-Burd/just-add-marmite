const { runMigration } = require("contentful-migration");
const options = {
  filePath:
    "/home/richardburd/Desktop/dev/just-add-marmite/scripts/migration.js",
  spaceId: "this-is-secret-and-cannot-go-on-GitHub",

  // we think this is the token you received when installing the Contentful CLI
  accessToken: "this-is-secret-and-cannot-go-on-GitHub",
};
runMigration(options)
  .then(() => console.log("Migration Done!"))
  .catch((e) => console.error(e));
