import React, { useState, useEffect } from 'react';
import Card from '../../Components/card/card.jsx'
import './home.css'; 

function Home() {
    const [agentes, setAgentes] = useState(() => {
        const dadosSalvos = localStorage.getItem('agentes');
        return dadosSalvos ? JSON.parse(dadosSalvos) : [
            { id: 1, nome: "JETT", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.", favorito: false },
            { id: 2, nome: "CYPHER", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.", favorito: false },
            { id: 3, nome: "PHONIX", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.", favorito: false },
            { id: 4, nome: "SKYE", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.", favorito: false },
            { id: 5, nome: "OMEM", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.", favorito: false },
            { id: 6, nome: "KILLJOY", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Killjoy, uma alemã genial, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.", favorito: false },
            { id: 7, nome: "SAGE", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.", favorito: false },
            { id: 8, nome: "TEJO", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3413df9939de606a355c1f88fbfc35f0774c19c9-587x900.jpg?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Consultor de inteligência veterano da Colômbia, Tejo conta com um sistema de orientação balística que força o inimigo a abrir mão da posição — ou da vida. Os ataques precisos dele mantêm os oponentes desestabilizados e sob seu controle.", favorito: false },
            { id: 9, nome: "VIPER", imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?accountingTag=VAL&auto=format&fit=fill&q=80&w=352", descricao: "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.", favorito: false },
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
