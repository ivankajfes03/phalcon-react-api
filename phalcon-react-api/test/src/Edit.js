import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = { data: [] };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    componentWillMount(){
        this.getUserDetails();
    }

    getUserDetails() {
        let userId = this.props.match.params.id;
        console.log(userId);
        axios.get(`http://localhost/API-REST-PHALCON-PHP/user/${userId}`)
        .then(res => {
            this.setState({
                id:res.data.id,
                name:res.data.name,
                email:res.data.email
            }, ()=>{
                console.log(this.state);
            })
        })
    }
    //Ovo je kraci nacin kad imamo vise inputa, da ne moramo kreirati handleInput za svaki
    /*
    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }
    */
    handleChangeName = event => {
        this.setState({name:event.target.value});
      }
      handleChangeEmail = event => {
         this.setState({email:event.target.value});
       }
      //put request
      handleSubmit = event => {
        event.preventDefault();
        axios({
           method: 'put',
           url: `http://localhost/API-REST-PHALCON-PHP/user/${this.state.id}`,
           headers: {
                     'Content-Type' : 'text/plain' 
           }, 
           data: {
             name:this.state.name,
             email:this.state.email,
             id_department: '2',
         }
         }).then(res => {this.setState({ 
           data: [...this.state.data,res.data.data]
         });});
         alert('Uspjesno ste editirali, Klik na go home za nazad.');
         
      }

    render() {
        return (
            <div>
               
            <form onSubmit={this.handleSubmit}>
                <label><h1>Editiraj usera</h1></label>
                Ime:
                <input type="text" name="name" value = {this.state.name} onChange={this.handleChangeName}/>
                <br></br>
                Email:
                <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                <br></br>         
                
            <button>Edit</button>
            </form>    
            <Link to="/">Go Home</Link>
            </div>
        );
    }
}

export default Edit;