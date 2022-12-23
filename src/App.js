import './App.css';
import { Component } from "react";
// import picture from "../src/Images/cute-black-girl-afro-painting-lvk32tfg8zuweknt.jpg"

class App extends Component {
  state = {
    person: {
      fullname: "Macaulay Temitope",
      bio: "I am training to be a junior frontend developer",
      imgSrc: "https://wallpapers.com/images/high/cute-black-girl-afro-painting-lvk32tfg8zuweknt.webp",
      profession: "Frontend developer",
    },
    show: true,
  };

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div style={{width:"50%",display: "grid", alignItems: "center", margin: "0px auto"}}>
        <div className={this.state.show ? "show" : "notShow"}>
          <img src={this.state.person.imgSrc} style={{width: "200px", height:"400px", borderRadius:"60%"}} alt="profile" />
          <h1>{this.state.person.fullname}</h1>
          <h5>{this.state.person.profession}</h5>
          <p>{this.state.person.bio}</p>
        </div>
        <button onClick={this.handleToggle} style={{backgroundColor: "darkcyan", padding: "20px",border: "solid", borderRadius: "30px", fontSize: "15px", marginTop: "20px"}}>Toggle Profile</button>
      </div>
    );
  }
}

export default App;
