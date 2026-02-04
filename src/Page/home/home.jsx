import React, { useState, useEffect } from 'react';
import Card from '../../Components/card/card.jsx'
import './home.css'; 

function Home() {
    const [agentes, setAgentes] = useState(() => {
        const dadosSalvos = localStorage.getItem('agentes');
        return dadosSalvos ? JSON.parse(dadosSalvos) : [
            { id: 1, nome: "JETT", imagem: "https://noticias.maisesports.com.br/wp-content/uploads/2021/10/VALORANT-Jett.jpg", descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.", favorito: false },
        ];
    });

    useEffect(() => {
        localStorage.setItem('agentes', JSON.stringify(agentes));
    }, [agentes]);

    const alternarFavorito = (id) => {
        setAgentes(agentes.map(a => a.id === id ? { ...a, favorito: !a.favorito } : a));
    };

    const totalFavoritos = agentes.filter(a => a.favorito).length;

    return (
        <>
            <header className="cabecalho">
                <img src='/public/logo.png' alt="Logo Valorant" />
                <h1>Catálogo</h1>
                <aside className="contador">
                    <i className="bi bi-star-fill"></i>
                    <output>{totalFavoritos}</output>
                </aside>
            </header>

            <main className="cards">
                {agentes.map(agente => (
                    <Card 
                        key={agente.id} 
                        {...agente} 
                        onFavoritar={alternarFavorito} 
                    />
                ))}
            </main>
        </>
    );
}

export default Home;
