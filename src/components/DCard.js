import "./DCard.css"
function DCard(props) {
  const { head, title, description } = props;
  return (
    <div className="DCard">
      <h1>{head}</h1>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default DCard;
