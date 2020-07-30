import React, { useState } from "react";
import axios from "axios";
const { v4: uuidv4 } = require("uuid");
import Logo from "../assets/logo.svg";
import Box from "../assets/box.svg";
import Woman from "../assets/woman.svg";
import Partners from "../assets/partners.svg";
import Footer from "../components/footer";
import Head from "next/head";
import { Row, Col } from "antd";
import Modal from "../components/modal";

const Home = () => {
  const [cepStart, setCepStart] = useState(0);
  const [cepEnd, setCepEnd] = useState(0);
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);
  const [comprimento, setComprimento] = useState(0);
  const [peso, setPeso] = useState(0);
  const [valor, setValor] = useState(0);

  async function handleIntention() {
    const uuid = uuidv4();
    localStorage.setItem("uuid", uuid);

    localStorage.setItem("cepStart", cepStart);
    localStorage.setItem("cepEnd", cepEnd);
    localStorage.setItem("largura", largura);
    localStorage.setItem("altura", altura);
    localStorage.setItem("comprimento", comprimento);
    localStorage.setItem("peso", peso);
    localStorage.setItem("valor", valor);

    const intention = {
      uuid,
      zipcode_start: cepStart,
      zipcode_end: cepEnd,
      lead: false,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3333/intention",
        intention
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    document.getElementById("modal").style.display = "block";
  }

  return (
    <div
      className="container"
      style={{
        wordBreak: "break-all",
        padding: "60px",
      }}
    >
      <Head>
        <title>Smart Envios</title>
        <meta
          property="og:title"
          content="Smart Envios Frete inteligente"
          key="title"
        />
      </Head>
      <div className="center" style={{ marginBottom: "20px" }}>
        <Logo />
      </div>

      <div id="wrap-title">
        <span className="title center text-blue text-space">
          Descubra como é <b>fácil enviar</b> suas
        </span>
        <span className="title center text-blue text-space">
          <b> encomendas</b> através da<b> SMART</b>
          <b className="text-orange"> ENVIOS</b>
        </span>
      </div>
      <div id="card-group">
        <div className="card">
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle">Marketplace de frete</b>
            <p className="text-blue ">
              Através de nossas integrações seu cliente seleciona o
              <b>&nbsp; melhor frete</b> em nosso marketplace direto no
              check-out de sua loja.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle ">Smart Coleta</b>
            <p className="text-blue">
              <b>Coletores&nbsp;</b> credenciados retiram diariamente as suas
              encomendas e levam até os <b>&nbsp;transportadores.</b>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle ">Acompanhamento</b>
            <p className="text-blue">
              Você e seu cliente <b>&nbsp;acompanham&nbsp;</b> todo{" "}
              <b>&nbsp;o trajeto&nbsp;</b> da encomenda através da plataforma
              SmartEnvios
            </p>
          </div>
        </div>
        <div className="card">
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle">O destinatário recebe</b>
            <p className="text-blue">
              E<b>&nbsp;notificamos&nbsp;</b>vocês assim que o envio for
              <b>&nbsp;entregue com segurança</b> ao
              <b>&nbsp;seu cliente</b>.
            </p>
          </div>
        </div>
      </div>

      <Row gutter={[30, 30]} id="form-group">
        <Col span={5} id="woman">
          <Woman />
        </Col>
        <Col span={14} style={{ marginLeft: "25px" }} id="form">
          <div id="de-para">
            <div id="de">
              <b className="text-blue">De</b>
              <input
                onChange={(e) => setCepStart(e.target.value)}
                placeholder="Digite o CEP do endereço de coleta"
                type="text"
                name="de"
                className="border-lift input-first"
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              />
            </div>

            <div id="para">
              <b className="text-blue">Para</b>
              <input
                onChange={(e) => setCepEnd(e.target.value)}
                placeholder="Digite o CEP de destino da encomenda"
                type="text"
                name="para"
                className="border-lift input-first"
                style={{ width: "100%", marginTop: "10px" }}
              />
            </div>
          </div>

          <div>
            <Row gutter={[30, 30]}>
              <b
                className="text-blue"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "15px",
                }}
              >
                Detalhes da encomenda
              </b>
            </Row>
            <main id="main-form" className="border-lift center">
              <div className="row">
                <div className="input" style={{ maxWidth: "110px" }}>
                  <p className="text-blue">
                    <b>largura</b>
                  </p>

                  <input
                    onChange={(e) => setLargura(e.target.value)}
                    placeholder="L"
                    className="input-bottom"
                    type="text"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <div className="input" style={{ maxWidth: "90px" }}>
                  <p className="text-blue">
                    <b>altura</b>
                  </p>

                  <input
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="A"
                    className="input-bottom"
                    type="text"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input" style={{ maxWidth: "210px" }}>
                  <p className="text-blue">
                    <b>comprimento</b>
                  </p>

                  <div className="row">
                    <input
                      onChange={(e) => setComprimento(e.target.value)}
                      placeholder="C"
                      className="input-bottom"
                      type="text"
                      style={{ width: "75%" }}
                    />
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "5px",
                      }}
                    >
                      cm
                    </span>
                  </div>
                </div>

                <div className="input">
                  <p className="text-blue">
                    <b>peso</b>
                  </p>

                  <div className="row">
                    <input
                      onChange={(e) => setPeso(e.target.value)}
                      placeholder="do pacote"
                      className="input-bottom"
                      type="text"
                      style={{ width: "80%" }}
                    />
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "5px",
                      }}
                    >
                      kg
                    </span>
                  </div>
                </div>

                <div className="input">
                  <p>
                    <b className="text-blue">valor do produto</b>
                  </p>

                  <input
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="valor do pacote"
                    className="input-bottom"
                    type="text"
                  />
                </div>
              </div>
            </main>

            <main id="main-form-mobile" className="border-lift center">
              <div className="row">
                <div className="input">
                  <p className="text-blue">
                    <b>peso</b>
                  </p>

                  <div className="row">
                    <input
                      onChange={(e) => setPeso(e.target.value)}
                      placeholder="do pacote"
                      className="input-bottom"
                      type="text"
                      style={{ width: "80%" }}
                    />
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "5px",
                      }}
                    >
                      kg
                    </span>
                  </div>
                </div>

                <div className="input">
                  <p>
                    <b className="text-blue">valor do produto</b>
                  </p>

                  <input
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="valor do pacote"
                    className="input-bottom"
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input" style={{ maxWidth: "110px" }}>
                  <p className="text-blue">
                    <b>largura</b>
                  </p>

                  <input
                    onChange={(e) => setLargura(e.target.value)}
                    placeholder="L"
                    className="input-bottom"
                    type="text"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <div className="input" style={{ maxWidth: "130px" }}>
                  <p className="text-blue">
                    <b>altura</b>
                  </p>

                  <input
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="A"
                    className="input-bottom"
                    type="text"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <div className="input">
                  <p className="text-blue">
                    <b>comprimento</b>
                  </p>

                  <div className="row">
                    <input
                      onChange={(e) => setComprimento(e.target.value)}
                      placeholder="C"
                      className="input-bottom"
                      type="text"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </main>
            <section>
              <div className="partners">
                <p>Alguns de nossos parceiros logísticos</p>
                <Partners />
              </div>

              <button id="frete" onClick={handleIntention}>
                Econtrar o melhor frete
              </button>
            </section>
          </div>
        </Col>
        <Col span={1} id="box">
          <Box style={{ marginTop: "110px" }} />
        </Col>
      </Row>

      <Modal id="modal" />

      <Footer />
    </div>
  );
};
export default Home;
