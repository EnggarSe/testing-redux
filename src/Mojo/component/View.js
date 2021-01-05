import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import action from '../redux/action'

const {getDataList} = action

class View extends Component {
   constructor (props) {
      super(props)
      this.state = {
       sol : null
      }
    }

    static getDerivedStateFromProps (nextProps, prevState) {
       console.log(nextProps, 'Props Next');
       
      if (nextProps.viewState.viewList !== prevState.viewList) {
        console.log(nextProps, 'NEXT');
        console.log(prevState, 'PREV');
       }
       return null
      }

   componentDidMount() {
      this.props.getDataList()
   }

    render(){
       return(
         <div>
             <h1>Hello World</h1>
         </div>
            
          
       )
    }
    
}

export default connect(
   state => ({
      viewState : state.View
   }),
   {getDataList}
)(View)