import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { FaIcon, LocalTable, LocalModal } from "../../components";
import AddBank from "./crud/add";
import DeleteBank from "./crud/delete";
import "./css/bank.scss";

const modalData = {
  default: {
    title: "",
    body: ""
  },
  add: {
    title: "Add Bank",
    body: <AddBank />
  },
  edit: {
    title: "Edit Bank",
    body: <p>Edit Bank</p>
  },
  delete: {
    title: "Delete Bank",
    body: <DeleteBank />
  }
};

const Bank = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openItem, setOpenItem] = useState("default");
  const [modalContent, setModalContent] = useState(modalData["default"]);

  const toggleModal = (id) => {
    setOpenItem(id);
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    setModalContent((dt) => modalData[openItem]);
  }, [openItem]);

  return (
    <>
      <div className="controls">
        <Button
          className="controlButton add"
          id="add"
          onClick={() => toggleModal("add")}
        >
          <FaIcon id="add" />
        </Button>
        <Button
          className="controlButton edit"
          id="edit"
          onClick={() => toggleModal("edit")}
        >
          <FaIcon id="edit" />
        </Button>
        <Button
          className="controlButton delete"
          id="delete"
          onClick={() => toggleModal("delete")}
        >
          <FaIcon id="delete" />
        </Button>
      </div>
      <LocalTable />
      <LocalModal
        toggle={() => toggleModal("default")}
        isOpen={isOpenModal}
        modalData={modalContent}
      />
    </>
  );
};
export default Bank;
