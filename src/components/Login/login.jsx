import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/formscontrols";
import { requiredField, maxLengthCreator } from "d:/Projects/my-app/src/helper/validation/validation";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Логин"} name="login" validate={[requiredField, maxLengthCreator(10)]} component={Input} />
            </div>
            <div>
                <Field placeholder={"Пароль"} name="password" validate={[requiredField, maxLengthCreator(10)]} component={Input} />
            </div>
            <div>
                <Field component={Input} name="remember" type="checkbox" /> Запомнить
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Вход</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;