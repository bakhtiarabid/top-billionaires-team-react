import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Leader.css";

const Leader = (props) => {
   //    console.log(props.person);
   const { img, name, age, residence, role, netWorth, salary, otherAssets } =
      props.person;
   return (
      <div className="col-md-4">
         <Card className="my-3 img-style">
            <Card.Img variant="top" src={img} />
            <Card.Body>
               <Card.Title> Name: {name} </Card.Title>
               <Card.Text>
                  {" "}
                  <span className="fw-bolder">Role: </span> {role}
               </Card.Text>
               <Card.Text>
                  {" "}
                  <span className="fw-bolder">Age:</span> {age}
               </Card.Text>
               <Card.Text>
                  {" "}
                  <span className="fw-bolder">Residence:</span> {residence}
               </Card.Text>
               <Card.Text>
                  {" "}
                  <span className="fw-bolder">Net Worth:</span> {netWorth}
               </Card.Text>
               <Card.Text>
                  {" "}
                  <span className="fw-bolder">Salary: </span> ${salary}
               </Card.Text>
               <Card.Text>
                  {" "}
                  <span className="fw-bolder">Other Assets: </span>
                  {otherAssets?.asset1}, {otherAssets?.asset2}
               </Card.Text>
            </Card.Body>
            <div className="">
               <Button
                  onClick={() => props.handledToCart(props.person)}
                  className="btn btn btn-info my-3 w-50"
               >
                  <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
               </Button>{" "}
            </div>
         </Card>
      </div>
   );
};

export default Leader;
