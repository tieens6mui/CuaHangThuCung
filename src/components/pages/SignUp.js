import { Provider } from "../../Context";
import Form from "../Form";
import UserList from "../UserList";
import { Actions } from "../../Actions";

import React from 'react';

export default function SignUp() {
  const data = Actions();
  return (
          
   
 
   <Provider value={data}>
  
      <div className="App">
        <h1>Login and Sign Up</h1>
      
        <div className="wrapper">
          <section className="left-side">
            <Form />
          </section>
          <section className="right-side">
            <UserList />
          </section>
        </div>
      </div>
     
    </Provider>
  
  );
}
