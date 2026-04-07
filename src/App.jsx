import Header from "./header"
import StateUse, { Counter } from "./state"; 
import Login, { Logout , userkey} from "./login"
import Toggle from "./hideandshow";
import Multitoggle from "./multitoggle";
import User, { Student, User2 } from "./user";
import { useState } from "react";
import Wrapper from "./wrapper";
import Inputlena from "./inputlena";
import Cheakboxxx from "./cheakboxese";
import Radiodropedown from "./radiodropdown";
import TAbleloop from "./tableloop";
import College from "./college";
import USEEFFECT from "./useEFFFFECT";
import UserProfile from "./userprofile";
// Javascript Syntax Extension

const name= "Toney";
const userobj={
  name:"Ram",
  age:"22",
  email:"jhaja@hotmail.com"
}

const collegeData =[
  {
    Name: "Galgotia",
    city: "greater noida",
    site: "www.gotia.in",
    Student: [
      {
        name: "himanshu khare",
        class: "cseai",
        age: "23"

      }
    ]

  },
  {
    Name: "iet",
    city: "lucknow",
    site: "www.iet.in",
    Student: [
      {
        name: "kjbjbc",
        class: "cseai",
        age: "23"

      }
    ]

  },
  {
    Name: "iim",
    city: "banglor",
    site: "www.iimmunse.in",
    Student: [
      {
        name: "cjbsjhvaj",
        class: "cseai",
        age: "23"

      }
    ]

  },
]

let path = "https://www.shutterstock.com/image-photo/close-very-beautiful-colored-bird-260nw-2375864749.jpg"
function App() {

  let username  = "Rakesh Ray Khare"
    let umr = "61"
    let sambandh = "himanshu ke Dada"

    let userdetail = {
      name: "Meena Khare",
      age: "55",
      relation: "Himanshu's Mother"
    }

    let userdetail2 = {
      name: "AKKU",
      age: "4",
      relation: "Himanshu's Bhanji"
    }

    const [student1, setstudent1] = useState()

  return (
    <div>

      <Header />
      <h1>Hey {userkey}</h1>
      <Fruit />
      <Colour></Colour>
      <Login />
      <Logout />
      <Info />
      {operation(4,5,"+")}
      <br/>
      {operation(4,5,"-")}
      <h1>{name?name:"user not found"}</h1>
      <h1>{userobj.email}</h1>
      <img src={path} alt="" />
      <Notification />
      <StateUse />
      <Counter />
      <Toggle />
      <Multitoggle />
      <hr />
      <User name={username} age={umr} relation={sambandh} />
      <hr />
      <User2 detail={userdetail} />
      <hr />
      <User2 detail={userdetail2} />
      <hr />

      {student1 && <Student name={student1}/>}
      <button onClick={()=>{setstudent1("Ravi")}}>Update Student Name</button>
      <hr />
      <Wrapper color="Orange">
        <h1>Welcome</h1>
      </Wrapper>
      <Wrapper color="blue">
        <h1>To</h1>
      </Wrapper>
      <Wrapper color="green">
        <h1>India</h1>
      </Wrapper>
      <Wrapper color="green">
        <h1>UP</h1>
      </Wrapper>
      <hr />

      <Inputlena />
      <hr />
      <Cheakboxxx />
      <Radiodropedown />

      <hr />

      <TAbleloop />
      <hr />
      

      <h1>NESTED LOOPING</h1>
      {
        collegeData.map((college, index)=>(
          <div key={index}>
            <College college={college}/>

          </div>
        )
        
        )
      }

      <USEEFFECT />
      <hr />
      <hr />
      <UserProfile />

      

    </div>

  )
}



function Fruit() {
  return (
    <h1>
      Orange
    </h1>)
}

function Colour() {
  return (
    <h1>
      Red
    </h1>)
}

function Info(){
  function callfun(){
    alert("Parrot")
  }
  return(
    <div>
      <img src="https://images.pexels.com/photos/1453550/pexels-photo-1453550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
    <button onClick={callfun}>Click Here to Reveal The NAme of Bird</button>
    </div>
  )
}

function operation(a,b,op){
  if(op=="+"){
    return a+b;
  }
  else if(op=="-"){
    return a-b;
  }
  else return a*b;

}


function Notification(){
  const Fruit=(name)=>{
    alert(name)
  }

  return(
    <div>
      <button onClick={()=>Fruit("Apple")}>Apple</button> 
      {/* definition pass karna hota hai , calling pass nahi karna hota */}
      <button onClick={()=>Fruit("Banana")}>Banana</button>

    </div>
  )
}
export default App