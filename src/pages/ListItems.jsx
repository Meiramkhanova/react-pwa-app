import { useState } from "react";
import Expense from "../components/Expense";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DELETE_ITEM, EDIT_ITEM, SEARCH_QUERY } from "../redux/slices/slice";
import { getFilteredExpenses } from "../selectors";

export default function ListItems() {
  const [editingItemId, setEditingItemId] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adder.list);
  const search = useSelector((state) => state.adder.searchQuery);
  const filteredData = useSelector(getFilteredExpenses);
  const navigateTo = useNavigate();
  const handleClickMainPage = () => {
    navigateTo("/");
  };

  const handleClickToAddPage = () => {
    navigateTo("/add");
  };

  const onDelete = (id) => {
    dispatch(DELETE_ITEM({ id }));
  };

  const totalAmount = () => {
    return data.reduce((acc, current) => acc + parseFloat(current.amount), 0);
  };

  const handleEdit = (id) => {
    setEditingItemId(id);
  };

  const handleSearchChange = (event) => {
    dispatch(SEARCH_QUERY(event.target.value));
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  const onSaveEdit = (id, editedName, editedAmount, editedDate) => {
    dispatch(EDIT_ITEM({ id, editedName, editedAmount, editedDate }));
    setEditingItemId(null);
  };

  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>List</h1>
      <Input
        onChange={handleSearchChange}
        type="search"
        name="search"
        placeholder="Search"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              onDelete={onDelete}
              onSaveEdit={onSaveEdit}
              isEditing={editingItemId === expense.id}
              onEdit={handleEdit}
              onCancelEdit={handleCancelEdit}
            />
          ))}
        </tbody>
      </table>
      <WrapperOfButtons>
        <Button onClick={handleClickMainPage}>Main Page</Button>
        <Button onClick={handleClickToAddPage}>Add</Button>
      </WrapperOfButtons>
      <div>
        <h1>Total Amount: ${totalAmount()}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Button = styled("button")`
  margin-top: 50px;
  padding: 15px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  background-color: #94a3b8;
`;

const WrapperOfButtons = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled("input")`
  border: 1px solid #94a3b8;
  padding: 18px;
  margin-bottom: 15px;
  width: 100%;
`;
