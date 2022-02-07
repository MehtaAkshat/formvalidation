import "./index.css";
import { useState } from "react";
import Input from "./Input";

export default function App() {
  let demo,Namee,Emaill,Contactt,genderr;
  const [errorMessage, setErrorMessage] = useState('');
  const [erorMessage, setErorMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const nameVerify = (E) => {
     Namee = E.target.value; 
     console.log(Namee);
    }
  const emailVerify = (E) => {
    Emaill = E.target.value; 
  }
  const contactVerify = (E) => {
    Contactt = E.target.value; 
  }
  const genderVerify = (E) => {
    genderr = E.target.value; 
  }
  const submitVerify = () => {
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i;
    const re = /^[0-9\b]+$/;
    if( Namee == undefined){
      setErrorMessage('Please Enter Name');
    }
    if( Emaill == undefined){
      setErorMessage('Please Enter Email');
    } else if(!regex.test(Emaill)){
      setErorMessage('This Is Not Valid Email Format');
    }
    if( Contactt == undefined){
      setErrMessage('Please Enter ContactNumber');
    } else if(!re.test(Contactt) &&  Contactt.lehgth != 10 ){
      setErrMessage('Please Enter Valid Number');
    }
  } 
  return (
    <div className="App">
      <Input onChange={nameVerify} type="text" name="name" lable="Name : "/><br></br>
      <p>{errorMessage}</p>
      <Input onChange={emailVerify} type="email" name="email" lable="Email : " /><br></br>
      <p>{erorMessage}</p>
      <Input onChange={contactVerify} type="text" name="contact" lable="Contact : " placeholder="(+91)" /><br></br>
      <p>{errMessage}</p>
      Gender : <br></br>
      <Input onChange={genderVerify} type="radio" name="male" lable="Male : " value="male" /><br></br>
      <Input onChange={genderVerify} type="radio" name="female" lable="Female : "  value="female"/><br></br>
      
      <button onClick={submitVerify}>submit</button>
    </div>
  );
}