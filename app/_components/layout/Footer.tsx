import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer-franchise">
                <h3>Quer Ser Nosso Franqueado?</h3>
                <p>Envie um e-mail para nós clicando aqui e enviaremos os detalhes de nossa franquia!</p>
            </div>
            <div className="footer-info">
                <div className="footer-info-media">
                    <h5>Midias Sociais</h5>
                </div>
                <div className="footer-info-nav">
                    <h5>Navegação</h5>
                    <ul>
                        <li>Home</li>
                        <li>Sobre Nós</li>
                        <li>Cardápio</li>
                        <li>Nossas Lojas</li>
                    </ul>
                </div>
                <div className="footer-info-conection">
                    <h5>Contato</h5>
                    <ul>
                        <li>R. Anchieta, 123</li>
                        <li>Rio Grande do Sul, Pelotas</li>
                        <li>53 99999 9999</li>
                        <button>Ver no mapa</button>
                    </ul>
                </div>
                <button className="send-to-top">Voltar ao topo</button>

            </div>
        </footer>
    )
}
