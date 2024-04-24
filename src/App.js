import "./App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <StyledContainer>
      <h1>PWA App</h1>
      <Wrapper>
        <Link to="/add">
          <Button type="add">Add</Button>
        </Link>
        <Link to="/list">
          <Button type="list">See List</Button>
        </Link>
        <Link to="/items">
          <Button type="items">See Items</Button>
        </Link>
      </Wrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled("div")`
  text-align: center;
  margin-top: 105px;
`;

const Wrapper = styled("div")`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const Button = styled("button")`
  ${({ type }) =>
    type === "list"
      ? "background-color: #94a3b8;"
      : "background-color: #cbd5e1;"}
  padding: 25px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
`;

export default App;
