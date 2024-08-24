/* eslint-disable no-unused-vars */
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import FormLoan from "./components/FormLoan/FormLoan";

function App() {
  return (
    <div className="container-fluid">
      <FormLoan title="requesting a loan" />
      
    </div>
  );
}

export default App;
