import store from "../store.js";
import Post from "../Models/Post.js";


let _api = axios.create({
	baseURL: "http://localhost:3000/api",
	timeout: 5000
});


class PostService {
	constructor () {
		for(let i=0;i<5;i++){
			store.State.posts.push(new Post({title:'lorem ipsum', id:1 }))
		}
		console.log(store.State.posts)
	}

	getPosts () {
		_api.get('/posts')
			.then(res =>{
				console.log('Returned data from get posts:',res);
				let posts = store.State.posts;
				console.log('Posts in store:',posts);
				res.data.map(cur=> posts.push(new Post(cur)));
				console.log('Posts form store and get():', posts);
				store.commit('posts', posts);
			})
			.catch(e=>{console.error(e)})
	}

	getPostId (id) {
		_api.get(`/posts/${id}`)
			.then(res=>{
				return res.data;
			})
			.catch(e=>console.error(e))
	}
}

const service = new PostService();
export default service;
