/*jshint esversion: 8 */

const { Etcd3 } = require('etcd3');
const client = new Etcd3();
const express = require('express');
const app = require("./HistoricalEventRutas.js");

var port = null;
var ip = null;

(async () => {
  
  port = await client.get('PORT').string();
  ip = await client.get('IP').string();
  
  if(ip === null){
  	ip = process.env.IP_ADDRESS || '127.0.0.1';
  }
  if(port === null){
  	port = process.env.PORT || '8080';
  }
  app.set('port', port);
  app.use(express.static(__dirname + '/public'));
  app.listen(app.get('port'), ip, function(){
	console.log("El servidor se está ejecutando en " + ip + ":" + app.get('port'));
  });
  
  await client.delete().all();
})();



