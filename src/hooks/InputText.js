import { useState } from 'react'
import useStorage from './storage';

function InputText() {
    const [value, setValue] = useState()
    const [users, setUsers, ] = useStorage();
    var stringrt = "invalid";
    function onSubmit(checkVal) {
      //console.log(users.length)
      for(let i=0; i<users.length; i++) {
          if(checkVal == users[i].studentID) {
              console.log("invalid")
              //console.log(checkVal)
              //checkVal = undefined;
              stringrt = "invalid"
              return "invalid"
          }
          stringrt = "valid"
      }
      return stringrt;
    }
    
    return [stringrt, onSubmit]
}

export default InputText