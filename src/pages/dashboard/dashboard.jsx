import { Container } from "reactstrap";
import { NavBar } from "../../components";
import Admin from "./admin/admin";
import "./css/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container>
        <NavBar />
        <Admin />
      </Container>
    </div>
  );
};

export default Dashboard;
