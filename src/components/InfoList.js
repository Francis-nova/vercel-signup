import blueTicks from "./../images/svgexport-2.svg"; // blue ticks...
import { Row, Col } from "reactstrap";
// import 

const InfoList = ({ list }) => {
  return (
    <>
      {list.map((item, i) => (
        <Row key={i} style={{marginBottom: '20px'}}>
          <Col xs={1}>
            <img src={blueTicks} className="blueTick" />
          </Col>
          <Col xs={11}>
            <h3 className="geist-text">{item.caption}</h3>
            <p className="geist-text-subtitle">{item.subtitle}</p>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default InfoList;
