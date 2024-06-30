import React, { Component } from 'react';

class LocalStorage extends Component {
constructor()
{
    super()
    this.state={
        Users:[
            {
                id:1,
                name:"john",
                lastName:"Kuli",
                email:"johnk@gmail.com",
                password:"johnkuli"

            },
            {
                id:2,
                name:"julia",
                lastName:"Makensky",
                email:"juliam@gmail.com",
                password:"juliamakensky"

            }
        ]
    }
}
setData=()=>{
    localStorage.setItem("Users",JSON.stringify(this.state.Users))
}
getData=()=>{
    this.setState=({
       Users: [JSON.parse(localStorage.getItem('Users'))]
    })
    let users=JSON.parse(localStorage.getItem('Users'))
}
    render() { 
        return ( 
            
            <div>
                <button onClick={this.setData}>Click</button>
        {this.state.Users.map(p=> <div>{p.email, p.name}</div>)}
            </div>
         );
    }
}
 
export default LocalStorage;