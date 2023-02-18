import React, {useState} from 'react'
import {
    SButton, SDivEmail, SDivMessage, SDivName,
    SForm,
    SFormControl,
    SFormTitle,
    SInputEmail,
    SInputMessage,
    SInputName,
} from "./styles";
import {formTitle, inputNameText, inputEmailText, inputMessageText, buttonText} from "./variables"
import {submit_form} from "../Actions/request";
import {isCorrectEmail,isCorrectName} from "./Validation/validation";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [messageDirty, setMessageDirty] = useState(false);
    const [nameError,setNameError] = useState("Empty name");
    const [emailError,setEmailError] = useState("Empty email");
    const [messageError,setMessageError] = useState("Empty message");

    const nameHandler = (e) => {
        setName(e.target.value)
        if (!isCorrectName(e.target.value)){
            setNameError("Incorrect name")
        }
        else {
            setNameError("")
        }
    }

     const emailHandler = (e) => {
        setEmail(e.target.value)
        if (!isCorrectEmail(e.target.value)){
         setEmailError("Incorrect email")
        }
        else {
            setEmailError("")
        }
    }

    const messageHandler = (e) => {
        setMessage(e.target.value)
        if (e.target.value != "") {setMessageError("")}
        else {setMessageError("Empty Message")}
    }

    const blurHandler = (e) => {
        switch(e.target.name){
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'message':
                setMessageDirty(true)
                break
        }
    }
    return (

        <SForm>
            <SFormTitle>{formTitle}</SFormTitle>
            <SFormControl>
                {(nameDirty && nameError) && <SDivName>{nameError}</SDivName>}
                <SInputName onChange = {(e) => nameHandler(e)} value={name} onBlur = {e => blurHandler(e)} name="name" placeholder={inputNameText}/>
                {(emailDirty && emailError) && <SDivEmail>{emailError}</SDivEmail>}
                <SInputEmail onChange = {(e) => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} name="email" placeholder={inputEmailText}/>
                {(messageDirty && messageError) && <SDivMessage>{messageError}</SDivMessage>}
                <SInputMessage onChange = {(e) => messageHandler(e)} value={message} onBlur = {e => blurHandler(e)} name="message" placeholder={inputMessageText}/>
            </SFormControl>
            <SButton onClick={()=>submit_form(name,email,message)}>{buttonText}</SButton>
        </SForm>

    )
}

export default Form;