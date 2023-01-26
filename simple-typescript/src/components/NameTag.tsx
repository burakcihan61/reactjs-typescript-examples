import React from "react";

type AppProps = {
  name: string;
};

const NameTag = (props: AppProps) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

export default NameTag;
