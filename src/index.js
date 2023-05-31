import React from "react";
import ReactDOM from "react-dom";
// import user from 'path/to/user.json';


const user = {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}


function Painting(props) {
  return (
    <div class="profile">
      <div class="description">
        <img src={user.avatar} alt={user.tag} class="avatar"></img>
        <p class="name">{user.username}</p>
        <p class="tag">@{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity"> - {user.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity"> - {user.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity"> - {user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Painting />, document.querySelector("#root"));