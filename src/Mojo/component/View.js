import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Spin, Button, Modal, Pagination, Input } from 'antd'
import action from '../redux/action'
import Moment from 'react-moment'
import { PlusOutlined } from '@ant-design/icons';
const {getDataList, addDataView, deleteDataView, editDataView} = action

class View extends Component {
   constructor (props) {
      super(props)
      this.state = {
       sol : null,
       dataAdd : '',
       modalVisible : false,
       dataEdit : '',
       dataEditId : '',
       editAble : ''
      }
    }

    static getDerivedStateFromProps (nextProps, prevState) {
       console.log(nextProps, 'Props Next');
       
      if (nextProps.viewState.viewList !== prevState.viewList) {
        console.log(nextProps, 'NEXT');
        console.log(prevState, 'PREV');
        return{
           data : nextProps.viewState
        }
       }
       return null
      }

   componentDidMount() {
      this.props.getDataList()
   }

   writeTodo(e) {
      this.setState({
         dataAdd : e.target.value
      })  
   }

   writeTodoEdit(e) {
      this.setState({
         dataEdit : e.target.value
      })  
   }

   addTodo(){
      const {dataAdd} = this.state
      if(dataAdd!== ''){
         this.props.addDataView({
            do : dataAdd
         })
      }else{
         alert('Data Kosong')
      }
   }

   deleteTodo (id){
      console.log("MASUK");
      this.props.deleteDataView(id)
   }

   showModal  (id)  {
      this.setState({
         modalVisible : true,
         dataEditId : id
      })
   }

   handleCancel = () =>{
      this.setState({
         modalVisible : false
      })
   }

   editTodo = () =>{
      const {dataEdit, dataEditId} = this.state
      this.props.editDataView({
         do : dataEdit,
         id : dataEditId,
      })
      this.setState({
         modalVisible:false
      })

   }

    render(){
      const {data} = this.state
      const load = data.loader
      console.log(data, 'DATA');
      console.log(this.state.dataAdd, 'dataAdd');
      
      

      const columns = [
         {
           title: 'ID',
           dataIndex: 'id',
           key: 'project_id',
         },
         {
           title: 'Tanggal Mulai',
           dataIndex: 'createdAt',
           key: 'date',
           render: (text) => <Moment format='DD-MM-YYYY'>{text}</Moment>,
         },
         {
            title: 'Aktivitas',
            dataIndex: 'do',
            key: 'project_id',
          },
         {
           title: 'Detail',
           key: 'detail',
           align: 'center',
           render: (val, data) => {
             return (
                <div style ={{display:'flex', justifyContent:'center'}}>
                      <Button
                        className='crowde-outlined-btn'
                        onClick={() => this.deleteTodo(data.id)} >
                        Delete
                     </Button>

                        <Button
                        className='crowde-outlined-btn'
                        onClick={()=>this.showModal(data.id)} >
                        Edit
                        </Button>
                </div>
              

               
             )
           }
         }
       ]
       return(
         <Fragment>
            <Spin spinning = {load}>
               <div style={{ marginBottom: 16, display: 'flex' }}>
               <Input onChange = {(e)=> this.writeTodo(e)} placeholder="input with clear icon"/> 
               <Button icon={<PlusOutlined/>} onClick = {()=> this.addTodo()}></Button>
               </div>
               <Table columns={columns} dataSource={data.viewList}/>

               <Modal title="Basic Modal" visible={this.state.modalVisible} onOk = {this.editTodo}  onCancel={this.handleCancel}>
               <Input onChange = {(e)=> this.writeTodoEdit(e)} placeholder="input with clear icon"/> 
               </Modal>
            </Spin>
         
            
         </Fragment>
            
          
       )
    }
    
}

export default connect(
   state => ({
      viewState : state.View
   }),
   {getDataList, addDataView, deleteDataView, editDataView}
)(View)