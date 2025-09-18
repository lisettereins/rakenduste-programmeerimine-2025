import { Link, Outlet } from "react-router";

function About() {
  return (
    <>
      <div>About</div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/something">Something</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default About;
