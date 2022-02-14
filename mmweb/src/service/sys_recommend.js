import http_helper from "./http_helper";

export const RecMovieU2I = (user_id) => http_helper.request({
	method: 'post',
	url: '/rec_movie_u2i',
	data: {
		user_id: user_id
	}
});

export const RecMovieI2I = (item_id) => http_helper.request({
	method: 'post',
	url: '/rec_movie_i2i',
	data: {
		item_id: item_id
	}
});
