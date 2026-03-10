import React from "react";

const Info = React.memo(() => {

  console.log("Info render");

  return <p>Component</p>;
});

export default Info;