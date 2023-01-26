import React from "react";

type BoxProps = { children: React.ReactNode; style?: React.CSSProperties };

const Box = ({ children, style = {} }: BoxProps) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple", ...style }}>
      {children}
    </section>
  );
};

export default Box;
