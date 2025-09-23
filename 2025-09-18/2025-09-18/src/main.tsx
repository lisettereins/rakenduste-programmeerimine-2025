import { createRoot } from "react-dom/client";
import "./index.css";
//import App from './App.tsx'
import { createHashRouter /* , HashRouter */ } from "react-router";
import Home from "./components/Home.tsx";
import Something from "./components/Something.tsx";
import About from "./components/About.tsx";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/something",
    element: <Something />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </ThemeProvider>
  </>
);
