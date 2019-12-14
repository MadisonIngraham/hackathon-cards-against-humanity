import store from "../store.js";
import Comment from "../Models/Comment.js";

//@ts-ignore
let _api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000
});

class CommentsService {
  constructor() {}
  getPosts() {
    _api
      .get("/posts")
      .then(res => {
        console.log("Returned data from get posts:", res);
        let posts = store.State.posts;
        console.log("Posts in store:", posts);
        let tempPosts = res.data.map(cur => new Comment(cur));
        console.log("Posts form store and get():", tempPosts);
        store.commit("posts", tempPosts);
      })
      .catch(e => {
        console.error(e);
      });
  }
  async getRandomWhite() {
    let data = await _api.get("/random");
    return data.data.white.content;
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
    debugger;
    let post = new Comment(res.data);
    let realPosts = [...store.State.posts, post];
    store.commit("posts", realPosts);
    console.log(res);
  }

  async deletePost(id) {
    let indexOfDeleted = store.State.posts.findIndex(elem => elem.id == id);
    let realPosts = [...store.State.posts];
    realPosts.splice(indexOfDeleted, 1);
    await _api.delete("/posts/" + id);
    store.commit("posts", realPosts);
  }
}

const commentsService = new CommentsService();
export default commentsService;
