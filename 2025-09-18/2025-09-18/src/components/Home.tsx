import { Link, Outlet } from "react-router";

function Home() {
  return (
    <>
      <div>Home</div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/something">Something</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
