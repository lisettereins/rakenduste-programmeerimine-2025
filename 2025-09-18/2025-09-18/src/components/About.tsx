import "../About.css";
import { Button, TextField } from "@mui/material";
import { Link, Outlet } from "react-router";

function About() {
  return (
    <>
      <div>About</div>
      <div id="container">
        <div className="aboutContainer"><h1>Lisette Reins</h1>
        <h3>List huvidest/hobidest:</h3>
        <ul>
          <li>Matkamine</li>
          <li>Koerte koolitus ja hingeelu</li>
          <li>Programmeerimine</li>
        </ul></div>
        <br />
       <div className="contactinfoContainer"> <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="E-mail"
          variant="filled"
          size="small"
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
        <Button variant="contained">Saada</Button></div>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/something">Something</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default About;
