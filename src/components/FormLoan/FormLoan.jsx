import { useRef, useState } from "react";
import "./FormLoan.css";
import Module from "../Module/Modle";
import ToggleButton from "../ToggleButton/ToggleButton";
// eslint-disable-next-line react/prop-types
let showCloseModule = false;
// eslint-disable-next-line react/prop-types
const FormLoan = ({ title }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModule, setShowModule] = useState(false);
  const closeBtn = useRef();
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isInEmpolyee: false,
    salary: "",
  });
  function handleSubmitClick(e) {
    e.preventDefault();
    setErrorMessage(null);
    let { age, phoneNumber } = formInputs;
    if (phoneNumber.length > 15 || phoneNumber.length < 5) {
      setErrorMessage("the phone number not correct");
    } else if (age < 18 || age > 100) {
      setErrorMessage("the age is not allowed");
    }
    setShowModule(true);
    showCloseModule = true;
  }

  let IsButtonDisabled =
    formInputs.name == "" ||
    formInputs.phoneNumber == "" ||
    formInputs.age == "";
  // formInputs.isInEmpolyee == false;

  let buttonClasses = "";
  if (IsButtonDisabled) {
    buttonClasses = "disabled";
  } else {
    buttonClasses = "";
  }
  // This component to close the module popups
  function CloseModule() {
    if (showCloseModule) {
      return (
        <a className="closeBtn" ref={closeBtn} onClick={handleCloseFun}>
          <i className="fa-solid fa-xmark"></i>
        </a>
      );
    } else {
      return <></>;
    }
  }
  function handleCloseFun() {
    showCloseModule = false;
    setShowModule(false);
  }
  // function handleDivClick() {
  //   if (showModule) {
  //     setShowModule(false);
  //   }
  // }

  return (
    <>
      <div
        // onClick={handleDivClick}
        className="loan_form  mt-3 text-white flex  "
        style={{ position: "relative" }}
      >
        <div className="content boxShadow  container w-75 rounded bg-secondary flex flex-column p-3">
          <h1 className="text-capitalize">{title}</h1>
          <hr className="w-100" />
          <form action="" className="w-100 theForm flex flex-column">
            <div className="content">
              <label htmlFor="name" className="text-capitalize">
                name:
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                required
                value={formInputs.name}
                onChange={(e) => {
                  setFormInputs({ ...formInputs, name: e.target.value });
                }}
              />
            </div>
            <div className="content">
              <label htmlFor="phone" className="text-capitalize">
                phone number:
              </label>
              <input
                type="number"
                id="phone"
                className="form-control"
                required
                placeholder="The Number Not less than 5"
                value={formInputs.phoneNumber}
                onChange={(e) => {
                  setFormInputs({ ...formInputs, phoneNumber: e.target.value });
                }}
              />
            </div>
            <div className="content">
              <label htmlFor="age" className="text-capitalize">
                age:
              </label>
              <input
                placeholder="The Age between 18 or 100"
                type="number"
                id="age"
                className="form-control"
                required
                value={formInputs.age}
                onChange={(e) => {
                  setFormInputs({ ...formInputs, age: e.target.value });
                }}
              />
            </div>
            <div className="content flex  flex-column">
              <label
                htmlFor="check"
                className="text-capitalize text-center w-100 mt-2"
              >
                are you an employee?
              </label>
              <input
                className="form-check-input mt-2 mt-0"
                type="checkbox"
                checked={formInputs.isInEmpolyee}
                id="check"
                aria-label="Radio button for following text input"
                onChange={(e) => {
                  setFormInputs({
                    ...formInputs,
                    isInEmpolyee: e.target.checked,
                  });
                }}
              />
            </div>
            <div className="content">
              <label htmlFor="salary" className="text-capitalize">
                salary:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={formInputs.salary}
                onChange={(e) => {
                  setFormInputs({ ...formInputs, salary: e.target.value });
                }}
              >
                <option>less than 500$</option>
                <option>between 500$ and 2000%</option>
                <option>above 500$</option>
              </select>
            </div>
            <button
              disabled={IsButtonDisabled}
              onClick={handleSubmitClick}
              className={buttonClasses}
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <Module isVisible={showModule} errorMessage={errorMessage} />
      <CloseModule />
      <ToggleButton />
    </>
  );
};

export default FormLoan;
