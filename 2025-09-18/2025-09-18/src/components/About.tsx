import { Link, Outlet } from "react-router";

function About() {
  return (
    <>
      <div>About</div>
      <div id="contactformContainer">
        <h1>Lisette Reins</h1>
        <h3>List huvidest/hobidest:</h3>
        <ul>
          <li>Matkamine</li>
          <li>Koerte koolitus ja hingeelu</li>
          <li>Programmeerimine</li>
        </ul>
        <label htmlFor="email">E-mail</label>
        <br />
        <input
          type="text"
          id="email"
        />
        <br />
        <textarea></textarea>
        <br />
        <button>call to action</button>
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
