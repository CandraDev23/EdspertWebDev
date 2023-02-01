import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";

export default function Cardd(props) {
    return (
        <>
            <Card style={{ width: '22rem', height: "auto" }}>
                <Card.Header className=" py-3 h-50 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#2D4059" }}>
                    <img className="ms-2" style={{ width: "3rem" }} src={props.logo} alt="logo" />
                    <div className="justify-content-center">
                        <h6 className="text-warning">{props.type}</h6>
                        <h5 className="text-white">{props.title}</h5>
                        <p className="text-white" style={{ fontSize: "0.8em" }}>({props.subtitle})</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-dark">{props.title}</Card.Title>
                    <Card.Title className="fs-6">{props.subtitle}</Card.Title>
                    <div className="py-lg-3" style={{ lineHeight: "8px" }}>
                        <span style={{ fontSize: "0.8em" }} className="d-flex">
                            <p className="text-muted pe-3">Batch</p>
                            <p>{props.batch}</p>
                        </span>
                        <span style={{ fontSize: "0.8em" }} className="d-flex">
                            <p className="text-muted pe-2">Mentor</p>
                            <p>{props.mentor}</p>
                        </span>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <h6 className="text-muted fs-6"><del>{props.price}</del></h6>
                        <h4>&#8594;</h4>
                        <h5 className="text-success">{props.promo}</h5>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}