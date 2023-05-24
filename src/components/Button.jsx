import "./Button.css";

function Button(props) {
  const { label } = props;
  return (
    <div>
      <button className="btn" onClick={console.log("weeeeee")}>
        {label}
      </button>
    </div>
  );
}

export default Button;
