import React, { useEffect } from "react";
import { getDataTodos } from "../Actions/TodosActions";
import { connect } from "react-redux";

function Todos(props) {
  console.log("props", props);

  const getTodos = props.getDataTodos;

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div>
      <h1>TODOS</h1>
      {props.data.map((item, index) => (
        <li key={index}>{item.createdAt}-------------------{item.do}-------------{item.status}</li>
      ))}
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    data: props.Todos.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataTodos: () => dispatch(getDataTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
