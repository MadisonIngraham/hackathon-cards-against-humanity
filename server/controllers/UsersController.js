import express from "express";
import usersService from "../services/UsersService";

export default class UsersController {
	constructor() {
		this.router = express
			.Router()
			//NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
			.get("/getallusers", this.getAllUsers)
			.get("/:id", this.getById)
			.post("", this.create)
			.put("/:id", this.edit)
			.delete("/:id", this.delete);
	}

	// Not meant for production, remove on master branch!!!!!
	async getAllUsers (req, res, next) {
		let users = await usersService.getAllUsers();
		return res.send(users);
	}

	async getById(req, res, next) {
		try {
			let data = await usersService.getById(req.params.id);
			return res.send(data);
		} catch (error) {
			next(error);
		}
	}

	async edit(req, res, next) {
		try {
			let data = await usersService.edit(req.params.id, req.body);
			return res.send(data);
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			let data = await usersService.delete(req.params.id);
			return res.send("Successfully Deleted!");
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
	try {
		let data = await usersService.create(req.body);
		return res.status(201).send(data);
	} catch (error) {
		next(error);
	}
}
}
