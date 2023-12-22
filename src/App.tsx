// import { default as Basic } from "./component/Formik";
import "./App.css";
import MultiStepForm from "./container/BaseContainer";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Sign Up</h1>
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
