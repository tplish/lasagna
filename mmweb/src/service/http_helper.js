import axios from "axios";

// const BASE_URL = document.querySelector('body').getAttribute('baseurl');
// console.log("BASE_URL: ", BASE_URL);

const http_helper = axios.create({
	// baseURL: BASE_URL || "https://47.111.90.195/api",
	baseURL: 'localhost:5000/api'
});


http_helper.interceptors.request.use(
	req => {
		// req.headers.token = store.token;
		return req
	},
	error => {
		return Promise.reject(error)
	}
);

http_helper.interceptors.response.use(
	async res => {
		console.log(res.data);
		if (res.data.code && res.data.code !== 200) {
			return Promise.reject(res)
		}
		return res
	},
	err => {
		return Promise.reject(err)
	}
);

export default http_helper
