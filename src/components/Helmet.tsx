import React from "react";

const Helmet = (props: {
  title: string;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  document.title = "Care Finder -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
