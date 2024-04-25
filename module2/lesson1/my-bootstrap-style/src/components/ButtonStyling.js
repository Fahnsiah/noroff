const ButtonStyling = () => {
    return (
      <div className="container">
        <h3>Styling Buttons With Bootstrap</h3>
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-warning">Warning Button</button>
        <button className="btn btn-danger">Danger Button</button>
        <button className="btn btn-outline-primary">
          Outline Primary Button
        </button>
        <br />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-primary btn-sm" type="button">
            Small Block Button
          </button>
          <button className="btn btn-primary btn-lg" type="button">
            Large Block Button
          </button>
        </div>
      </div>
    );
  };
  
  export default ButtonStyling;
  