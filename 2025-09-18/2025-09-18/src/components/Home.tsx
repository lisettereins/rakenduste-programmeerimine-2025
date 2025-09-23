import { Link, Outlet } from "react-router";
import {Typography} from "@mui/material"

function Home() {
  return (
    <>
      <Typography variant="h1" component="h2">
  Home
</Typography>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/something">Something</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
