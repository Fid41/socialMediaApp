import { useContext } from "react";
import {AuthContext} from "../../context/authContext"
import "./stories.scss"

const Stories = () => {
   
  const {currentUser} = useContext(AuthContext);


  //TEMPORARY 

  const stories = [
    {
      id:1,
      name:"ogbe ruth",
      img:"https://images.pexels.com/photos/1396538/pexels-photo-1396538.jpeg?cs=srgb&dl=pexels-caique-nascimento-1396538.jpg&fm=jpg&_gl=1*jtvc8*_ga*ODg1MTQxMDg1LjE3MDczODE4Njg.*_ga_8JE65Q40S6*MTcwNzg0MTA3Mi42LjEuMTcwNzg0MTEwNS4wLjAuMA..",
    },
    {
      id:2,
      name:"ogbe Glory",
      img:"https://images.pexels.com/photos/3582102/pexels-photo-3582102.jpeg?cs=srgb&dl=pexels-ali-pazani-3582102.jpg&fm=jpg&_gl=1*xhfupw*_ga*ODg1MTQxMDg1LjE3MDczODE4Njg.*_ga_8JE65Q40S6*MTcwNzg0MTA3Mi42LjEuMTcwNzg0MTE1NS4wLjAuMA..",
    },
    {
      id:3,
      name:"ogbe fidelis",
      img:"https://images.pexels.com/photos/2340876/pexels-photo-2340876.jpeg?cs=srgb&dl=pexels-esther-huynh-bich-2340876.jpg&fm=jpg&_gl=1*1fygg0*_ga*ODg1MTQxMDg1LjE3MDczODE4Njg.*_ga_8JE65Q40S6*MTcwNzg0MTA3Mi42LjEuMTcwNzg0MTIwMy4wLjAuMA..",
    },
    {
      id:4,
      name:"ogbe david",
      img:"https://images.pexels.com/photos/3608010/pexels-photo-3608010.jpeg?cs=srgb&dl=pexels-lucas-souza-3608010.jpg&fm=jpg&_gl=1*6rb8vq*_ga*ODg1MTQxMDg1LjE3MDczODE4Njg.*_ga_8JE65Q40S6*MTcwNzg0MTA3Mi42LjEuMTcwNzg0MTI1My4wLjAuMA..",
    },
  ];
  
  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilepic} alt=""/>
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt=""/>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
 )
}










export default Stories