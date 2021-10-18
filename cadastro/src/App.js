import ReactImg from './react-logo.png';
import './App.css';

function App() {
  return (
    <div className="flex-container">
      <div className="left">
        <h1 className="register-title" >Cadastro</h1>
        <p className="register-paragraph" >Preencha os dados abaixo para começar</p>
        <form>
            <input type="text" placeholder="nome" name="nome" />
            <input type="text" placeholder="sobrenome" name="sobrenome" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="senha" name="senha" />
            <button>Concluir cadastro</button>
        </form>
      </div>
      <div className="right">
        <img src={ ReactImg } alt="react-logo" />
        <h1 className="right-title">App React</h1>
      </div>

    </div>
  );
}

export default App;
