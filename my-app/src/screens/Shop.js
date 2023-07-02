// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import ShopItem from "../components/ShopItem";
// import Locatenav from "../components/Locatenav";
// import BottomBar from "../components/BottomBar";
// import axios from "axios";
// import "../my.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import Paginate from "../components/Paginate";
// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../actions/productActions";
// function Shop() {
//   //  const [shop, setShop] = useState([])
//   const location = useLocation();

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   const { error, loading, products, page, pages } = productList;

//   let keyword = location.search;

//   console.log(keyword);
//   useEffect(() => {
//     Aos.init({ duration: 2500 });
//     //  let keyword = history.location.search
//     dispatch(listProducts(keyword));
//     // async function fetchProducts(){
//     //   const {data} = await axios.get('/api/products/')
//     //   setProducts(data)
//     // }

//     // fetchProducts()
//     //in order to use await wrap the entire function in async
//   }, [dispatch, keyword]);
//   //  useEffect(() => {

//   //       async function fetchProducts(){
//   //         const {data} = await axios.get('/api/products/')
//   //         setShop(data)
//   //       }

//   //       fetchProducts()

//   //  },[])

//   return (
//     <div
//       style={{ backgroundColor: "#F5EBE0", height: "100%" }}
//       className="fontt hei"
//       data-aos="fade-down"
//     >
//       <Locatenav />

//       <h2
//         className="text-center"
//         style={{
//           alignContent: "center",
//           marginBottom: "20px",
//           fontWeight: "bold",
//         }}
//       >
//         Shop
//       </h2>
//       <div
//         style={{
//           width: "100%",
//           height: "55px",
//           left: "0px",
//           top: "153px",
//           backgroundColor: "#546d64",
//         }}
//       >
//         <div className="py-3" style={{ left: 100 }}>
//           <a href="#all" className="my-auto" style={styles.filters}>
//             {" "}
//             All{" "}
//           </a>
//           <a href="#food" style={styles.filters}>
//             Food
//           </a>
//           <a href="#medicine" style={styles.filters}>
//             Medicine
//           </a>
//         </div>
//       </div>
//       <Container style={{ marginBottom: "15px" }}>
//         {/* if(products.length == 0){
//               <p>No Results </p>
//           } */}

//         <div>
//           <div className="py-10">
//             <Row>
//               {products.length === 0 ? (
//                 <div style={{ marginBottom: "300px" }}>
//                   <p
//                     style={{
//                       margin: "auto",
//                       fontSize: "30px",
//                       marginTop: "20px",
//                       marginBottom: "87px",
//                       textAlign: "center",
//                     }}
//                   >
//                     No Results
//                   </p>
//                 </div>
//               ) : (
//                 products.map((items) => (
//                   //  <Col key={items._id} sm={12} md={6} lg={4} xl={3} style={{display:"inline-block" , alignItems:'center'}}>
//                   //    /* <h3>{items.name}</h3> */
//                   <Col key={items._id} sm={12} md={6} lg={4} xl={3}>
//                     <ShopItem item={items} />
//                   </Col>
//                 ))
//               )}
//             </Row>
//           </div>
//           {/* <div className='my-auto' style={{
// // position: "absolute",
// width: "234px",
// height: "42px",
// textAlign:"center",
// top: "1111px",
// margin:"auto",
// background: "#33292A",
// color:'white'}}><p style={{paddingTop:"8px"}}>Page 1 2 3</p>

//     </div> */}
//           <Paginate page={page} pages={pages} keyword={keyword} />
//         </div>
//       </Container>
//       <BottomBar />
//     </div>
//   );
// }
// const styles = {
//   filters: {
//     color: "white",
//     textDecoration: "none",
//     margin: 3,
//     paddingLeft: 9,
//     fontSize: "16px",
//   },
// };
// export default Shop;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import ShopItem from "../components/ShopItem";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import Paginate from "../components/Paginate";
import Aos from "aos";
import "aos/dist/aos.css";
function Shop() {
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;
  let keyword = location.search;

  useEffect(() => {
    Aos.init({ duration: 1200 });
    dispatch(listProducts(keyword, filter));
  }, [dispatch, keyword, filter]);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredProducts = products.filter((product) => {
    if (filter === "all") {
      return true;
    }
    return product.category.toLowerCase() === filter;
  });

  return (
    <div
      style={{ backgroundColor: "#f2ede1", height: "100%" }}
      data-aos="fade-down"
      className="newext"
    >
      <Locatenav />
      <h2
        className="text-center"
        style={{
          marginBottom: "20px",
          fontFamily: "Bebas Neue",
          letterSpacing: ".15em",
          fontSize: "50px",
        }}
      >
        SHOP
      </h2>
      <div
        style={{
          width: "100%",
          height: "55px",
          left: "0px",
          top: "153px",
          backgroundColor: "#2a7075",
        }}
      >
        <div className="py-3" style={{ left: 100, textDecoration: "none" }}>
          <a
            href="#all"
            className="my-auto"
            // style={filter === "all" ? styles.activeFilter : styles.filters}
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "50px",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
            onClick={() => handleFilter("all")}
          >
            All
          </a>
          <a
            href="#food"
            // style={filter === "food" ? styles.activeFilter : styles.filters}
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "50px",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
            onClick={() => handleFilter("food")}
          >
            Food
          </a>
          <a
            href="#medicine"
            // style={filter === "medicine" ? styles.activeFilter : styles.filters}
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "50px",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
            onClick={() => handleFilter("medicine")}
          >
            Medicine
          </a>
        </div>
      </div>
      <Container style={{ marginBottom: "15px" }}>
        <div>
          <div className="py-10">
            <Row>
              {filteredProducts.length === 0 ? (
                <div style={{ marginBottom: "300px" }}>
                  <p
                    style={{
                      margin: "auto",
                      fontSize: "30px",
                      marginTop: "20px",
                    }}
                  >
                    No Results
                  </p>
                </div>
              ) : (
                filteredProducts.map((items) => (
                  <Col key={items._id} sm={12} md={6} lg={4} xl={3}>
                    <ShopItem item={items} />
                  </Col>
                ))
              )}
            </Row>
          </div>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      </Container>
      <BottomBar />
    </div>
  );
}

const styles = {
  filters: {
    color: "white",
    textDecoration: "none",
    margin: 3,
    paddingLeft: 20,
    fontSize: "16px",
  },
};
export default Shop;
