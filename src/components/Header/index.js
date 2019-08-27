import React from 'react';
import './styles.css'
//Função desse modo faz um return automaticamente 
const Header = () => ( 
    <header id="main-header">JSHunt</header>
);
//A forma de cima é equivalente a forma de baixo para declarar Componentes React
/* class Header extends Componentes {
    render() {
        return <h1>hello</h1>
    }
} */

export default Header;