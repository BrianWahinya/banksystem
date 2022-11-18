import { useEffect, useState, useContext } from "react";
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
import { MainContext } from "../../context/mainContext.jsx";
import { fetchData } from "../../utils/utils.js";
import "./css/login.scss";

const Login = () => {
  const mainctx = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonCaption, setButtonCaption] = useState("Submit");
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchData("https://dog.ceo/api/breeds/image/random").then((resp) => {
      setUser(resp.status);
    });
  }, []);

  useEffect(() => {
    setButtonCaption(isLoading ? " Loading..." : "Submit");
  }, [isLoading]);

  return (
    <div className="login">
      <Container>
        <Row>
          <Col
            className="col border"
            sm={{ offset: 0, size: 12 }}
            md={{ offset: 6, size: 6 }}
            lg={{ offset: 8, size: 4 }}
          >
            <p className="titleLogin">{user}</p>
            <p className="titleLogin">Login</p>
            <hr />
            <Card>
              <CardBody>
                <FormGroup floating>
                  <Input
                    id="userId"
                    name="userId"
                    placeholder="User ID"
                    type="text"
                  />
                  <Label for="userId">User ID</Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <Label for="password">Password</Label>
                </FormGroup>

                {/* <InputGroup size="sm">
                  <InputGroupText>User ID:</InputGroupText>
                  <Input />
                </InputGroup>
                <InputGroup size="sm">
                  <InputGroupText>Password:</InputGroupText>
                  <Input />
                </InputGroup> */}

                <Button color="success" disabled={isLoading}>
                  {isLoading && <Spinner size="sm"></Spinner>}
                  <span>{buttonCaption}</span>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
