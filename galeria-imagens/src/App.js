import './App.css';

const HEADER_STYLES = {
  backgroundColor: '#9bc9f5',
  height: '50px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

function App() {
  return (
    <div className="App">

      <header style={ HEADER_STYLES } >
        <nav>
          <span>Home</span>
          <span>Perfil</span>
        </nav>
      </header>

      <section className="galeria">
        <h1>Galeria de Imagens</h1>
        <p>Aqui você encontra as imagens mais diversas</p>
      </section>

      <section className="imagens">
        <div className="card card-1">
          <div className="image">
          <img src="https://super.abril.com.br/wp-content/uploads/2020/10/chuva-montanha_site.jpg?quality=90&strip=info&resize=680,453" alt="imagem1" />
          </div>
          <div className="content">
            <h2>Heading 1</h2>
            <p>This is a media card. You can use this section to describe the content.</p>
            <a href="#2">VER</a>
          </div>
        </div>

        <div className="card card-2">
          <div className="image">
          <img src="https://super.abril.com.br/wp-content/uploads/2020/10/chuva-montanha_site.jpg?quality=90&strip=info&resize=680,453" alt="imagem2" />

          </div>
          <div className="content">
            <h2>Heading 2</h2>
            <p>This is a media card. You can use this section to describe the content.</p>
            <a href="#2">VER</a>
          </div>
        </div>

        <div className="card card-3">
          <div className="image">
          <img src="https://super.abril.com.br/wp-content/uploads/2020/10/chuva-montanha_site.jpg?quality=90&strip=info&resize=680,453" alt="imagem3" />

          </div>
          <div className="content">
            <h2>Heading 3</h2>
            <p>This is a media card. You can use this section to describe the content.</p>
            <a href="#2">VER</a>
          </div>
        </div>
      </section>

      <section className="galeria-1">
        <h3>Galeria</h3>
        <p>As mais belas imagens</p>
        <p>copyright bruna 2021</p>
      </section>
    </div>
  );
}

export default App;
