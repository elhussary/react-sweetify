import Modal, { Positions } from "./components/ui/modal/Modal";

function App() {
  return (
    <>
      <h1>Header</h1>

      <Modal buttonText="Login" position={Positions.MiddleCenter} className="xs">
        {/* Modal content goes here */}
        <div style={{ paddingBottom: "1rem" }}>
          <h4 style={{ padding: "0.2rem 0" }}>Delete Your Account</h4>
          <p style={{ padding: "1rem 0", fontSize: "14px" }}>Are you sure you want to delete your account</p>
          <button>No</button>
          <button>Yes</button>
        </div>
      </Modal>

      <Modal buttonText="Register" position={Positions.MiddleCenter} className="md">
        {/* Modal content goes here */}
        <p>Register</p>
      </Modal>
    </>
  );
}

export default App;
