import store from "../store.js";
import Post from "../Models/Post.js";
//@ts-ignore
let _api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000
});

class PostService {
  constructor() {}
  getPosts() {
    _api
      .get("/posts")
      .then(res => {
        console.log("Returned data from get posts:", res);
        let posts = store.State.posts;
        console.log("Posts in store:", posts);
        res.data.map(cur => posts.push(new Post(cur)));
        console.log("Posts form store and get():", posts);
        store.commit("posts", posts);
      })
      .catch(e => {
        console.error(e);
      });
  }
  async getRandom() {
    let data = await _api.get("/random");
    return data.data.black.content;
    console.log(data.data.black.content);
  }

  getPostId(id) {
    _api
      .get(`/posts/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(e => console.error(e));
  }

  async createPost(newPost) {
    let res = await _api.post("/posts", newPost);
    let post = new Post(newPost);
    let realPosts = [...store.State.posts, post];
    store.commit("posts", realPosts);
    console.log(res);
  }
}

const postService = new PostService();
export default postService;
