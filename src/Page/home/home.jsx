import React, { useState, useEffect } from 'react';
import Card from '../../Components/card/card.jsx'
import './home.css'; 

function Home() {
    const [agentes, setAgentes] = useState(() => {
        const dadosSalvos = localStorage.getItem('agentes');
        return dadosSalvos ? JSON.parse(dadosSalvos) : [
            { id: 1, nome: "JETT", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.", favorito: false },
            { id: 2, nome: "JETT", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.", favorito: false },
            { id: 3, nome: "JETT", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.", favorito: false },
            { id: 4, nome: "JETT", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.", favorito: false },
            { id: 5, nome: "JETT", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.", favorito: false },
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
