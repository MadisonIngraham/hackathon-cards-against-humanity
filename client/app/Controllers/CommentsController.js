import commentsService from "../Services/CommentsService.js";
import store from "../store.js";
import Comment from "../Models/Comment.js";

//Private
function _drawComments() {
  let template = "";
  let posts = store.State.posts;
  posts.forEach(post => (template += post.postTemplate));
  document.getElementById("black-card").innerHTML = template;
}

//Public
export default class CommentsController {
  // constructor() {
  //   store.subscribe("posts", _drawPosts);
  //   store.subscribe("overlayPost", _drawOverlay);
  //   this.getPosts();
  // }

  // async getPosts() {
  //   try {
  //     PostService.getPosts();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async getPostId(id) {
  //   try {
  //     let data = await PostService.getPostId(id);
  //     store.commit("overlayPost", [new Post(data)]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async getRandomWhite() {
    try {
      let data = await commentsService.getRandomWhite();
      document.getElementById("custom-white-card-text").innerText = data;
    } catch (error) {
      document.getElementById("custom-white-card-text").innerText =
        "Create Your Own or Get Random!";
    }
  }

  // async createPost(event) {
  //   try {
  //     event.preventDefault();
  //     let formData = event.target;
  //     let newPost = {
  //       cardText: formData.cardText.value,
  //       userId: "5df3fecf6e92683b5840e5d0"
  //     };
  //     await PostService.createPost(newPost);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async editPost(id, data) {
  //   let newData = await PostService.editPost(id, data);
  //   store.State.posts.indexOf();
  // }

  // async deletePost(id) {
  //   try {
  //     await postService.deletePost(id);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
