import React from "react";

const Title = React.memo(() => {
  return (
    <h1 className="font-extrabold text-2xl md:text-5xl mt-20 lg:mt-32">
      COLORANDOM
    </h1>
  );
});

export default Title;
