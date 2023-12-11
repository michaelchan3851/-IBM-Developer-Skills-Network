import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10, // Decrease by 10
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button
          className="btn btn-success btn-sm rounded-circle"
          onClick={() => increaseAllocation(props.name)}
          style={{ marginRight: "5px" }}
        >
          +
        </button>
      </td>
      <td>
        {" "}
        <button
          className="btn btn-danger btn-sm rounded-circle"
          onClick={() => decreaseAllocation(props.name)}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          style={{ cursor: "pointer", color: "red" }}
        />
      </td>
    </tr>
  );
};

export default ExpenseItem;
