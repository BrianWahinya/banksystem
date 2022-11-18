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
import "./css/register.scss";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="register">
      <Container>
        <Row>
          <Col
            className="col border"
            sm={{ offset: 0, size: 12 }}
            md={{ offset: 6, size: 6 }}
            lg={{ offset: 8, size: 4 }}
          >
            <p className="titleRegister">Register</p>
            <hr />
            <Card>
              <CardBody>
                <FormGroup floating size="sm">
                  <Input
                    id="userId"
                    name="userId"
                    placeholder="User ID"
                    type="text"
                  />
                  <Label for="userId">User ID</Label>
                </FormGroup>
                <FormGroup floating size="sm">
                  <Input
                    id="fullname"
                    name="fullname"
                    placeholder="Fullname"
                    type="text"
                  />
                  <Label for="fullname">Fullname</Label>
                </FormGroup>
                <FormGroup floating size="sm">
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <Label for="fullname">Email</Label>
                </FormGroup>
                <FormGroup floating size="sm">
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <Label for="password">Password</Label>
                </FormGroup>
                <FormGroup floating size="sm">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="confirmPassword"
                  />
                  <Label for="confirmPassword">Confirm Password</Label>
                </FormGroup>
                <Button color="success" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner size="sm">Loading...</Spinner>
                      <span> Loading</span>
                    </>
                  ) : (
                    <span>Submit</span>
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

export default Register;
