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
import "./crud.scss";

const DeleteBank = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteBank = (e) => {
    console.log("delete");
  };

  return (
    <div className="bankCrud">
      <Container>
        <Row>
          <Col className="col" sm={{ offset: 0, size: 12 }}>
            <Card>
              <CardBody>
                <FormGroup floating size="sm">
                  <InputGroupText>Bank Name</InputGroupText>
                </FormGroup>
                <Button
                  color="danger"
                  disabled={isLoading}
                  onClick={deleteBank}
                >
                  {isLoading ? (
                    <>
                      <Spinner size="sm">Loading...</Spinner>
                      <span> Loading</span>
                    </>
                  ) : (
                    <span>
                      <FaIcon id="delete" />
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

export default DeleteBank;
