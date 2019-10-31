import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AllUsers from './AllUsers'



class App extends Component {
  constructor(props) {
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
    
    this.state = { data: [] }
    axios.get(`http://localhost/API-REST-PHALCON-PHP/user`).then(res => {
     this.setState( {data: res.data});
  })}
  /*
  loadData() {
		fetch('http://localhost/API-REST-PHALCON-PHP/user')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
  }
  componentDidMount() {
		this.loadData()
	}
  
 componentDidMount() {
  axios.get(`http://localhost/API-REST-PHALCON-PHP/user`).then(res => {
    this.setState( {data: res.data});
  });
}
*/
handleChangeName = event => {
   this.setState({name:event.target.value});
 }
 handleChangeEmail = event => {
    this.setState({email:event.target.value});
  }
 //POST request
 handleSubmit = event => {
   event.preventDefault();
   axios({
      method: 'post',
      url: `http://localhost/API-REST-PHALCON-PHP/user/save`,
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
    });}
         
      );
 }
//DELETE request
 handleDelete = (id) => {
  let axiosConfig = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  };

  axios({
    method: 'delete',
    url: `http://localhost/API-REST-PHALCON-PHP/user/${id}`,
    headers: {
              'Content-Type' : 'text/plain' 
    }, 
  }).then(res => this.setState((prevState) => ({ 
    data: prevState.data.filter((option) => {
      return id !== option.id;
    })
    
  })));
    
  console.log(id);
}

//UPDATE(PUT) request
//PUT update all resource



handleUpdate = (id) => {
  let axiosConfig = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  };

  axios({
    method: 'put',
    url: `http://localhost/API-REST-PHALCON-PHP/user/${id}`,
    headers: {
              'Content-Type' : 'text/plain' 
    }, 
    data: {
      name:this.state.name,
      email:this.state.email,
      id_department: '2',
    }
  }).then(res => console.log(id));
    /*
    then(res => this.setState({
      data: [...this.state.data,res.data.data]
    }));
    */
  

}


  render() {
    return (
      <div className="App"> 
        <AllUsers data={this.state.data} 
        handleDelete={this.handleDelete} 
        handleUpdate={this.handleUpdate}
        />
        
        <form onSubmit={this.handleSubmit}>
          <label><h1>Dodaj Korisnika</h1></label>
          Ime:
          <input type="text" name="name" onChange={this.handleChangeName}/>
          <br></br>
          Email:
          <input type="text" email="email" onChange={this.handleChangeEmail}/>
          <br></br>         
          <button>kreiraj</button>
        </form>
      </div>
    );
  }
}

export default App;
