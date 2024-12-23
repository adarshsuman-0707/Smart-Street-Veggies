import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import AccountSettings from './AccountSettings'; // Import your AccountSettings component or other components
import image from '../assets/dashboardLogo.avif'
import '../StyleSheet/Dashboard.css'
import PurchaseHistory from './PurchaseHistory'
import Wallet from './Wallet';
import {getFromLocalStorage} from '../services/operations/SecureLocal'
import Notifications from './Notification';
import Footer from '../components/Footer';

// Importing other components
function Dashboard() {
  // State to manage which section is active
  const [activeSection, setActiveSection] = useState('account');
  let ans=getFromLocalStorage('userData')
// let FirstName=getFromLocalStorage("firstName")
// let LastName=getFromLocalStorage("lastName")

  console.log(ans,"Dashboard ka h");
  // Render the main content based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'account':
        return <AccountSettings />;
      case 'wallet':
        return <Wallet />;
      case 'purchaseHistory':
        return <PurchaseHistory />;
      case 'notifications':
        return <Notifications />;
      default:
        return <AccountSettings />;
    }
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


  return (<>
    <Container fluid className='mt-1' >
      <Row className='p-3'  style={{ background: "#2B4F61" }}>
        {/* Sidebar Navigation */}
        <Col xs={12} md={3} className="sidebar  p-4 rounded" style={{ background: "#2B4F61" }}>
          <div className="text-center mb-4">
            <img
              src={image} // Placeholder for logo
              alt="Logo"
              className=" animate__animated animate__fadeIn animate__delay-1s  img-fluid rounded-circle mt-4 mb-2"
              style={{ height: "150px", width: "150px" }}
            />
            <h5 className="text-white animate__animated animate__fadeIn animate__delay-1s ">{ans.accountType}</h5>
            <p className="text-white animate__animated animate__fadeIn animate__delay-1s ">{`userName : ${capitalizeFirstLetter(ans.firstName)} ${capitalizeFirstLetter(ans.lastName)}`}</p>
            <p className="text-white animate__animated animate__fadeIn animate__delay-1s ">{`Contact no. : ${ans.number}`}</p>

          </div>
          <Nav className="flex-column">
            <Nav.Item className="mb-2">
              <Button
                variant="link"
                className="animate__animated animate__fadeInLeft text-start w-100 sidebar-button "
                onClick={() => setActiveSection('account')}
              >
                Account Settings
              </Button>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Button
                variant="link"
                className=" animate__animated animate__fadeInLeft text-start w-100 sidebar-button"
                onClick={() => setActiveSection('wallet')}
              >
                My Wallet
              </Button>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Button
                variant="link"
                className="animate__animated animate__fadeInLeft text-start w-100 sidebar-button"
                onClick={() => setActiveSection('purchaseHistory')}
              >
                Purchase History
              </Button>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Button
                variant="link"
                className="text-start w-100 sidebar-button animate__animated animate__fadeInLeft"
                onClick={() => setActiveSection('notifications')}
              >
                Notifications
              </Button>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Main Content Area */}
        <Col xs={12} md={9} className="p-3 bg-white rounded">
          {renderSection()}
        </Col>
      </Row>
    
 
    </Container> 
    <div className="HandleFooter container"> 
      <Footer/>
      </div>  </>
  );
}

// Placeholder components for other sections



// Placeholder components for other sections





export default Dashboard;


// import React from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// function Dashboard() {
//   return (
//     <Container fluid style={{ maxWidth: '800px', marginTop: '20px' }}>
//       <h2 className="text-center">Account Settings</h2>
//       <Row>
//         {/* Profile Details Section */}
//         <Col xs={12} md={8}>
//           <Card className="p-4 mb-4">
//             <h4>Update Profile Details</h4>
//             <Form>
//               <Form.Group controlId="formName" className="mb-3">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" />
//               </Form.Group>
//               <Form.Group controlId="formEmail" className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" />
//               </Form.Group>
//               <Form.Group controlId="formMobile" className="mb-3">
//                 <Form.Label>Mobile Number</Form.Label>
//                 <div className="d-flex">
//                   <span className="border px-3 py-2">+91</span>
//                   <Form.Control type="text" placeholder="1234567890" />
//                 </div>
//               </Form.Group>
//               <Button variant="primary" type="submit" className="mt-2">
//                 Save
//               </Button>
//             </Form>
//           </Card>

//           {/* Delete Profile Section */}
//           <Card className="p-4">
//             <h4>Delete Profile</h4>
//             <Form.Check
//               type="checkbox"
//               label="I agree to delete my profile"
//               className="mb-2"
//             />
//             <p className="text-muted">
//               Please note that if you choose to delete your profile, your Greengrocer account would no longer exist. You would lose access to the resources provided.
//             </p>
//             <Button variant="danger">Delete</Button>
//           </Card>
//         </Col>

//         {/* Sidebar Section */}
//         <Col xs={12} md={4}>
//           <Card className="p-4 text-center mb-4">
//             {/* Replace Image with a Logo */}
//             <div className="mb-3">
//               <img
//                 src="https://via.placeholder.com/100" // Placeholder for logo
//                 alt="Logo"
//                 className="img-fluid rounded-circle"
//               />
//             </div>
//             <h5>Customer</h5>
//             <p>Hardik Dhakite</p>
//           </Card>
//           <Card className="p-2 mb-2 text-center">
//             <Button variant="link" className="text-decoration-none">Account Settings</Button>
//           </Card>
//           <Card className="p-2 mb-2 text-center">
//             <Button variant="link" className="text-decoration-none">My Wallet</Button>
//           </Card>
//           <Card className="p-2 mb-2 text-center">
//             <Button variant="link" className="text-decoration-none">Purchase History</Button>
//           </Card>
//           <Card className="p-2 text-center">
//             <Button variant="link" className="text-decoration-none">Notification</Button>
//           </Card>
//         </Col>
//       </Row>
//       <footer className="text-center mt-4">
//         <p>2024 © Smart Street Veggies</p>
//       </footer>
//     </Container>
//   );
// }

// export default Dashboard;
