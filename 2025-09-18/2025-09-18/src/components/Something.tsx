import { Link, Outlet } from "react-router";

function Something() {
  return (
    <>
      <div>Something</div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Something;
