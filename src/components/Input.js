import React from "react";
import classes from './Input.module.css'

const Input = ({type,placeholder,name}) => {
    return (
        <div >
            <input className={classes.Rectangle} type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}
export default Input