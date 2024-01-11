import reactLogo from "../logo-react.svg";
import jestLogo from "../logo-jest.svg";
import testingLibLogo from "../logo-testing-library.svg";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const flexCenteredSx: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <header>
      <div style={{ ...flexCenteredSx, gap: 28 }}>
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={jestLogo} className="App-logo" alt="logo" />
        <img src={testingLibLogo} className="App-logo" alt="logo" />
      </div>
      <p>
        Learning Testing React apps with{" "}
        <a
          className="App-link"
          href="https://jestjs.io/"
          target="_blank"
          rel="noreferrer"
        >
          Jest
        </a>{" "}
        and{" "}
        <a
          className="App-link"
          href="https://testing-library.com/docs/react-testing-library/intro"
          target="_blank"
          rel="noreferrer"
        >
          React Testing Library
        </a>
      </p>
      <h3>Testing done in these pages 👇:</h3>
      <div>
        <ol style={flexCenteredSx}>
          <li>
            <Link to="/counter" className="App-link">
              Counter
            </Link>
          </li>
        </ol>
      </div>
    </header>
  );
};
