import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Oops, looks like you lost your way!</h1>
      <p style={paragraphStyles}>
        You should probably stick to the path. Don’t worry, you can always{" "}
        {<Link to="/">follow me home</Link>}.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
