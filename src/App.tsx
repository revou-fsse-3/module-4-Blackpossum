// import { default as Basic } from "./component/Formik";
import "./App.css";
import pageLogo from "../src/assets/Tablet login-amico.svg"
import MultiStepForm from "./container/BaseContainer";

function App() {
  return (
      <div className="flex flex-row space-x-40">
        <img src={pageLogo} alt="signUp-logo" />
        <MultiStepForm />
      </div>
  );
}

export default App;
