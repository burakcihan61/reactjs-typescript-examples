import React, { useState } from "react";

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = useState<boolean>(true);

  return (
    <article
      style={{
        border: "5px solid black",
        padding: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "2em",
      }}
    >
      <header>{question}</header>
      <p>
        <span className={`${isHidden ? "blurred" : "visible"}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(false)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

export default Question;
