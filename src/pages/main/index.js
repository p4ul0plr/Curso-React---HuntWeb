//import React, { Component } from 'react'; defini a classe como 'export default class Main extends Component'
import React from 'react'; //E se colocar dessa forma, define como 'export default class Main extends React.Component'
import '../../services/api'
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() { //Executar uma ação logo quando o componente é exibido
        this.loadProducts();
    }

    //Estudar Funções assíncronas - async/await
    loadProducts = async (page = 1) => { //Para funções criadas pelo usuário é necessario funções do tipo Arrow functions, para que conseguir enxergar o escopo do this
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return; 

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.page) return; 

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() { //O método rentder() fica escutando as variaveis de estado. Sempre que elas são auteradas ele é atualizado 
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}