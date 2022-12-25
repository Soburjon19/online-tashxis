import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClickMedicProdcuts = () => {
  // const { name, pic, education, institute, title } = props.user;
  return (
    <>
      <div className="text-start">
        {" "}
        <h2 className="mb-1 fw-bold">
          Bizning <span className="fw-bold text-primary">Shifokorlarimiz</span>
        </h2>
        <div
          className="bg-primary"
          style={{
            width: "180px",
            height: "5px",
            marginBottom: "25px",
          }}
        ></div>
      </div>
      <div className="row text-start">
        <div className="col-md-4 mb-3 alert alert-primary">
          <img
            className="w-100 img-fluid mb-2 shadow p-2  rounded"  
            src="https://www.sancos.md/wp-content/uploads/2022/03/docto_no_image.jpg"
            alt="image"
          />
          <Card.Title className="fw-bold">Solihov Davron</Card.Title>
          <p className="text-start afterbannePText">Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="col-md-4 mb-3 alert alert-danger">
          <img
            className="w-100 img-fluid mb-2 shadow p-2  rounded"  
            src="https://www.sancos.md/wp-content/uploads/2022/03/docto_no_image.jpg"
            alt="image"
          />
          <Card.Title className="fw-bold">Solihov Davron</Card.Title>
          <p className="text-start afterbannePText">Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="col-md-4 mb-3 alert alert-primary">
          <img
            className="w-100 img-fluid mb-2 shadow p-2  rounded"  
            src="https://www.sancos.md/wp-content/uploads/2022/03/docto_no_image.jpg"
            alt="image"
          />
          <Card.Title className="fw-bold">Solihov Davron</Card.Title>
          <p className="text-start afterbannePText">Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          {/* <Link to={`../../service/our_specialist/${name}`}>Read
          </Link> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default ClickMedicProdcuts;
