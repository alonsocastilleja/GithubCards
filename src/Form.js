import React from 'react';
import axios from 'axios'

class Form extends React.Component {
    userNameInput = React.createRef();
    handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const resp = await axios.get(`https://api.github.com/users/${this.userNameInput.current.value}`);
        this.props.onSubmit(resp.data);
        this.userNameInput.current.value = '';
         console.log('submitted');
         console.log(this.userNameInput.current.value);
         console.log(resp.data);
      } catch (error){
        console.error(error);
        console.log('Houston we have a problem!');
      }
    }
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          placeholder="Github username" 
          ref={this.userNameInput} 
          required/>
          <button className="btn-styling">Add card</button>
        </form>
      );
    }
  }

  export default Form;