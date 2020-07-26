import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaDownload, FaUpload } from 'react-icons/fa';

import logo from '../Assets/datastax.jpg';
import './Header.css';


export default function Header() {
  return (
    <Container fluid className="bg-white pb-2" style={styles.containerBorder}>
      <Row className="justify-content-center">
        <Col className="pr-0 mt-1">
          <Image fluid className="float-right mt-1" src={logo} alt="datastax logo"/>
        </Col>
        <Col style={{marginTop: "1.7rem", letterSpacing: "3px"}}>
        <h4 className="text-uppercase font-weight-bold">Assignment</h4>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <Link activeClassName="secondary-color" className="primary-color float-right text-decoration-none" exact to="/" title="Send File">upload <FaUpload /></Link>
        </Col>
        <Col>
          <Link activeClassName="secondary-color" className="primary-color text-decoration-none" exact to="/get" title="Get File"><FaDownload /> download</Link>
        </Col>
      </Row>
    </Container>
  );
}

let styles = {
  textBorder: {
    color: '#1F2438',
    textShadow: '2px 2px #055992'
  },
  containerBorder: {
    borderBottom: '15px solid',
    borderColor: '#1F2438',
    width: '100%'
  }
}
