import React, { useState } from "react";
import B from "./B";
import AppContext from "./Context";

const A = () => {
    const [state, setState] = useState();
  return (
    <div>
      <h2>A component</h2>
      <p>data from D Components :- {state}</p>
      <hr />
      <AppContext.Provider value={{setState}}>
        <B />
      </AppContext.Provider>
    </div>
  );
};

export default A;
