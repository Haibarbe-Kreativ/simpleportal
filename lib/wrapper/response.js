module.exports = function response() {
	return function(request, response, next){
		if(request.query)
			response.callback = request.query.callback;
		
		if(request.headers && request.headers['Content-Type'])
			response.setHeader("Content-Type", request.headers['Content-Type']);
		if(request.headers && request.headers['content-type'])
			response.setHeader("Content-Type", request.headers['content-type']);
		next();
	};
};