import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function LocalModal({ toggle, isOpen, modalData }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>{modalData.title}</ModalHeader>
      <ModalBody>{modalData.body}</ModalBody>
      {/* <ModalFooter>
        <Button color="primary">Do Something</Button>{" "}
        <Button color="secondary">Cancel</Button>
      </ModalFooter> */}
    </Modal>
  );
}

export default LocalModal;
