import PostController from "./Controllers/PostController.js";

class App {
  valuesController = new PostController();
}

window["app"] = new App();
