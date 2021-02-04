/*jshint esversion: 8 */

const { Etcd3 } = require('etcd3');
const client = new Etcd3();
const express = require('express');
const app = require("./InfoAndExperiencesRutas.js");

var port = null;
var ip = null;

var connection = async function(){
	port = await client.get('PORT').string();
	ip = await client.get('IP').string();
	if(ip === null){
		ip = process.env.IP_ADDRESS || '0.0.0.0';
	}
	if(port === null){
		port = process.env.PORT || '8082';
	}
	await client.delete().all();
	return {
		port,
		ip
	}
}

module.exports = {
	connection: connection
}



