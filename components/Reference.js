const Reference = (props) => {

  const manyFunctions = () => {
    // order the references alphabetically
    // spit them out at the bottom of the page
    // give each one a number
    // display that number in the article text
  }

  const myRefName = props.myRefName
  return (
    <div className="reference">
      <p>I am the "Reference" component displaying this: {myRefName}</p>
      <style jsx>{`
        .reference {
          color: green
        }
      `}</style>
    </div>
  );
}
 
export default Reference;