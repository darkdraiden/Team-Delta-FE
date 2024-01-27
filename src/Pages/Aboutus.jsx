import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import DefaultLayoutHoc from "../layout/Default.layout";
import imgSrc from "../../src/IMG_2046.JPG";
import imgSrc1 from "../../src/IMG_2574.PNG";
import imgSrc2 from "../../src/IMG_2575.PNG";

const Aboutus = () => {
  return (
    <div className="">
      <div className="mx-20 my-7">
        <Row className="align-items-center">
          <hr className="mb-0" />
          <Col xs={12} md={4} className="text-center">
            <Image
              src={imgSrc}
              alt="Circular Photo"
              roundedCircle
              style={{ width: "250px", height: "250px" }}
            />
          </Col>

          {/* Content Next to Photo */}
          <Col xs={12} md={8}>
            <h4> Priyanshi jain</h4>
            <h5>ISE-1</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              odit animi cum neque consectetur quibusdam minima quae harum
              fugit. Mollitia, rerum. Corporis natus, sit temporibus itaque
              dolorum aperiam sint quod!
            </p>
            {/* Add more content or components as needed */}
          </Col>
        </Row>
        <hr className="mt-0" />
      </div>
      <div className="mx-20 my-7">
        <Row className="align-items-center">
          <hr className="mb-0" />
          <Col xs={12} md={8}>
            <h4> Yashraj Singh Chauhan</h4>
            <h5>ISE-1</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              odit animi cum neque consectetur quibusdam minima quae harum
              fugit. Mollitia, rerum. Corporis natus, sit temporibus itaque
              dolorum aperiam sint quod!
            </p>
            {/* Add more content or components as needed */}
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Image
              src={imgSrc1}
              alt="Circular Photo"
              roundedCircle
              style={{ width: "250px", height: "250px" }}
            />
          </Col>
        </Row>
        <hr className="mt-0" />
      </div>

      <div className="mx-20 my-7">
        <Row className="align-items-center">
          <hr className="mb-0" />
          <Col xs={12} md={4} className="text-center">
            <Image
              src={imgSrc2}
              alt="Circular Photo"
              roundedCircle
              style={{ width: "250px", height: "250px" }}
            />
          </Col>
          <Col xs={12} md={8}>
            <h4> Vivek Kumar</h4>
            <h5>SDE-1</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              odit animi cum neque consectetur quibusdam minima quae harum
              fugit. Mollitia, rerum. Corporis natus, sit temporibus itaque
              dolorum aperiam sint quod!
            </p>
            {/* Add more content or components as needed */}
          </Col>
        </Row>
        <hr className="mt-0" />
      </div>
    </div>
  );
};

export default DefaultLayoutHoc(Aboutus);
