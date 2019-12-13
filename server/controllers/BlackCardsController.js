import express from "express";
import blackCardsService from "../services/BlackCardsService";

export default class BlackCardsController {
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
			let data = await blackCardsService.getAll();
			return res.send(data);
		} catch (error) {
			next(error);
		}
	}
	async getById(req, res, next) {
		try {
			let data = await blackCardsService.getById(req.params.id);
			return res.send(data);
		} catch (error) {
			next(error);
		}
	}
	async create(req, res, next) {
		try {
			let data = await blackCardsService.create(req.body);
			return res.send(data);
		} catch (error) {
			next(error);
		}
	}
	async delete(req, res, next) {
		try {
			await blackCardsService.delete(req.params.id);
			return res.send("Bye, Felicia");
		} catch (error) {
			next(error);
		}
	}
	async edit(req, res, next) {
		try {
			let data = await blackCardsService.edit(req.params.id, req.body);
			return res.send(data);
		} catch (error) {
			next(error);
		}
	}
}
