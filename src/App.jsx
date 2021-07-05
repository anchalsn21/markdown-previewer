import React, { useState, useRef } from "react";
import "./App.css";
import marked from "marked";
import { Button } from "react-bootstrap";

function App() {
  let [normalText, setNormalText] = useState("=");

  const handleChange = (e) => {
    console.log({ value: e.target.value, target: e.target });
    setNormalText(e.target.value);
  };

  const MarkDown = ({ text }) => {
    let rawMarkup = marked(text ? text : "", { sanitize: true });
    return (
      <div
        className="preview__html"
        dangerouslySetInnerHTML={{ __html: rawMarkup }}
      />
    );
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(normalText);
  };

  return (
    <div>
      {/* <Header /> */}
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <div className="main__container">
          <div className="row">
            <div className="col">
              {/* <Editor normalText={normalText} setNormalText={setNormalText} /> */}
              <div>
                <Button
                  onClick={copyToClipBoard}
                  type="warning"
                  variant="warning"
                >
                  Copy to Clipboard
                </Button>
              </div>
              <div className="editor">
                <textarea
                  onChange={handleChange}
                  value={normalText}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="col">
              {/* <Preview normalText={normalText} /> */}
              <div className="top__buttons">
                <Button
                  onClick={copyToClipBoard}
                  type="warning"
                  variant="warning"
                >
                  Copy Markdown HTML
                </Button>
              </div>
              <div className="preview">
                <MarkDown text={normalText} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
