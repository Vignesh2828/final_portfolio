// ProfileInfo.js
import React from 'react';
import profilePic from '../Assets/profile_pic3.jpg'; // Import your profile picture
import './ProfileInfo.css'; // Import a CSS file for styling

function ProfileInfo() {
  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img src={profilePic} alt="Profile Pic" width="200" height="200" />
      </div>
      <div className="profile-details">
      <br></br>
      <p> Hey there!</p>
      <p>
      <i className="fa-solid fa-play fa-lg"></i> I'm Vigneshwaran Manivannan, and as you might have already read, I'm a developer. This website was made to showcase all of what I can do and plan to do. Don't judge my writing based on this section though, this is by far my shoddiest work yet.
      </p>
      <p>
      <i className="fa-solid fa-play fa-lg"></i> I got into design because I consider myself a pseudo-perfectionist, if that's even a word? As in, I hate to see things 'not look good'. So I set out on a journey to make products that people use that 'look great', and I'm forever on that path.
      </p>
      <p>
      <i className="fa-solid fa-play fa-lg"></i> I got into development because computers have always fascinated me.int i = 10; creates an integer of value 10? LIKE, WOW! But seriously, just seeing code getting converted to things we use regularly, like Facebook or Amazon, was no less than magic to me and that's where my quest to invent began.
      </p>
      <p>
      <i className="fa-solid fa-play fa-lg"></i> I got into photography for a very philosophical reason and a very weird one at that. To me, photography is no less than time-travel. When I look at a photo, I am instantly transported to that moment in time when I shot it, that memory takes over. It's a beautiful art form to express creativity as well, and it's been a passion of mine since my childhood.
      </p>
      <p>
      <i className="fa-solid fa-play fa-lg"></i> I created this website so I could showcase all this and through this process, make it easier for you to connect with me. If you like what you see, head over to the contact section below and send me a text. I would love to hear from you!
      </p>
      
      {/* <p>Master of Computer Applications (MCA) Graduate - 2023</p>
      <p>Aspiring Full-Stack Developer</p>
      <p>Passionate about creating web applications and software solutions that enhance user experiences and solve real-world problems.</p>
      <p>Experienced intern with a 4-month internship at Netcraft Solutions Pvt Ltd (May-August) and a 2-month internship at Algowizz (September-October).</p>
      <p>Computer Application student. I consider my self a responsible and orderly person. I am looking foward for my first work experience.</p> */}
      {/* Add more information about yourself here */}
      </div>
    </div>
  );
}

export default ProfileInfo;
