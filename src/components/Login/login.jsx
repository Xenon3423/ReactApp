import React from "react";
import { Field, reduxForm } from "redux-form";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";
import { Input } from "../Common/FormsControls/formscontrols";
import { requiredField, maxLengthCreator } from "d:/Projects/my-app/src/helper/validation/validation";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Почта"} name="email" validate={requiredField} component={Input} />
            </div>
            <div>
                <Field placeholder={"Пароль"} name="current-password" type="password" validate={requiredField} component={Input} />
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <div>
        <h1>Вход</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default connect (null, (login)) (Login);