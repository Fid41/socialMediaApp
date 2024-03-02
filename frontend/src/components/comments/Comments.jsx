import { useContext, useState } from "react"
import "./comments.scss"
import {AuthContext} from "../../context/authContext";

const Comments = () => {

   const {currentUser} = useContext(AuthContext)
    //Temporary

    const comments = [
      {
        id:1,
        desc: "Whether you're in a writing rut, need an idea for a new medium, or are tired of making excuses about finding the best story idea, this list of 365 story ideas makes it easy to find an idea that works for you and get inspired!",
        name: "glory ruth",
        userId:1,
        profilepicture: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },

      {
        id:2,
        desc: "A character believes she has committed a crime someone else knows she is innocent of.",
        name: "gloy onyeka",
        userId:2,
        profilepicture: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
      }

      
    ]
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilepic} alt="" />
        <input type="text" placeholder="write a comment"/>
        <button>send</button>
      </div>
      {comments.map((comment)=>(
        <div className="comment">
          <img src={comment.profilepicture} alt=""/>
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments