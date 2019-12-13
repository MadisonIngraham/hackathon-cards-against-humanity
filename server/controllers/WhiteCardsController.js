import express from "express";
import whiteCardsService from "../services/WhiteCardsService";

export default class WhiteCardsController {
  constructor() {
    this.router = express
      .Router({ mergeParams: true })
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .delete("/:id", this.delete)
      .put("/:id", this.edit);
  }

  async getAll(req, res, next) {
    try {
      let data = await whiteCardsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await whiteCardsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await whiteCardsService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await whiteCardsService.delete(req.params.id);
      return res.send("Bye, Felicia");
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await whiteCardsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
