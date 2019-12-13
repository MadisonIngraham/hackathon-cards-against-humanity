export default class Post {
	constructor(data) {
		this.title = data.title;
		this.id = data._id;
		this.user = data.userId;
	}

	get postTemplate() {
		let template =  `
        <div class="comment d-flex" id="white-card">
		<div><img src="https://picsum.photos/200" class="icon mr-2" /></div>
		<div class="mt-2 white-card border">
		<p>${this.title}</p>
		</div>
		
		</div>
        `

		return template;
	}
}
