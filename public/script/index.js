const postsSpace = document.querySelector('.postsSpace');

const createElement = (tag, classname, parent) => {
  const item = document.createElement(tag);
  item.className = classname;
  parent.appendChild(item);
  return item;
};

fetch('/homeposts')
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
    posts.forEach((item) => {
      const post = createElement('article', 'post', postsSpace);
      const postHeader = createElement('header', 'postHeader', post);
      const userImg = createElement('img', 'userImg', postHeader);
      if (!userImg) {
        userImg.src = item.img_url;
      } else {
        userImg.src = 'assets/user.png';
      }
      const userInfo = createElement('div', 'userInfo', postHeader);
      const username = createElement('a', 'username', userInfo);
      username.href = 'profile.html';
      username.textContent = item.username;
      const postTime = createElement('div', 'postTime', userInfo);
      postTime.textContent = item.created_at.split('T', 1);
      const postDetails = createElement('p', 'postDetails', post);
      postDetails.textContent = item.post_text;
    });
  });
