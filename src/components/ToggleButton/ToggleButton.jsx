import "./ToggleStyle.css";
const ToggleButton = () => {
  const changeToggleButton = (e) => {
    if (e.target.checked) {
      document.querySelector("html").setAttribute("data-bs-theme", "dark");
      document.querySelector("body").style.backgroundColor = "#444";
      document.querySelectorAll("input").forEach((input) => {
        input.style.color = "white";
      });
    } else {
      document.querySelector("html").setAttribute("data-bs-theme", "light");
      document.querySelector("body").style.backgroundColor = "wheat";
      document.querySelectorAll("input").forEach((input) => {
        input.style.color = "black";
      });
    }
  };
  return (
    <div className="contentToggle">
      <div className="container">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={changeToggleButton}
        />
        <label htmlFor="checkbox" className="label">
          {" "}
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
