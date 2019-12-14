import PostService from "../Services/PostService.js";
import store from "../store.js";
import Post from "../Models/Post.js";
import postService from "../Services/PostService.js";

//Private
function _drawPosts() {
  let template = "";
  let posts = store.State.posts;
  posts.forEach(post => (template += post.postTemplate));
  document.getElementById("black-card").innerHTML = template;
}

// Reddit style overlay.

//Private
// function _drawPosts() {
//   let posts = store.State.posts;
//   console.log(posts);
// }

function _drawOverlay() {
  let post = store.State.overlayPost;
  console.log(post);
}

//Public
export default class PostController {
  constructor() {
    store.subscribe("posts", _drawPosts);
    store.subscribe("overlayPost", _drawOverlay);
    this.getPosts();
  }

  async getPosts() {
    try {
      PostService.getPosts();
    } catch (error) {
      console.error(error);
    }
  }

  // Used for looking at specific post, reddit style overlay.
  async getPostId(id) {
    try {
      let data = await PostService.getPostId(id);
      store.commit("overlayPost", [new Post(data)]);
    } catch (error) {
      console.error(error);
    }
  }
  async getRandom() {
    try {
      let data = await PostService.getRandom();
      document.getElementById("custom-black-card-text").innerText = data;
    } catch (error) {
      document.getElementById("custom-black-card-text").innerText =
        "Create Your Own or Get Random!";
    }
  }

  // We need to pass the userId and the data through.
  async createPost(event) {
    try {
      event.preventDefault();
      let formData = event.target;
      let newPost = {
        cardText: formData.cardText.value,
        userId: "5df3fecf6e92683b5840e5d0"
      };
      await PostService.createPost(newPost);
    } catch (error) {
      console.error(error);
    }
  }

  async editPost(id, data) {
    let newData = await PostService.editPost(id, data);
    store.State.posts.indexOf();
  }

  async deletePost(id) {
    try {
      await postService.deletePost(id);
    } catch (error) {
      console.error(error);
    }
  }
}
