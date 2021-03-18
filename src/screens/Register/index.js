import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import right from '../../assets/right.png';
import visible from '../../assets/hidden.svg';
import emailu from '../../assets/email.svg';
import user from '../../assets/user.svg';
import linha from '../../assets/linha.svg';
import down from '../../assets/down.svg';
import arrow from '../../assets/arrow.svg';
import phone from '../../assets/phone.svg';

import './index.css';

import { validate, res } from 'react-email-validator'

const Register = () => {

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
        <div className="todo">
            <div className="Register">
            <div className="Left-Register">
                <ReactLogo className="App-logo" alt="emitte" />
                <div className="Register-box">
                    <div className="Register-box-header">
                        <h3>Cadastro Gratuito!</h3>
                        <h5>
                            Sem riscos. Você não paga nada se não gostar
                            e ainda ganha uma nota grátis para testar.
                        </h5>
                    </div>
                    <div className="Register-box-body">
                        <form className="Register-box-form">
                            <div className="Register-box-line">
                                <input className="Register-box-input" placeholder="Nome*" type="text" id="email" required />
                                <img src={user} className="Register-box-icon-email" alt="email" />
                            </div>
                            <div className="Register-box-line">
                                <input autocapitalize="none" className="Register-box-input" placeholder="E-mail*"
                                    type="text" id="email" required />
                                <img src={emailu} className="Register-box-icon-email" alt="email" />
                            </div>
                            <div className="Register-box-line">
                                <input autocapitalize="none" className="Register-box-input" placeholder="Telefone*"
                                    type="tel" id="tel" data-mask="(00) 00000-0000" maxlength="11" name="phone" required />
                                <img src={phone} className="Register-box-icon-email" alt="email" />
                            </div>
                            <div className="Register-box-line">
                                <div className="dropdown">
                                    <button className="dropbtn">Setor*</button>
                                    <div className="dropdown-content">
                                        <a onclick="alert('setor 1')">Setor 1</a>
                                        <a onclick="alert('setor 2')">Setor 2</a>
                                        <a onclick="alert('setor 3')">Setor 3</a>
                                    </div>
                                </div>
                                <img src={down} className="Register-box-icon" alt="setores" id="setor" />
                            </div>
                            <button className="Register-box-submit">
                                <p>Continuar Cadastro</p>
                                <img src={arrow} alt="arrow" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="Login-line">
                    <p className="Login-Text">Já possui uma conta? </p>
                    <Link className="Login-Link" to="/login" >
                        Faça seu Login
                    </Link>
                </div>
            </div>
            <div className="Right-Register">
                <img src={right} className="Right-background" alt="Emitte" />
                <img src={linha} className="Right-line" alt="Emitte" />
            </div>
        </div>
        </div >
    )
}

export default Register;