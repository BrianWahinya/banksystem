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
  bankName: ""
};

const AddBank = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fieldData, setFieldData] = useState(defaultFieldData);
  const changeVal = (e) => {
    // console.log(e);
    const id = e.target.id;
    const val = e.target.value;
    setFieldData((fd) => ({ ...fd, [id]: val }));
  };
  const addBank = (e) => {
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
                    id="bankName"
                    name="bankName"
                    placeholder="Bank Name"
                    type="text"
                    onChange={changeVal}
                    value={fieldData.bankName}
                  />
                  <Label for="bankName">Bank Name</Label>
                </FormGroup>
                <Button color="success" disabled={isLoading} onClick={addBank}>
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

export default AddBank;
