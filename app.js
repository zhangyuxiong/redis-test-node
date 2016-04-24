'use strict'
let co = require('co');
let redis = require('redis');
let bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


try {
	var client = redis.createClient(6379, '192.168.241.131');
	//client.set('test', 'hello redis'+new Date(), redis.print);
	let tt = client.getAsync('test').then(function (params) {
		console.log(params);
	});
	client.quit();
}
catch (e) {
	console.log(e);
}

