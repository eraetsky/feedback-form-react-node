import axios from 'axios'
import {isCorrectEmail,isCorrectName} from "../Form/Validation/validation";


export const submit_form = async (name, email, feedback) => {
    if (isCorrectName(name) && isCorrectEmail(email) && feedback !== "")
    {
        try {
            const response = await axios.post(`http://localhost:5000/submit`, {
                name,
                email,
                feedback
            })
            alert("Form was submited succesfully.")
        }catch (e) {
            alert(e)
        }
    }
    else {
        alert("You can't submit the form with empty or incorrect data.")
    }
}