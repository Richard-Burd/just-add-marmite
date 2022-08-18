module.exports = function (migration, context) {
  console.log(migration);
  const dog = migration.createContentType("dog");
  console.log(dog);
  const name = dog.createField("name");
  console.log(name);
  name.type("Symbol").required(true);
};
