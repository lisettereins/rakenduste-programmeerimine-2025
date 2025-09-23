import "../About.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Link, Outlet } from "react-router";
import useLocalStorage from "../useLocalStorage";
import { useRef } from "react";

function About() {
  const [email, setEmail] = useLocalStorage<string>("email", "");
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const inputValue = emailInputRef.current?.value;
    if (inputValue !== undefined) {
      setEmail(inputValue);
      console.log("Saved email:", inputValue);
    }
  };

  return (
    <>
      <div>About</div>
      <div id="container">
        <div className="aboutContainer">
          <h1>Lisette Reins</h1>
          <h3>List huvidest/hobidest:</h3>
          <ul>
            <li>Matkamine</li>
            <li>Koerte koolitus ja hingeelu</li>
            <li>Programmeerimine</li>
          </ul>
        </div>
        <br />
        <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
          <div className="contactinfoContainer">
            <TextField
              label="E-mail"
              id="filled-hidden-label-small"
              defaultValue={email}
              variant="filled"
              size="small"
              inputRef={emailInputRef}
            />
            <br />
            <br />
            <TextField
              id="outlined-multiline-flexible"
              label="Tekstiväli"
              multiline
              maxRows={4}
            />
            <br />
            <br />
            <Button variant="contained" onClick={handleClick}>
              Saada
            </Button>
          </div>
        </Box>
      </div>

      <Outlet />
      <BottomNavigation>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/something">Something</Link>
        </nav>
      </BottomNavigation>
    </>
  );
}

export default About;
