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
  let uniqueReferences = [...new Set(referenceList)];

  return (  
    <div>
      <hr color="black"></hr>
      <p>I'm a list of references at the bottom of the page listed alphabetically</p>
      <div className="references-list">
        {uniqueReferences.map(function(reference){
          return (
            <div key={uniqueReferences.indexOf(reference)}>
              [{uniqueReferences.indexOf(reference) + 1}] {reference}
            </div>
          )
        })}
      </div>
    </div>
  );
}
 
export default References;