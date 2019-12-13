export default class Post {
	constructor(data) {
		this.title = data.title;
		this.comments = data.comments || "No comments";
		this.id = data._id;
		this.user = data.userId;
	}

	get postTemplate() {
		let template =  `
		<div class="post d-flex" id="black-card">
			<div><img src="https://picsum.photos/200" class="icon mr-2" /></div>
			<div class="mt-2 black-card">
				<p>${this.title}</p>
			</div>
		</div>
        `

		return template;
	}
}