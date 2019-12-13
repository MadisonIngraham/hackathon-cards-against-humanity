import express from "express";
import axios from "axios"

let api = axios.create({
  baseURL: "https://cah-gcs-api.herokuapp.com/api/v1/random?n=1",
  timeout: 3000
})

export default class RandomApiController {
  constructor() {
    this.router = express
      .Router({ mergeParams: true })
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
  }

  async getAll(req, res, next) {
    try {
      let data = await api.get("");
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
