import React, {useState} from 'react';

const Form = (props) => {
    //state holds object with all form values
    const [ formState, setFormState ] = useState({
        title: "",
        company: "",
        year: "",
        description: ""
    })

    //spreads previous form state, then adds the updated element
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    //multi use validator checks for minimum 5 characters
    const basicValid = (title) => {
        if(title.length <= 5){
            return false;
        }
        return true;
    }

    //validator checks if input is a number
    const yearValid = (year) => {
        return !isNaN(year);
    }

    //validator checks for minimum 15 characters
    const descValid = (desc) => {
        if(desc.length <= 15){
            return false;
        }
        return true;
    }

    //returns true if every form input is valid
    const allValid = () => {
        return basicValid(formState.title)
                && basicValid(formState.company)
                && yearValid(formState.year)
                && descValid(formState.description);
    }

    return(
        <div>
            <h1>Submit a video game idea</h1>
            <form>
                <label>Title</label>
                <input type="text" name="title" onChange={onChangeHandler}></input><br/>
                {/* ternary operator displays error if validator returns false */}
                {basicValid(formState.title) ? "" : <p>hey yo that's too short!!!</p>}<br/>
                <label>Company</label>
                <input type="text" name="company" onChange={onChangeHandler}></input><br/>
                {basicValid(formState.company) ? "" : <p>hey yo that's too short!!!</p>}<br/>
                <label>Year</label>
                <input type="text" name="year" onChange={onChangeHandler}></input><br/>
                {yearValid(formState.year) ? "" : <p>hahaha WHAT that's not a number</p>}<br/>
                <label>Description</label>
                <input type="text" name="description" onChange={onChangeHandler}></input>
                {/* alternate way to write this type of error checking. works the same way as the ternary operator */}
                {!descValid(formState.description) && <p>description too short, my dude!</p>}<br/>

                {/* this validator checks that every input is valid, otherwise it blocks the submit button */}
                {allValid() ? <input type="submit"></input> : <input type="submit" disabled></input>}
            </form>

            {/* this shows the form state. you can also use react dev tools for this */}
            <h2>Form state</h2>
            <p>Title: {formState.title}</p><br/>
            <p>Company: {formState.company}</p><br/>
            <p>Year: {formState.year}</p><br/>
            <p>Description: {formState.description}</p><br/>
        </div>
    )
}

export default Form;