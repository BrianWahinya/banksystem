import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  InputGroup,
  Input,
  InputGroupText,
  Button,
  Spinner,
  FormGroup,
  Label
} from "reactstrap";
import { FaIcon } from "../../../components";
import { isValid } from "../../../utils/utils";
import "./crud.scss";

const defaultFieldData = {
  docType: "",
  docId: "",
  accountType: ""
};

const AddAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fieldData, setFieldData] = useState(defaultFieldData);
  const changeVal = (e) => {
    // console.log(e);
    const id = e.target.id;
    const val = e.target.value;
    setFieldData((fd) => ({ ...fd, [id]: val }));
  };
  const addAccount = (e) => {
    const objVals = Object.values(fieldData);
    // console.log("obj", objVals);
    if (isValid(objVals)) {
      console.log("valid fields");
      return;
    }
    console.log("invalid fields");
  };
  return (
    <div className="bankCrud">
      <Container>
        <Row>
          <Col className="col" sm={{ offset: 0, size: 12 }}>
            <Card>
              <CardBody>
                <FormGroup floating size="sm">
                  <Input
                    id="docType"
                    name="docType"
                    placeholder="Document Type"
                    type="text"
                    onChange={changeVal}
                    value={fieldData.docType}
                  />
                  <Label for="docType">Document Type</Label>
                </FormGroup>
                <FormGroup floating size="sm">
                  <Input
                    id="docId"
                    name="docId"
                    placeholder="Document Id"
                    type="text"
                    onChange={changeVal}
                    value={fieldData.docId}
                  />
                  <Label for="docId">Document Id</Label>
                </FormGroup>
                <FormGroup floating size="sm">
                  <InputGroupText>Generated customer info</InputGroupText>
                </FormGroup>
                <FormGroup floating size="sm">
                  <Input
                    id="accountType"
                    name="accountType"
                    placeholder="Account Type"
                    type="text"
                    onChange={changeVal}
                    value={fieldData.accountType}
                  />
                  <Label for="accountType">Account Type</Label>
                </FormGroup>
                <Button
                  color="success"
                  disabled={isLoading}
                  onClick={addAccount}
                >
                  {isLoading ? (
                    <>
                      <Spinner size="sm">Loading...</Spinner>
                      <span> Loading</span>
                    </>
                  ) : (
                    <span>
                      <FaIcon id="add" />
                    </span>
                  )}
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddAccount;
