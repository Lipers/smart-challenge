import React, { useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import "isomorphic-fetch";

export default function Model() {
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [tel, setTel] = useState(0);
  const [email, setEmail] = useState("");

  const handleCloseModal = (e) => {
    if (e.target.id === "modal") e.target.style.display = "none";
  };
  const handleNewLead = async (e) => {
    e.preventDefault();

    if (/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj)) {
      try {
        const { data } = await axios.get(
          `http://localhost:3333/customer?cnpj=${cnpj}`
        );
        const customer = data;

        if (!customer.intention) {
          await axios.put(
            `http://localhost:3333/intention/${localStorage.getItem("uuid")}`
          );

          const lead = {
            email,
            cnpj,
            company: empresa,
            cell_phone: tel,
            uuid: localStorage.getItem("uuid"),
          };
          await axios.post(`http://localhost:3333/customer`, lead);
        } else if (customer.intention.length < 3) {
          await axios.put(
            `http://localhost:3333/intention/${localStorage.getItem("uuid")}`
          );

          const body = {
            cnpj,
            uuid: localStorage.getItem("uuid"),
          };

          await axios.put(`http://localhost:3333/customer`, body);
        } else {
          return window.alert("Número de consultas por CNPJ chegou ao limite");
        }
      } catch (error) {
        console.log(error);
      }
      window.open("/result", "_self");
    } else {
      window.alert("CNPJ Inválido");
    }
  };

  return (
    <div id="modal" style={{ display: "none" }} onClick={handleCloseModal}>
      <form onSubmit={handleNewLead} className="border-lift box">
        <Row>
          <p
            id="modal-title"
            className="text-orange"
            style={{ fontSize: "20.5px" }}
          >
            <b className="text-orange">Legal!&nbsp;</b>
            <span className="text-blue">
              Você está a poucos cliques de enviar sua encomenda através da
              <b className="text-blue">&nbsp;SMART</b>
              <b className="text-orange">ENVIOS</b>
            </span>
          </p>
        </Row>

        <Row>
          <b className="text-blue">Empresa</b>
        </Row>
        <Row>
          <input
            onChange={(e) => setEmpresa(e.target.value)}
            className="border-lift modal-input"
            placeholder="Digite o nome da sua empresa"
            type="text"
            name="empresa"
          />
        </Row>
        <div id="cnpj-tel">
          <div>
            <Row>
              <b className="text-blue">CNPJ</b>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <input
                onChange={(e) => setCnpj(e.target.value)}
                className="border-lift modal-input"
                placeholder="Digite o CNPJ da sua empresa"
                type="text"
                name="cnpj"
              />
            </Row>
          </div>
          <div>
            <Row>
              <b className="text-blue">Telefone</b>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <input
                onChange={(e) => setTel(e.target.value)}
                className="border-lift modal-input"
                placeholder="Digite o seu telefone"
                type="text"
                name="telefone"
              />
            </Row>
          </div>
        </div>
        <Row style={{ marginTop: "10px" }}>
          <b className="text-blue">Digite seu e-mail</b>
        </Row>
        <Row>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border-lift modal-input"
            placeholder="Digite seu e-mail"
            type="email"
            name="email"
          />
        </Row>
        <Row className="center">
          <button id="frete" type="submit" className="border-lift">
            <b>Conhecer opções de Frete</b>
          </button>
        </Row>
      </form>
    </div>
  );
}
