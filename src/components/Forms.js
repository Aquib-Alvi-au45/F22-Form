import React from "react";
import classes from './Forms.module.css'
import Input from "./Input";

const Forms = () => {



    return (
        <div className={classes.Rectangle}>

            <div className={classes.main}>
                <span className={classes.SignUp}>
                    Sign Up
                </span>
                <span class={classes['No-credit-card-requi']}>
                    No credit card required
                </span>
                <Input type='email' placeholder='Email address' name='email' />
                <Input type='email' placeholder='Email address' name='email' />
                <Input type='email' placeholder='Email address' name='email' />
            </div>
            <input className={classes.Path} type='checkbox' />
            <span class={classes["I-agree-to-the-Terms"]}>
                <span class={classes["text-style-1"]}>I agree to the</span>Terms & Conditions
            </span>

            <div className={classes.main}>
                <button className={classes["btn-get"]}>Get Started</button>
                <div>

                    <span class={classes["Already-have-an-acco"]}>
                        Already have an account?<span class={classes["text-style-1"]}>Sign in</span>
                    </span>
                </div>
            </div>
        </div>


    )


}

export default Forms