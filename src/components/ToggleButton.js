export default function ToggleButton() {
  return (
    <div className="row">
      <div className="toggle-button">
        <button className="btn" type="submit">
          My cart
        </button>
        <button className="btn">Ongoing</button>
        <button className="btn">Completed</button>
      </div>
      <h6> &nbsp;</h6>
    </div>
  );
}
