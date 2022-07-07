const References = (props) => {
  const manyFunctions = () => {
    // assign each reference its proper [number] in the alphabatized list
    // somehow display that number in the article text
    // that [number] needs to be a link...
    // ...and that link needs to go to the commensurate reference at the bottom
    // of the page
  };

  // this just sorts the references alphabetically,
  // we also need to delete redundant references
  const referenceList = props.referenceList.sort();
  const uniqueReferences = [...new Set(referenceList)];

  return (
    <div>
      <hr color="black"></hr>
      <p>
        I'm an alphabetical list of references in the &nbsp; &#x2039;References
        /&rsaquo; &nbsp; component
      </p>
      <div className="references-list">
        {uniqueReferences.map(function (reference) {
          const index = uniqueReferences.indexOf(reference) + 1;

          return (
            <div className="reference-note" key={index} id={`ref-${index}`}>
              [{index}] {reference}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .reference-note:target {
          background: orange;
        }
      `}</style>
    </div>
  );
};

export default References;
