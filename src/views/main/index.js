import React, { Component } from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import CardClima from "../../components/cardclima";
import TableClima from "../../components/tableClima";
import { Link } from "react-router-dom";

import "./styles.css";

export default class main extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <section className="paralax-top">
          <h1 className="text-center">CAMPOS DAS VERTENTES</h1>
          <p className="paralax">
            Busca de novas tecnologias para o desenvolvimento de uma agricultura
            voltada para a sustentabilidade.
          </p>
          <div className="row btn-parallax justify-content-center">
            <Link className="btn btn-danger" to="/whoweare">
              Saiba Mais
            </Link>
          </div>
        </section>
        <div className="container-fluid main">
          <div className="row row-body">
            <strong>Notícias</strong>

            <div className="row row-noticia">
              <a
                href="https://istoe.com.br/jbs-biodiesel-vende-260-milhoes-de-litros-em-2018/"
                target="blank"
              >
                <Card
                  title="JBS Biodiesel vende 260 milhões de litros em 2018 - Fonte: IstoÉ"
                  image="https://s2.glbimg.com/J_vjBYM5mqoML-dadn4gpyQu4tY=/780x440/e.glbimg.com/og/ed/f/original/2019/01/28/gas-station-fuel-diesel-fuel-gas-pump-energy-pump-1596622.jpg"
                  link="#noticia"
                />
              </a>
              <a
                href="https://istoe.com.br/importacao-de-soja-da-china-recua-em-janeiro-de-milho-e-trigo-aumenta/"
                target="blank"
              >
                <Card
                  title="Importação de soja da China recua em janeiro; de milho e trigo aumentam - Fonte: IstoÉ"
                  image="https://s2.glbimg.com/h3PRQtTUbrsZc7FbB9k-Cz-HuqU=/780x440/e.glbimg.com/og/ed/f/original/2019/02/22/20190219181752_img_0728.jpg"
                  link="#noticia"
                />
              </a>
              <a
                href="https://revistagloborural.globo.com/Estadao/noticia/2019/01/cosan-convoca-age-para-deliberar-sobre-incorporacao-de-fatia-da-santa-luzia.html"
                target="blank"
              >
                <Card
                  title="Cosan convoca AGE para deliberar sobre incorporação de fatia da Santa Luzia - Fonte: G1"
                  image="https://s2.glbimg.com/5s4X9hP5I8oQZ1UQSUQ5Q4lZn9o=/780x440/e.glbimg.com/og/ed/f/original/2016/09/27/smto_colhedora_2.jpg"
                />
              </a>
              <a
                href="https://exame.abril.com.br/economia/mudanca-climatica-ameaca-produtividade-e-preco-do-cafe/"
                target="blank"
              >
                <Card
                  title="Mudança climática ameaça produtividade e preço do café - Fonte: EXAME"
                  image="https://abrilexame.files.wordpress.com/2018/11/2018-11-08t195635z_1_lynxnpeea71wz_rtroptp_4_commods-cafe-cecafe.jpg?quality=70&strip=info&resize=680,453https://abrilexame.files.wordpress.com/2018/11/2018-11-08t195635z_1_lynxnpeea71wz_rtroptp_4_commods-cafe-cecafe.jpg?quality=70&strip=info&resize=680,453"
                  link="#noticia"
                />
              </a>
            </div>
            <strong>Clima</strong>
            <div className="row row-clima">
              <div className="card-deck">
                <CardClima />
                <TableClima />
              </div>
            </div>
          </div>
        </div>

        <section className="paralax-botton">
          <h1 className="text-center">Nossos Valores</h1>
          <p className="paralax">
            Segurança, Ética, Sustentabilidade, esses são alguns dos nossos
            valores.
          </p>
          <div className="row btn-parallax justify-content-center">
            <Link className="btn btn-danger" to="/values">
              Saiba Mais
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
