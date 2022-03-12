const http = require('http');
const express = require('express');
const unirest = require('unirest');
const axios = require('axios');

exports.hospitalData = async (req,res) => {
    http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
        resp.on('data', function (ip) {
            //console.log("My public IP address is: " + ip);
            const my_ip = ip.toString();
            //console.log(my_ip);
            var options = {
                method: 'GET',
                url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
                params: { ip: "154.176.116.80" },
                headers: {
                    'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
                    'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
                }
            };
            axios.request(options).then(function (response) {
                //res.send(response.data);
                console.log(response.data);
                const lat = response.data.latitude;
            const lng = response.data.longitude;

            var config = {

                method: 'GET',
                url: 'https://nearby-places.p.rapidapi.com/nearby',
                params: { lat, lng, type: 'hospital', radius: '500' },
                headers: {
                    'x-rapidapi-host': 'nearby-places.p.rapidapi.com',
                    'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
                }
            };
            axios(config)
                .then(function (response) {
                    res.send(response.data);
                })
                .catch(function (error) {
                    res.send(error);
                });
            }).catch(function (error) {
                console.error(error);
            });
            
        });

    });
};