import React from "react";
import Brasil from "../assets/br.svg";
import { Row, Col } from "antd";

export default function Footer() {
  return (
    <div className="center" style={{ position: "relative", top: "3%" }}>
      <Col>
        <Row>
          <p style={{ margin: "0 auto", color: "#bbbbbb" }}>
            Feito com <Brasil /> no brasil
          </p>
        </Row>
        <Row>
          <p className="text-blue">
            SmartEnvios - Todos os Direitos Reservados
          </p>
        </Row>
      </Col>
    </div>
  );
}
