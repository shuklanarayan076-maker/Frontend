const reels = [
  {
    ismuted : true,
    username: "tech_guru",
    likeCount: 1200,
    isLiked: false,
    commentCount: 45,
    caption: "New gadgets dropping soon! 🔥",
    video: "./video1.mp4",
    userprofile: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww",
    shareCount: 20,
    isFollowed: false
  },
  {
    ismuted : true,
    username: "foodielife",
    likeCount: 8500,
    isLiked: true,
    commentCount: 320,
    caption: "Best street food in Delhi 😍🍜",
     video: "./video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww",
    shareCount: 150,
    isFollowed: true
  },
  {
    ismuted : true,
    username: "traveler_amit",
    likeCount: 4300,
    isLiked: false,
    commentCount: 90,
    caption: "Sunset vibes at Goa 🌅",
    video: "./video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 60,
    isFollowed: false
  },
  {
    ismuted : true,
    username: "fitness_rani",
    likeCount: 10500,
    isLiked: true,
    commentCount: 510,
    caption: "Morning workout routine 💪🔥",
     video: "./video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 210,
    isFollowed: true
  },
  {
    ismuted : true,
    username: "coding_with_raj",
    likeCount: 670,
    isLiked: false,
    commentCount: 18,
    caption: "JS tip of the day! 💻",
   video: "./video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 8,
    isFollowed: false
  },
  {
    ismuted : true,
    username: "petsworld",
    likeCount: 9200,
    isLiked: true,
    commentCount: 300,
    caption: "Cute puppy alert 🐶❤️",
   video: "./video6.mp4",
    userprofile: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 130,
    isFollowed: true
  },
  {
    ismuted : true,
    username: "dance_with_me",
    likeCount: 5100,
    isLiked: false,
    commentCount: 120,
    caption: "Trending dance challenge 💃🔥",
    video: "./video7.mp4",
    userprofile: "https://images.unsplash.com/photo-1512101903502-7eb0c9022c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 75,
    isFollowed: false
  },
  {
    ismuted : true,
    username: "memelord",
    likeCount: 15000,
    isLiked: true,
    commentCount: 980,
    caption: "POV: when your code works first try 😂",
    video: "./video8.mp4",
    userprofile: "https://plus.unsplash.com/premium_photo-1715876268461-7d85ee7b1452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 420,
    isFollowed: true
  },
  {
    ismuted : true,
    username: "nature_love",
    likeCount: 3800,
    isLiked: false,
    commentCount: 60,
    caption: "Beautiful mountains in Himachal 🏔️",
     video: "./video9.mp4",
    userprofile: "https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    shareCount: 40,
    isFollowed: false
  },
  {
    ismuted : true,
    username: "carenthusiast",
    likeCount: 7800,
    isLiked: true,
    commentCount: 250,
    caption: "Mustang GT roar 🔥",
    video: "./video10.mp4",
    userprofile: "https://images.unsplash.com/photo-1524677198710-77873f5420cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    shareCount: 180,
    isFollowed: true
  }
];

var allreels = document.querySelector('.all-reels');


function addData() {
  
var sum = ''

reels.forEach(function(elem, idx){
    sum = sum + `<div class="reel">
                   
                   <video autoplay loop ${elem.ismuted?'muted': ''} src="${elem.video}"></video>
                       <div class="mute" id=${idx} >
                       ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
            
        </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx}  class='follow'>${elem.isFollowed?'unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                     <div id=${idx} class="like">
                        <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                     </div>
                      <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                     </div>
                      <div class="share">
                        <h4 class="share-icon"><i class="ri-send-plane-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                     </div>
                      <div class="menu">
                        <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                     </div>
                    </div>
                </div>`
})



allreels.innerHTML = sum;
}

allreels.addEventListener('click', function(dets){
if (dets.target.className == 'like') {
  if (!reels[dets.target.id].isLiked) {
    reels[dets.target.id].likeCount++
     reels[dets.target.id].isLiked = true
  }else{
     reels[dets.target.id].likeCount--
     reels[dets.target.id].isLiked = false
  }
  addData()
}

if (dets.target.className == 'follow') {
  if (!reels[dets.target.id].isFollowed) {
     reels[dets.target.id].isFollowed = true
  }else{
     reels[dets.target.id].isFollowed = false
  }
  addData()
}

if (dets.target.className == 'mute') {
  if (!reels[dets.target.id].ismuted) {
     reels[dets.target.id].ismuted = true
  }else{
     reels[dets.target.id].ismuted = false
  }
  addData()
}
  
})

addData()