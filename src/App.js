import React, { Component } from 'react'
import './App.css';
import Me from "./me.jpg";
import Profile from './profile';
class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        time:true,
        digit:0,
      fullName:"Hana Ben Amor",
      bio:"DM me for collaboration",
      imgSrc:Me,
      profession:"Sofwtare Engineering Student",
      show: true,
   
    }
    
  }
  componentDidMount=()=>{
 this.myTimer=setInterval(()=>{
  this.setState(prevState=>({
    digit:prevState.digit+1,
  }));
 },1000)
  }
handleClick=()=>{<>{
  this.state.digit
}
</>}

   
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  showtime=()=>this.setState((prev)=>({time:!prev.time}));
  render() {

    return (
      <div className='App'>
        <button style={{backgroundColor:"red",borderStyle:'solid',borderColor:"red",borderRadius:40,padding:20,fontWeight:'bold',marginBottom:10}} onClick={this.toggle}>
        {this.state.show ? `Show Profile` : 'Hide Profile'}
        </button>    
        {this.state.show && <div>
          <div >
          <p style={{margin:100,fontStyle:"italic",fontSize:30,letterSpacing:7}}>Click on this button to show <br></br> the Profile </p>
          </div>
         
        
          </div>}

          {!(this.state.show) && <div>
            <Profile data={this.state}/>
            <small style={{color:"red"}}> To show the time interval since the last component<br>
            </br></small>  
            <button style={{backgroundColor:"red",borderStyle:'solid',borderColor:"red",borderRadius:40,padding:20,fontWeight:'bold',marginTop:40,marginBottom:10}} onClick={this.showtime}>Click me</button>
            {this.state.time && <div>
            <p>{this.state.digit}</p>
            </div>
          }
              </div>
          }
          
      </div>
     );
  }
}


export default App;