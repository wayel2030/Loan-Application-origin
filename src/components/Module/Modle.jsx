/* eslint-disable react/prop-types */
import "./module.css";

const Module = ({ isVisible, errorMessage = null }) => {
  if (isVisible) {
    return (
      <div className="module flex w-75  mx-auto ">
        {/* <h1 className="text-success text-capitalize bg-white p-3 rounded text-center ">
          the form has been submitted successfully
        </h1> */}

        <h1
          style={{
            color: errorMessage ? "red" : "green",
          }}
          className="text-capitalize bg-white p-3 rounded text-center "
        >
          {errorMessage != null
            ? errorMessage
            : "the form has been submitted successfully"}
        </h1>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Module;
