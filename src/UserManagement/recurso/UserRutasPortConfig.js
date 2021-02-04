/*jshint esversion: 8 */

const { config }  = require("dotenv").config();
const config_prefix = 'lgtb';

class Config {
  constructor() {
    var self = this;
    const consul = require('consul')();
    self.ip = process.env.IP || '0.0.0.0';
    self.port = process.env.PORT || 8081;
    consul.agent.service.list(function(err, result) {
      if (err) {
        console.log( "Consul no está conectado" );
      } else {
        consul.kv.get( config_prefix + '/ip',
                     function( err, result ) {
                       if (result != undefined ) {
                         self.ip = result.Value;
                         console.log("Ip establecida en " + self.ip);
                       }
                     });

        consul.kv.get( config_prefix + '/port',
                     function( err, result ) {
                       if (result != undefined ) {
                         self.port = result.Value;
                         console.log("Puerto establecido en " + self.port);
                       }
                     });
      }
    });

  }
}

module.exports = { Config };
