import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './card.css';

function Card({ id, nome, descricao, imagem, favorito, onFavoritar }) {
    return (
        <section className="card">
            <figure>
                <img src={imagem} alt={`Agente ${nome}`} />
            </figure>
            <article>
                <h3>{nome}</h3>
                <p>{descricao}</p>
            </article>
            <footer>
                <button 
                    aria-label="Favoritar" 
                    onClick={() => onFavoritar(id)}
                    className={favorito ? "ativo" : ""}
                >
                    <i className={favorito ? "bi bi-star-fill" : "bi bi-star"}></i>
                </button>
            </footer>
        </section>
    );
}

export default Card