import React from "react";
 
const c = () => {
  return (
     <div>
          <h1>Header</h1>
          {props.children}
          <h1>Footer</h1>
     </div>
  )


};
export default c;