import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "antd";

import Logo from "../assets/logo.svg";
import Box from "../assets/box.svg";
import Woman from "../assets/woman.svg";
import Truck from "../assets/truck.svg";
import Footer from "../components/footer";

export default class Result extends React.Component {
  state = {
    result: [],
  };

  componentDidMount() {
    (async () => {
      const header = {
        "Content-Type": "application/json",
        token: "kTEjW80rGAPAZGhjmvg4fjfckb7ukvon",
      };

      const info = {
        zip_code_start: localStorage.getItem("cepStart"),
        zip_code_end: localStorage.getItem("cepEnd"),
        volumes: [
          {
            quantity: 1,
            height: Number(localStorage.getItem("altura")),
            length: Number(localStorage.getItem("comprimento")),
            width: Number(localStorage.getItem("largura")),
            price: Number(localStorage.getItem("valor")),
            weight: Number(localStorage.getItem("peso")),
          },
        ],
      };

      const {
        data,
      } = await axios.post(
        "http://api.smartenvios.com/integration/api/quote/api/quotes/calculate-freight",
        info,
        { headers: header }
      );

      this.setState({ result: data });
    })();
  }
  render() {
    return (
      <div className="container-result">
        <div>
          <Woman style={{ position: "relative", top: "80%" }} />
        </div>

        <main>
          <Row className="center">
            <Logo style={{ marginBottom: "20px" }} />
          </Row>

          <p className="title text-blue center">
            Aqui estão os<b>&nbsp;resultados&nbsp;</b>de sua
            <b>&nbsp;cotação</b>
          </p>
          <Row>
            <ul className="">
              {!this.state.result.result ? (
                <h2 className="text-blue">Carregando...</h2>
              ) : (
                this.state.result.result.map((result, index) => (
                  <li className="border-lift card-box" key={index}>
                    <Row className="center">
                      <Truck />
                    </Row>
                    <Row
                      className="center text-blue"
                      style={{ marginTop: "10px" }}
                    >
                      {result.service}
                    </Row>

                    <div
                      className="space-between"
                      style={{ marginTop: "10px" }}
                    >
                      <span className="text-blue ">Prazo</span>
                      <span className="text-blue ">Valor</span>
                    </div>

                    <div className="space-between">
                      <b className="text-blue">{result.days} dia(s) uteis</b>
                      <b className="text-blue">
                        {result.value.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </b>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </Row>

          <Row>
            <div className="border-lift bot-box">
              <div>
                <Row>
                  <b className="text-blue">
                    PLACELOG SOLUCOES LOGISTICAS - 29.364.024/0001-01
                  </b>
                </Row>
                <Row>
                  <b className="text-blue">CEP Origem: </b>
                  <span className="text-blue">
                    Rua Augusto Bianchi - 14095-140 - Ribeirão Preto, SP
                  </span>
                </Row>
                <Row>
                  <b className="text-blue">CEP Origem: </b>
                  <span className="text-blue">
                    Rua Arnaldo Victaliano - 14091-220 - Ribeirão Preto, SP
                  </span>
                </Row>
              </div>
              <div className="col2-bot-box">
                <button className="btn-result">Quero contratar</button>
                <a href="/" className="text-blue nova-cotacao">
                  Nova Cotação
                </a>
                <span className="text-blue saldo-result">Saldo restante 1</span>
              </div>
            </div>
          </Row>
          <Footer />
        </main>
        <div>
          <Box
            style={{ position: "relative", top: "89%", marginLeft: "20px" }}
          />
        </div>
      </div>
    );
  }
}
