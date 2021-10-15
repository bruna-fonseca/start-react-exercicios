import React from 'react';
import '../styles/login.css';
import LoginImg from '../user.png';

const IMG_STYLES = {
  width: '200px',
};

export default function Login() {
  return (
    <div>
      <div className="content">
        <form className="form">
          <div className="left">
            <img style={ IMG_STYLES } src={LoginImg} alt=""/>
          </div>
          <div className="input">
              <div className="user">
                <input type="text" name="user" id="user" placeholder="email@email.com" />
              </div>
              <div className="password">
                <input type="text" name="password" id="password" placeholder="********" />
              </div>
              <button variant="primary" size="md" type="button" className="btn" >entrar</button>
              <p className="link" >Esqueceu sua senha?<a href="#dsd">Clique a aqui</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};
