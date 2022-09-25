import React from "react";
 
const layout = (props) => {
  return (
     <div>
          <h1>Header</h1>
          {props.children}
          <h1>Footer</h1>
     </div>
  )


};
export default layout;