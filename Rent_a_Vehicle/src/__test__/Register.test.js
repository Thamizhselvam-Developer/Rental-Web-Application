
import React from 'react';
import { render, screen,fireEvent} from '@testing-library/react';
import Register from '../User admin/components/Register';
import { BrowserRouter } from 'react-router-dom';

describe('Register Component', () => {
  it('renders a Sign Up heading', () => {
   render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const checkPlaceholder =(inputElement,value)=>{
       expect(inputElement).toBeInTheDocument()
       fireEvent.change(inputElement,{target:{value:value}})
       expect(inputElement.value).toBe(value)
  }

  let inputValue =[
   "selva",
  "8428961472",
 "admin@gmail.com",
  "@@@143Selva",
  "@@@143Selva",
  "no 9jeeva street east extent mutharaiyarpalayam",
 "puducherery",

]
  const inputElementUserName = screen.getByPlaceholderText("Enter your username")

  const inputElementMobile = screen.getByPlaceholderText("Enter your mobile number")
  const inputElementEmail = screen.getByPlaceholderText("Enter your email address")
  const inputElementMPassword = screen.getByPlaceholderText("Create a password")
  const inputElementConfirmPassword = screen.getByPlaceholderText("Confirm your password")
  const inputElementAddress = screen.getByPlaceholderText("Enter your full Address")
  const inputElementCity = screen.getByPlaceholderText("Enter your City")
  const inputElementState = screen.getByPlaceholderText("Enter your State")

const arr=[inputElementUserName,inputElementMobile,inputElementEmail,inputElementMPassword,inputElementConfirmPassword,inputElementAddress,inputElementCity,inputElementState]
for(let i=0;i<arr.length;i++){


 checkPlaceholder(arr[i], inputValue[i])



}

  });
});

describe("Registeration Component",()=>{
  it("value check for each element",()=>{

      

  })
})