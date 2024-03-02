import "./posts.scss"
import Post from "../../components/post/Post"



const Posts = () => {

  //TEMPORARY 

  const posts = [
    {
      id:1,
      name: "onyeka Aisosa",
      userId:1,
      profilePic:"https://images.pexels.com/photos/3685406/pexels-photo-3685406.jpeg?cs=srgb&dl=pexels-ogo-johnson-3685406.jpg&fm=jpg&_gl=1*y8au08*_ga*ODg1MTQxMDg1LjE3MDczODE4Njg.*_ga_8JE65Q40S6*MTcwNzkyMTY1NS44LjEuMTcwNzkyMTcxMy4wLjAuMA..",
      desc:"Are you searching for the perfect love poems for her, in order to make your girlfriend or wife feel truly special and cherished? Look no further!",
      img:"https://images.pexels.com/photos/14077113/pexels-photo-14077113.png?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id:2,
      name: "chinaye praise",
      userId:2,
      profilePic:"https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=400",
      desc:"We've created a diverse selection of beautiful, heartfelt, and touching poems that are ideal for those moments when you find yourself at a loss for words to convey the depth of your love for your significant other. ",
      
    },

  ];
  return (
    <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={posts.id}/>

        
      ))}
    </div>
  )
}

export default Posts    