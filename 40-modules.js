// What are modules in JavaScript?

// Modules are the standard way in JavaScript to export code from one file and import it into another file.


// this our main js file -> app.js

  // 1- app.js
  //<script type="module" src="app.js"></script>
  import { userDetails } from "./userDetails.js";

  const user1 = userDetails('Mark', '1234567890', 'mark@example.com', '1');
  console.log(user1);


  // 2- userDetails.js
  export const userDetails = (name, PhoneNo, email, id) => {
    return {
      name: name,
      PhoneNo: PhoneNo,
      email: email,
      id: id
    };
  };

