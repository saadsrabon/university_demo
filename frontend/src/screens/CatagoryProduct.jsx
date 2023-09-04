
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Product from "../components/Product";
const CatagoryProduct =()=>{

const catagoryName =useParams()
  const [data ,setData] =useState([])
  console.log(catagoryName.cat)
useEffect(()=>{

    fetch(`http://localhost:5000/api/products/cats/${catagoryName?.cat}`)
    .then(res=>res.json())
    .then(data=> setData(data))

},[])
console.log(data)

    return(

    <>
    {
        data.map(product=><Row>

<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
        </Row> )
    }
    </>
    );
}


export default CatagoryProduct;