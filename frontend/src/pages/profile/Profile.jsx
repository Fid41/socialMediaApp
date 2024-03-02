import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts"




const Profile = () => {
  return (
    <div className="Profile">
      <div className="image">
        <img 
        src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=1024x1024&w=is&k=20&c=rsMEfrDiYh3Y2CbJ8OQYRfJZ2kOGBneREKETBn0vyjU=" 
        alt="" 
        className="cover"/>
        <img 
        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400" 
        alt="" 
        className="profilePic"/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com" >
                <FacebookTwoToneIcon fontSize="small" />
            </a>
            <a href="http://instagram.com" >
                <InstagramIcon fontSize="small" />
            </a>
            <a href="http://twitter.com" >
                <TwitterIcon fontSize="small"/>
            </a>
            <a href="http://linked.com" >
                <LinkedInIcon fontSize="small"/>
            </a>
            <a href="http://pinterest.com" >
                <PinterestIcon fontSize="small"/>
            </a>
          </div>
          <div className="center">
            <span>Onyeka Aisosa</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Metta Tech</span>
              </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  );
}

export default Profile