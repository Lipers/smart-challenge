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
    <div className="container main" style={{ wordBreak: "break-all" }}>
      <Head>
        <title>Smart Envios</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="center" style={{ marginBottom: "20px" }}>
        <Logo />
      </div>

      <p className="center text-blue text-space">
        Descubra como é <b>fácil enviar</b> suas
        <b> encomendas</b> através da<b> SMART</b>
        <b className="text-orange"> ENVIOS</b>
      </p>
      <Row gutter={[30, 30]}>
        <Col span={6}>
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle">Marketplace de frete</b>
            <p className="text-blue ">
              Através de nossas integrações seu cliente seleciona o
              <b>&nbsp; melhor frete</b> em nosso marketplace direto no
              check-out de sua loja.
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle ">Smart Coleta</b>
            <p className="text-blue">
              <b>Coletores&nbsp;</b> credenciados retiram diariamente as suas
              encomendas e levam até os <b>&nbsp;transportadores</b>
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle ">Acompanhamento</b>
            <p className="text-blue">
              Você e seu cliente <b>&nbsp;acompanham&nbsp;</b> todo{" "}
              <b>&nbsp;o trajeto&nbsp;</b> da encomenda através da plataforma
              SmartEnvios
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className="border-lift box" style={{ minHeight: "185px" }}>
            <b className="text-orange text-subtitle">O destinatário recebe</b>
            <p className="text-blue">
              E<b>&nbsp;notificamos&nbsp;</b>vocês assim que o envio for
              <b>&nbsp;entregue com segurança</b> ao
              <b>&nbsp;seu cliente</b>.
            </p>
          </div>
        </Col>
      </Row>

      <Row gutter={[30, 30]}>
        <Col span={5}>
          <Woman />
        </Col>
        <Col span={14}>
          <div className="center">
            <Col span={12}>
              <Row gutter={[30, 30]}>
                <b className="text-blue" style={{ marginBottom: "10px" }}>
                  De
                </b>
                <input
                  onChange={(e) => setCepStart(e.target.value)}
                  placeholder="Digite o CEP do endereço de coleta"
                  type="text"
                  name="de"
                  className="border-lift input-first"
                  style={{ width: "100%", textDecorationColor: "white" }}
                />
              </Row>
            </Col>
            <Col span={12}>
              <Row gutter={[30, 30]}>
                <b
                  className="text-blue"
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                >
                  Para
                </b>
                <input
                  onChange={(e) => setCepEnd(e.target.value)}
                  placeholder="Digite o CEP de destino da encomenda"
                  type="text"
                  name="de"
                  className="border-lift input-first"
                  style={{ width: "100%", marginLeft: "10px" }}
                />
              </Row>
            </Col>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <Row gutter={[30, 30]}>
              <b
                className="text-blue"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "5px",
                }}
              >
                Detalhes da encomenda
              </b>
            </Row>
            <Row gutter={[15, 15]}>
              <main className="border-lift center" style={{ padding: 10 }}>
                <Col span={4}>
                  <Row>
                    <b className="text-blue">largura</b>
                  </Row>

                  <Row>
                    <input
                      onChange={(e) => setLargura(e.target.value)}
                      placeholder="L"
                      className="input-bottom"
                      type="text"
                    />
                  </Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <b className="text-blue">altura</b>
                  </Row>

                  <Row>
                    <input
                      onChange={(e) => setAltura(e.target.value)}
                      placeholder="A"
                      className="input-bottom"
                      type="text"
                    />
                  </Row>
                </Col>
                <Col span={5}>
                  <Row>
                    <b className="text-blue">comprimento</b>
                  </Row>

                  <Row>
                    <input
                      onChange={(e) => setComprimento(e.target.value)}
                      placeholder="C"
                      className="input-bottom"
                      type="text"
                      style={{ width: "70%" }}
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
                  </Row>
                </Col>
                <Col span={5}>
                  <Row>
                    <b className="text-blue">peso</b>
                  </Row>

                  <Row>
                    <input
                      onChange={(e) => setPeso(e.target.value)}
                      style={{ width: "70%" }}
                      placeholder="do pacote"
                      className="input-bottom"
                      type="text"
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
                  </Row>
                </Col>
                <Col span={5}>
                  <Row>
                    <b className="text-blue">valor do produto</b>
                  </Row>

                  <Row>
                    <input
                      onChange={(e) => setValor(e.target.value)}
                      placeholder="valor do pacote"
                      className="input-bottom"
                      type="text"
                    />
                  </Row>
                </Col>
              </main>

              <section>
                <div className="partners">
                  <p>Alguns de nossos parceiros logísticos</p>
                  <Partners />
                </div>

                <button onClick={handleIntention}>
                  Econtrar o melhor frete
                </button>
              </section>
            </Row>
          </div>
        </Col>
        <Col>
          <Box style={{ marginTop: "110px" }} />
        </Col>
      </Row>

      <Modal id="modal" />

      <Footer />
    </div>
  );
};
export default Home;
