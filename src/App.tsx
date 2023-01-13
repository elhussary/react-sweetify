import Modal, { Positions } from "./components/ui/modal/Modal";

function App() {
  return (
    <>
      <h1>Header</h1>

      <Modal buttonText="Login" className="test">
        {/* Modal content goes here */}
        <p>Login</p>
      </Modal>

      <Modal buttonText="Register" position={Positions.MiddleCenter} className="md">
        {/* Modal content goes here */}
        <p>Register</p>
      </Modal>
    </>
  );
}

export default App;
