import React from "react";
import marked from "marked";

function Preview({ normalText }) {
  const getMarkdownText = () => {
    let rawMarkup = marked(normalText, { sanitize: true });
    return { __html: rawMarkup };
  };
  return (
    <div className="preview">
      <div
        className="preview__html"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}

export default Preview;
