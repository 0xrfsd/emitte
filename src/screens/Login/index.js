import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import right from '../../assets/right.png';
import visible from '../../assets/hidden.svg';
import emailu from '../../assets/email.svg';
import linha from '../../assets/linha.svg';
import arrow from '../../assets/arrow.svg';

import './index.css';

import { validate, res } from 'react-email-validator'

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false)
    const [isEmailValid, setIsEmailValid] = React.useState(false)

    const emailValidator = async (value) => {
        await validate(value);
        if (res) {
            setIsEmailValid(true);
            setEmail(value)
        } else {
            setIsEmailValid(false);
        }
    }

    return (
        <div class="todo">
            <div className="Login">
                <div className="Left-login">
                    <ReactLogo className="App-logo" alt="logo" />
                    <div className="Login-box">
                        <div className="Login-box-header">
                            <h3>Faça seu login</h3>
                        </div>
                        <div className="Login-box-body">
                            <form className="Login-box-form">
                                <div className="Login-box-line">
                                    <input
                                        autoCapitalize="none"
                                        className="Login-box-input"
                                        placeholder="Digite seu e-mail"
                                        type="text"
                                        id="email"
                                        onChange={(e) => emailValidator(e.target.value)}
                                    />
                                    <img src={emailu} className={(isEmailValid ? "Login-box-icon-valid" : "Login-box-icon")} alt="email" />
                                </div>
                                <div className="Login-box-line">
                                    <input
                                        className="Login-box-input"
                                        placeholder="Senha"
                                        type={(isVisible) ? "text" : "password"}
                                        id="email"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <img src={visible} className="Login-box-icon" alt="hidden" onClick={() => setIsVisible(!isVisible)} />
                                </div>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Esqueceu sua senha?
        </a>
                                <button className="Login-box-submit">
                                    <p>Continuar Cadastro</p>
                                    <img src={arrow} alt="arrow" />
                                </button>
                            </form>
                            <h1>
                            </h1>
                        </div>
                    </div>
                    <div className="Cadastro">
                        <p className="Cadastro-Text">Não possui um cadastro?</p>
                        <Link className="Cadastro-Link"
                            to="/register">Cadastre-se</Link>
                    </div>
                </div>
                <div className="Right-login">
                    <img src={right} className="Right-background" alt="Competi" />
                    <img src={linha} className="Right-line" alt="Competi" />
                </div>
            </div>
        </div >
    )
}

export default Login;