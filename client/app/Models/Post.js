export default class Post {
  constructor(data) {
    this.cardText = data.cardText || data.content;
    this.comments = data.comments || "No comments";
    this.id = data._id;
    this.user = data.userId;
  }

  get postTemplate() {
    let template = `
	  <div><img src="https://picsum.photos/200" class="icon mr-2" /></div>
            <div class="mt-2 black-card">
              <p>
                ${this.cardText}
              </p>
            </div>
	
        `;

    return template;
  }
}
