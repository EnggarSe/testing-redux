import React, { useState, useEffect } from "react";
import { getDataApi, postDataAPI, deleteDataAPI, editDataAPI } from "../Actions/PostActions";
import { connect } from "react-redux";

function Post(props) {
  console.log("props", props);
  const [name, setName] = useState('');
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const getApi = props.getDataApi;

  useEffect(() => {
    console.log(props.todo, 'TODO');
    
    getApi();
  }, [getApi]);

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      do: name,
    };
    props.postDataAPI(obj);
  };

  const deleteData = (id, e) => {
     props.deleteDataAPI(id)
  }

  const EditData = (id, e) => {
     let editDo = prompt("Ubah Todo Dengan : " )
     setTodo(editDo)
     
    

  }

  return (
    <div>
      <h1>POST</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      {props.name.map((item, index) => (
         <div>
            <li key={index}>{item.createdAt}-------------------{item.do}</li>
            <button key = {index} onClick={(e) => deleteData(item.id, e)}>Delete</button> 
            <button key = {index} onClick={(e) => EditData(item.id, e)} >Edit</button>  
         </div>
          
      ))}
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("INI STATE PROPS", props);
  return {
    name: props.Post.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataApi: () => dispatch(getDataApi()),
    postDataAPI: (obj) => dispatch(postDataAPI(obj)),
    deleteDataAPI : (obj) => dispatch(deleteDataAPI(obj)),
    editDataAPI : (obj) => dispatch(editDataAPI(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
