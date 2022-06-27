const Reference = (props) => {
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