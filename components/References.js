const References = (props) => {

  const manyFunctions = () => {
    // assign each reference its proper [number] in the alphabatized list
    // somehow display that number in the article text
    // that [number] needs to be a link...
    // ...and that link needs to go to the commensurate reference at the bottom
    // of the page
  }

  // this just sorts the references alphabetically,
  // we also need to delete redundant references
  const referenceList = props.referenceList.sort();

  return (  
    <div>
      <hr color="black"></hr>
      <p>I'm a list of references at the bottom of the page listed alphabetically</p>
      <div className="references-list">
        {referenceList.map(function(reference){
          return (
            <div>
              [{referenceList.indexOf(reference) + 1}] {reference}
            </div>
          )
        })}
      </div>
    </div>
  );
}
 
export default References;

/*

    <div className="recipe-list">
      {recipes.map(function(recipe){
        if (!recipe.fields.slug.startsWith("cheesy")) {
          return <RecipeCard key={recipe.sys.id} recipe={recipe} />
        }
      })}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>

*/