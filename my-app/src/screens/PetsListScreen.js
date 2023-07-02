// import React, { useEffect } from "react";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import { LinkContainer } from "react-router-bootstrap";
// import { Table, Button, Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { listCats, listDogs } from "../actions/petActions";
// import Locatenav from "../components/Locatenav";
// import BottomBar from "../components/BottomBar";
// import { useNavigate } from "react-router-dom";
// import { deletePet } from "../actions/petActions";
// import Aos from "aos";
// import "aos/dist/aos.css";
// function PetsListScreen() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const catList = useSelector((state) => state.catList);
//   const { loading, error, cats } = catList;
//   const dogList = useSelector((state) => state.dogList);
//   const { loading: dogloading, error: dogerror, dogs } = dogList;
//   console.log({ dogs });
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const petDelete = useSelector((state) => state.petDelete);
//   const { success: successDelete } = petDelete;
//   useEffect(() => {
//     Aos.init({ duration: 1200 });
//     if (userInfo && userInfo.isAdmin) {
//       dispatch(listCats());
//       dispatch(listDogs());
//     } else {
//       navigate("/login");
//     }
//   }, [dispatch, navigate, successDelete, userInfo]);

//   const deleteHandler = (id) => {
//     if (window.confirm("Are you sure you want to delete this pet?")) {
//       dispatch(deletePet(id));
//     }
//   };
//   return (
//     <div className="hei" style={{ fontFamily: "Krub" }} data-aos="fade-down">
//       <Locatenav />
//       <Container>
//         <h1>PETS</h1>
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant="danger">{error}</Message>
//         ) : (
//           <>
//             <Table striped bordered hover responsive className="table-small">
//               <thead>
//                 <tr>
//                   <th>PET ID</th>
//                   <th>CATEGORY</th>
//                   <th>STATUS</th>
//                   <th>AREA</th>
//                   <th>NUMBER</th>
//                   <th>PET TAG</th>
//                   <th>EMAIL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cats.map((cat) => (
//                   <tr key={cat._id}>
//                     <td>{cat._id}</td>
//                     <td>{cat.category}</td>
//                     <td>{cat.status}</td>
//                     <td>{cat.area}</td>
//                     <td>{cat.number}</td>
//                     <td>{cat.pTag}</td>
//                     <td>{cat.email}</td>
//                     <td>
//                       <LinkContainer to={`/admin/pet/${cat._id}/`}>
//                         <Button variant="light" className="btn-sm">
//                           <i className="fas fa-edit"></i>
//                         </Button>
//                       </LinkContainer>

//                       <Button
//                         variant="danger"
//                         className="btn-sm"
//                         onClick={() => deleteHandler(cat._id)}
//                       >
//                         <i className="fas fa-trash"></i>
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//             <Table striped bordered hover responsive className="table-small">
//               <thead>
//                 <tr>
//                   <th>DOG ID</th>
//                   <th>CATEGORY</th>
//                   <th>STATUS</th>
//                   <th>AREA</th>
//                   <th>NUMBER</th>
//                   <th>PET TAG</th>
//                   <th>EMAIL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {dogs.map((dog) => (
//                   <tr key={dog._id}>
//                     <td>{dog._id}</td>
//                     <td>{dog.category}</td>
//                     <td>{dog.status}</td>
//                     <td>{dog.area}</td>
//                     <td>{dog.number}</td>
//                     <td>{dog.pTag}</td>
//                     <td>{dog.email}</td>
//                     <td>
//                       <LinkContainer to={`/admin/pet/${dog._id}/`}>
//                         <Button variant="light" className="btn-sm">
//                           <i className="fas fa-edit"></i>
//                         </Button>
//                       </LinkContainer>

//                       <Button
//                         variant="danger"
//                         className="btn-sm"
//                         onClick={() => deleteHandler(dog._id)}
//                       >
//                         <i className="fas fa-trash"></i>
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </>
//         )}
//       </Container>
//       <BottomBar />
//     </div>
//   );
// }

// export default PetsListScreen;

import React, { useEffect } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listCats, listDogs } from "../actions/petActions";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { useNavigate } from "react-router-dom";
import { deleteDog, deletePet } from "../actions/petActions";
import Aos from "aos";
import "aos/dist/aos.css";

function PetsListScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const catList = useSelector((state) => state.catList);
  const { loading, error, cats } = catList;
  const dogList = useSelector((state) => state.dogList);
  const { loading: dogloading, error: dogerror, dogs } = dogList;
  console.log({ dogs });
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const petDelete = useSelector((state) => state.petDelete);
  const { success: successDelete } = petDelete;
  const dogDelete = useSelector((state) => state.dogDelete);
  const { success: successDogDelete } = dogDelete;
  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (userInfo && userInfo.isAdmin) {
      dispatch(listCats());
      dispatch(listDogs());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, successDelete, successDogDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      dispatch(deletePet(id));
    }
  };

  const dogHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      dispatch(deleteDog(id));
    }
  };
  return (
    <div
      className="hei newtext"
      style={{ height: "100%", backgroundColor: "#f2ede1" }}
      data-aos="fade-down"
    >
      <Locatenav />
      <Container>
        <h1
          style={{
            fontFamily: "Bebas Neue",
            letterSpacing: ".15em",
            fontSize: "50px",
          }}
        >
          CATS
        </h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            {cats && cats.length > 0 ? (
              <Table striped bordered hover responsive className="table-small">
                <thead>
                  <tr>
                    <th>PET ID</th>
                    <th>CATEGORY</th>
                    <th>STATUS</th>
                    <th>AREA</th>
                    <th>NUMBER</th>
                    <th>PET TAG</th>
                    <th>EMAIL</th>
                  </tr>
                </thead>
                <tbody>
                  {cats.map((cat) => (
                    <tr key={cat._id}>
                      <td>{cat._id}</td>
                      <td>{cat.category}</td>
                      <td>{cat.status}</td>
                      <td>{cat.area}</td>
                      <td>{cat.number}</td>
                      <td>{cat.pTag}</td>
                      <td>{cat.email}</td>
                      <td>
                        <LinkContainer to={`/admin/pet/${cat._id}/`}>
                          <Button variant="light" className="btn-sm">
                            <i className="fas fa-edit"></i>
                          </Button>
                        </LinkContainer>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(cat._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
            <h1
              style={{
                fontFamily: "Bebas Neue",
                letterSpacing: ".15em",
                fontSize: "50px",
              }}
            >
              DOGS
            </h1>
            {dogs && dogs.length > 0 ? (
              <Table striped bordered hover responsive className="table-small">
                <thead>
                  <tr>
                    <th>DOG ID</th>
                    <th>CATEGORY</th>
                    <th>STATUS</th>
                    <th>AREA</th>
                    <th>NUMBER</th>
                    <th>PET TAG</th>
                    <th>EMAIL</th>
                  </tr>
                </thead>
                <tbody>
                  {dogs.map((dog) => (
                    <tr key={dog._id}>
                      <td>{dog._id}</td>
                      <td>{dog.category}</td>
                      <td>{dog.status}</td>
                      <td>{dog.area}</td>
                      <td>{dog.number}</td>
                      <td>{dog.pTag}</td>
                      <td>{dog.email}</td>
                      <td>
                        <LinkContainer to={`/admin/pet/dog/${dog._id}/`}>
                          <Button variant="light" className="btn-sm">
                            <i className="fas fa-edit"></i>
                          </Button>
                        </LinkContainer>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => dogHandler(dog._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
          </>
        )}
      </Container>
      <BottomBar />
    </div>
  );
}

export default PetsListScreen;
