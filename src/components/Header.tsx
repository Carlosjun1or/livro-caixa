// components/Header.tsx
import { Link } from 'react-router-dom';

export function Header() {
    return (
      <header className="header">
        <h1 className="header-title">Livro Caixa</h1>
      <nav className='nav'>
        <ul >
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            
        </ul>
      </nav>
      </header>
    );
  }