import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom"
/*-----------------------------------------------------------------*/
import '../../styles/Alojamineto/Home.scss'
import '../../styles/Alojamineto/Card.module.scss'
/*---------------------------------------------------------------*/
import Card from '../../components/Alojamiento/Card'
import CardCountry from '../../components/Alojamiento/CardCountry';
import HeaderSleep from '../../components/Alojamiento/HeaderSleep';
import Layout from "../../layout/Layout"
import ImageCarousel from '../../components/Utils/ImageCarousel';
/*--------------------------------------------------------------*/

const dataTop = [
  {
    imgUrl: "/img/cancun.jpg",
    link: "hotel", 
    type: "Hoteles (824.347)", 
    count: "824.347" 
  },
  {
    imgUrl: "/img/playa.jpg",
    link: "", 
    type: "Apartamentos (733.052)", 
    count: "733.052" 
  },
  {
    imgUrl: "/img/cook.jpg",
    link: "house1", 
    type: "Resorts (17.335)", 
    count: "17.335" 
  },
  {
    imgUrl: "/img/España.jpg",
    link: "", 
    type: "Villas (378.607)", 
    count: "378.607" 
  },
  {
    imgUrl: "/img/unnamed.jpg",
    link: "", 
    type: "Chalets de montaña (31.159)", 
    count: "31.159" 
  }
];  


const Home = () => {
    return (
      <>
        <Layout>
          <HeaderSleep />
        </Layout>
        {/*------------------Alert--------------------------------------------*/}
        
        {/*------------------Alojaminetos SLicks--------------------------------------------*/}
        
              <div className="listHome">
              <h5 className="title">Buscar por tipo de alojamiento</h5>
              
              <ImageCarousel list={dataTop}/>
              
              
              <h5 className="title">Descubre Cuba</h5>
              <ImageCarousel list={dataTop} />
              
              <h5 className="title">Casas que le encantan a los clientes</h5>
              <ImageCarousel list={dataTop} />
              </div>
          
        {/*------------------Cards Grids--------------------------------------------*/}
        <br /> <br />
       {/* <Container>
          <Row>
            
            <Col>
              <Link to="maqueta">
                <CardCountry
                  title="Georgetown"
                  url="https://cf.bstatic.com/xdata/images/city/540x270/948748.webp?k=248eec3648c570c84bb7375062cc2bb984a7ab402c342a1716bdf9754903be93&o="
                />
              </Link>
            </Col>
            <Col>
              <Link to="maqueta">
                <CardCountry
                  title="Paipa"
                  url="https://cf.bstatic.com/xdata/images/city/540x270/941425.webp?k=281c2a9a088a2bbc2dfe96b030cc3bf1d2f057768f5b77f7167de40e659b81ef&o="
                />
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Link to="maqueta">
                <CardCountry
                  title="Barichara"
                  url="https://cf.bstatic.com/xdata/images/city/540x270/933943.webp?k=5ba2483e835dbd17f9bb19528a03945532e5f025605d05b2622eee1152b8c1f9&o="
                />
              </Link>
            </Col>
            <Col>
              <Link to="maqueta">
                <CardCountry
                  title="San Gil"
                  url="https://cf.bstatic.com/xdata/images/city/540x270/933943.webp?k=5ba2483e835dbd17f9bb19528a03945532e5f025605d05b2622eee1152b8c1f9&o="
                />
              </Link>
            </Col>
            <Col>
              <Link to="maqueta">
                <CardCountry
                  title="Bogotá"
                  url="https://cf.bstatic.com/xdata/images/city/540x270/653307.webp?k=96840ba0ed6ab187b729e16cb1655ad614abe67f521f63486038985e47ea8d2f&o="
                />
              </Link>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <h1 className="titulo">Inspírate para tu próximo viaje</h1>
          <br />
          <Row>
            <Col>
              <Link to="page1">
                <CardCountry
                  title=" "
                  url="https://bstatic.com/xdata/images/xphoto/1182x887/122580880.jpg?k=67893e63f75b7794a6d9fbf3d951ce9e821954bc62d9d79796e90eaaccc701be&o=?size=S"
                />
              </Link>
            </Col>
            <Col>
              <Link to="page2">
                <CardCountry
                  title=" "
                  url="https://cf.bstatic.com/xdata/images/xphoto/1182x591/123807895.webp?k=4a027e6bbbce887f4f9a7441a3efd6e033cc6ef6474481566ab6e9ca5f0ca191&o="
                />
              </Link>
            </Col>
            <Col>
              <Link to="page3">
                <CardCountry
                  title=" "
                  url="https://cf.bstatic.com/xdata/images/xphoto/2048x1536/123806704.webp?k=ee390765951cff7caf2b05e61c8f56ab3f8a5c2b689279616cc8f94fb81184be&o="
                />
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Link to="page4">
                <CardCountry
                  title=" "
                  url="https://cf.bstatic.com/xdata/images/xphoto/2048x1536/124770552.webp?k=9f6c9f9517f337c8a0fa9e484279140caba8b42cf64ac26708ded9808c47dd09&o="
                />
              </Link>
            </Col>
            <Col>
              <Link to="page5">
                <CardCountry
                  title=" "
                  url="https://cf.bstatic.com/xdata/images/xphoto/2048x1536/123680659.webp?k=e836d828681eddf98b414e6f6b360087a3b31ac63e1935514028776fc6827107&o="
                />
              </Link>
            </Col>
          </Row>
        </Container>*/}
      
       
      </>
    );
}

export default Home
