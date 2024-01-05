// import { default as Basic } from "./component/Formik";
import "./App.css";
import MultiStepForm from "./container/BaseContainer";
import signupBackground from "../src/assets/Innovation-amico.svg";
import pageBakground from "../src/assets/Tablet login-amico.svg";
import loginBackground from "../src/assets/grammar correction-rafiki.svg"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChangeEvent, FocusEvent } from "react";
import LoginPage from "./container/BaseContainer/HandleloginPage";
import LandingPage from "./container/BaseContainer/LandingPage";
import ProtectedLayout from "./layout/ProtectedLayout";


function App() {


  return (
    // <div>
    //   <RouterProvider router={route}/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-[800px] h-[800px] flex flex-row gap-40 my-40 mx-40">
              <img src={pageBakground} alt="background" />
              <LandingPage />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="flex flex-row gap-40 my-40 mx-40">
              <img src={loginBackground} alt="image-site" className="w-[700px] h-[700px]" />
              <LoginPage
                values={{
                  email: "",
                  password: "",
                }}
                errors={{
                  username: undefined,
                  password: undefined,
                }}
                touched={{
                  username: undefined,
                  password: undefined,
                }}
                handleChange={function (
                  event: ChangeEvent<HTMLInputElement>
                ): void {
                  throw new Error("Function not implemented.");
                }}
                handleBlur={function (
                  event: FocusEvent<HTMLInputElement, Element>
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="w-[500px] h-[500px] flex flex-row gap-40 my-40 mx-40">
              <img src={signupBackground} alt="image-site" />
              <MultiStepForm />
            </div>
          }
        />
        <Route
        path="/product-detail"
        element={
          <ProtectedLayout />
        }
        />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
