import Logo from './img/logo.png';
import {Link} from 'react-router-dom';
import './header.css';
import CarrinhoSVG from '../carrinho/CarrinhoSVG';

function Header() {
  return (
      <div className='centralizar'>
        <header className='app-header'>
          <div className='home'>
            <img src={Logo} alt='shoe' style={{ width: '2.29vw', borderRadius: '8px' }}></img>
            <span className='Digital'>Digital Store</span>
            <div>
              <input type='text' className='place' placeholder="Pesquisar Produtos..." ></input>
            </div>
        
            <Link to={"/Cadastre2"}><span className='cadastre-se'>Cadastre-se</span></Link>
            <Link to={"/Cadastre"}><button className='entrar'>Entrar</button></Link>
            <CarrinhoSVG />
          </div>
        
            <div style={{ paddingTop: '30px', paddingBottom:'30px', backgroundColor: '#FFFFFF', marginLeft: '-18px', }} >
              <Link to={"/"} className='ementa' style={{ padding: '20px', }}>Home</Link>       
              <Link to={"/produtos"} className='ementa' style={{ padding: '20px', }}>Produtos</Link>
              <Link to={"/categorias"} className='ementa' style={{ padding: '20px', }}>Categorias</Link>
              <Link to={"/meusprodutos"} className='ementa' style={{ padding: '20px', }}>Meus Produtos</Link>
            </div>
        </header >
      </div >

  )
}

export default Header;