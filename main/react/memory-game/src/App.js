import { Navbar, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import About from './components/About';
import GameSection from './components/GameSection';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="bg-dark justify-content-between">
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          Memory Game
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-info" style={{ marginRight: '1rem' }}>
            Home
          </Button>
          <Button variant="outline-info" onClick={handleShow}>
            About
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <GameSection />

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        style={{ marginTop: '15rem ', opacity: '0.8' }}
      >
        <About />
      </Modal>
    </>
  );
}

export default App;
