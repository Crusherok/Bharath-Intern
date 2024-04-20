@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

html,
body {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #898989; 
  color: #fff; 
  font-size: 18px;

  background-color:#db952d;
  background-image: 
    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 100%, hsla(225,39%,25%,1) 0, transparent 50%);

}
.container h1{
    color:cornsilk;
}
/* HEADER */
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100vw;
  
}

.logo-div {
  padding-left: 1em;
}

.logo-div > p {
  padding: 0;
  margin: 0;
  align-self: center;
  padding: 1em 1em 1em 0em;
  font-weight: bolder;
}

.nav-buttons {
  display: flex;
  gap: 1em;
  padding: 1em;
}

.nav-buttons > p {
  margin: 0;
}

.nav-buttons > p > a {
  text-decoration: none;
  color: cyan;
  transition: border 200ms;
}

.nav-buttons > p > a:hover {
  border-bottom: 4px solid #ddd;
}

.active-nav-item {
  border-bottom: 4px solid #ddd;
}

/* INDEX */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 4em 0;
}

.blog-post-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 70vw;
  max-width: 900px;
  padding: 2em;
  background-color: #262627; 
  border: 1px solid gold;
  border-radius: 10px;
}

.blog-post-form > section {
  display: flex;
  flex-direction: column;
}

.blog-post-form > section > textarea {
  height: 7em;
}

.blog-post-form > button {
  padding: 10px;
  color: #fff;
  font-size: 15px;
  background-color: #354553; 
  border: none;
  cursor: pointer;
  transition: background-color 500ms;
  border-radius: 5px;
}

.blog-post-form > button:hover {
  background-color: #1d242b; 
}

.blog-post-form > section > input {
  padding: 5px;
  border-radius: 4px;
}

.post-delete-form {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.post-delete-form > input {
  width: 5em;
}

.post-delete-form > button {
  border: none;
  padding: 12px;
  font-size: 15px;
  color: #ddd;
  background-color: #b02e0c; 
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 500ms;
}

.post-delete-form > button:hover {
  background-color: #931f0b; 
}

.blog-posts-container {
  margin-top: 4em;
  width: 70vw;
  max-width: 900px;
  padding: 1em 2em;
  background-color: #262627;
  border: 1px solid gold;
  border-radius: 10px;
}

.post-container {
  background-color: #fff; /* Change post container background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */
}

.post-container > section > p {
  background-color: #f0f0f0; /* Change post content background color */
  color: #333; /* Change post content text color */
}


.post-top > p {
  color: cyan;
  font-size: 10px;
}

.post-middle > p {
  background-color: #123047;
  color: #ffffff; /*rgb(27, 30, 70)ode post title text color */
  font-weight: bolder;
}

.post-bottom > p {
  color: cyan;
}
