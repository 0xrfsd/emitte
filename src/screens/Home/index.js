import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import './index.css';
import arrow from '../../assets/arrow.svg';

import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="Todo">
            <ReactLogo />
            <Link to="/register" className="link-btn">
                Cadastre-se
                <img src={arrow} alt="arrow" />
            </Link>
            <Link to="/login" className="link-btn">
                Faça Login
                <img src={arrow} alt="arrow" />
            </Link>
            <Link to="/naoexiste" className="link-btn">
                404
                <img src={arrow} alt="arrow" />
            </Link>
        </div>
    )
}

export default Home;