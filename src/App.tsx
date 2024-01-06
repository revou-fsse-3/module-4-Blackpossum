// import { default as Basic } from "./component/Formik";
import "./App.css";
import MultiStepForm from "./container/BaseContainer";
import signupBackground from "../src/assets/Innovation-amico.svg";
import pageBakground from "../src/assets/Tablet login-amico.svg";
import loginBackground from "../src/assets/grammar correction-rafiki.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/HandleloginPage";
import LandingPage from "./pages/LandingPage";
import BasicContainer from "./container/BasicContainer";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BasicContainer background={pageBakground}>
              <LandingPage />
            </BasicContainer>
          }
        />
        <Route
          path="/login"
          element={
            <BasicContainer background={loginBackground}>
              <LoginPage />
            </BasicContainer>
          }
        />
        <Route
          path="/signup"
          element={
            <BasicContainer background={signupBackground}>
              <MultiStepForm />
            </BasicContainer>
          }
        />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
