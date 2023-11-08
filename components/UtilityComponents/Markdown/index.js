import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({ children, classes }) => (
  <ReactMarkdown
  // className={classNames(styles.container, classes)}
  >
    {children}
  </ReactMarkdown>
);
export default Markdown;
