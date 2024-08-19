import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/responsive.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
