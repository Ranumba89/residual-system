import ExistingClients from "./existingclients";
import NewClient from "./newclient";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ClientMain = () => {
  const [modalShow, setModalShow] = useState(false);
  const [mAllClient, setmAllClient] = useState(false);
  return (
    <div>
        {/* New Clients  */}
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        New Client
      </Button>
      <NewClient show={modalShow} onHide={() => setModalShow(false)} />
      {/* All Clients  */}
      <br/>
      <Button variant="outline-primary" onClick={() => setmAllClient(true)}>
        All Clients
      </Button>{" "}
      <ExistingClients show={mAllClient} onHide={() => setmAllClient(false)} />
    </div>
  );
};
export default ClientMain;
