import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import imagei from '../../assets/404a.svg';
import imageii from '../../assets/404b.svg';
import arrow from '../../assets/arrow.svg';

import {Link} from 'react-router-dom';

import './index.css';

const NotFound = () => {
    return(
        <div class="todo">
            <div class="naoencontrada">
        <ReactLogo className="App-logo" alt="" />
        <h2>Desculpe, página não encontrada!</h2>
        <div className="naoencontrada-imagens">
            <img src={imagei} className="imagea" alt="" />
            <img src={imageii} className="imageb" alt="" />
        </div>
        <Link to="/" className="btn">
            Ir a página inicial
            <img src={arrow} className="btn-icon" alt="arrow" />
        </Link>
    </div>
        </div>
    )
}

export default NotFound;