import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const imageLinks = [
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742660741/InShot_20250322_215251155_su1ksn.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408294/uc_ysnjdz.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408486/uc_bc3heb.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408501/uc_lndx79.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408556/uc_agkee2.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408572/uc_lltnwo.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408608/uc_ac84bx.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408624/uc_kj7ykl.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408651/uc_niy1us.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408670/uc_tb0wca.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408697/uc_s3u7sa.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410222/uc_br912y.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410244/uc_rg0jpn.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410635/uc_p4ffuj.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410652/uc_uxt8qy.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410689/uc_ugwg0h.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410726/uc_h7vray.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410734/uc_tts73e.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410759/uc_blhv4p.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410987/uc_ri8a7t.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742411008/uc_xyaxg5.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742411023/uc_gnilxa.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742411032/uc_mkkwna.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742411059/uc_h3nb47.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742411075/uc_akkbcc.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742411111/uc_aiqkjq.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408670/uc_tb0wca.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742408697/uc_s3u7sa.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742409272/uc_xjrgqn.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742409771/uc_qvtozh.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742409903/uc_ksnyrx.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742409923/uc_h1dgde.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410085/uc_wa0hs1.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410106/uc_u0mdfk.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410123/uc_pwmdxs.jpg",
  "https://res.cloudinary.com/dqb3l5f98/image/upload/v1742410132/uc_ahh0dx.jpg",

];

function App() {
  return (
    <Container style={{ marginTop:'20rem', height: '125vh' }}>
      <h1 className="text-center mb-4 text-primary fw-bold">Memories</h1>
      <Row className="g-4 justify-content-center">
        {imageLinks.map((url, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <Card className="border-0 shadow-lg overflow-hidden rounded-lg">
              <Card.Img
                variant="top"
                src={url}
                className="w-full h-auto rounded-lg transition-transform transform hover:scale-105"
                alt={`Image ${index + 1}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
