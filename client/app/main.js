import PostController from "./Controllers/PostController.js";
import CommentsController from "./Controllers/CommentsController.js";

class App {
  postController = new PostController();
  CommentsController = new CommentsController();
}

window["app"] = new App();
