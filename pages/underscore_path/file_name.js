const i_can_use_underscores_for_react_component_names = () => {
  return (
    <div>
      <p>
        This is the rendered component in the subdirectory: "underscore_path"
      </p>
      <br></br>
      <p>
        It's filename is different than the component name, and the URL uses the
        file name, not the component name
      </p>
      <br></br>
      <p>
        This is done to make sure I can re-create Michael's original UCS website
        directories
      </p>
      <br></br>
      <a href="/recipes/veggie-marmite-skewers">Go to the skewers page</a>
      <br></br>
      <p>The picture below is in the /public folder:</p>
      <img src="/bnb.jpg" />
    </div>
  );
};

export default i_can_use_underscores_for_react_component_names;
