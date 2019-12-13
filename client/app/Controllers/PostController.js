import PostService from "../Services/PostService.js";
import store from "../store.js";
import Post from "../Models/Post.js";

//Private
function _drawPosts() {
	let postDraw = document.getElementById('black-card');
	let posts = store.State.posts;
	let template = '';
	posts.forEach(cur=>template+=cur.postTemplate);
	postDraw.innerHTML = template;
}

// Reddit style overlay.
function _drawOverlay() {
	let post = store.State.overlayPost;
  // import Post from "../Models/Post";

//Private
function _drawPosts() {
	let posts = store.State.posts;
	console.log(posts);
}

function _drawOverlay() {
	let post = store.State.overlayPost;
	console.log(post);
}

//Public
export default class PostController {
	constructor() {
		store.subscribe("posts", _drawPosts);
		store.subscribe("overlayPost", _drawOverlay)
	}

	getPosts (event) {
		event.preventDefault();

		PostService.getPosts();
	}

	// Used for looking at specific post, reddit style overlay.
	async getPostId (id) {
		let data = await PostService.getPostId(id);
		store.commit('overlayPost', [new Post(data)])
	}

	// We need to pass the userId and the data through.
	createPost (userId, data) {
		PostService.createPost(userId, data);
	}

	async editPost (id, data) {
		let newData = await PostService.editPost(id, data);
		store.State.posts.indexOf()
	}

	deletePost (id) {}

}
