export default class Comment {
  constructor(data) {
    this.title = data.title;
    this.id = data._id;
    this.user = data.userId;
  }

  get Template() {
    let template = `
        // <div class="comment d-flex" id="white-card">
		<div><img src="https://picsum.photos/200" class="icon mr-2" /></div>
		<div class="mt-2 white-card border">
		<p>${this.title}</p>
		</div>
		<form action=""></form>
		// </div>
        `;

    return template;
  }
}
