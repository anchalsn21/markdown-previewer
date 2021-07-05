import React from "react";

function Editor({ normalText, setNormaltext }) {
  return (
    <div className="editor">
      <textarea
        onChange={(e) => setNormaltext(e.target.value)}
        value={normalText}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}

export default Editor;
