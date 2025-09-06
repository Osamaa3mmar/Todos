import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import '@xyflow/react/dist/style.css';

document.documentElement.classList.add("duration-700")
createRoot(document.getElementById("root")).render(
  
    <App />
);
