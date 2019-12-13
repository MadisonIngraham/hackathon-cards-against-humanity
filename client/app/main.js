import PostController from "./Controllers/PostController.js";

class App {
  postController = new PostController();
}

window["app"] = new App();
