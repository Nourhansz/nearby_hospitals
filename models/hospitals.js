	
const requestIp = require('request-ip');
const http = require('http');
const ip = require('ip');

const express = require('express');
const unirest = require('unirest');
const axios = require('axios');

// exports.hospitalData = async (req, res) => {
//     // http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
//     //     resp.on('data', function (ip) {
//     //console.log("My public IP address is: " + ip);
//     //const my_ip = ip.toString();
//     const my_ip = req.ip.toString();
//     //console.log(req.ip);
//     console.log(req.socket.remoteAddress);
//     var options = {
//         method: 'GET',
//         url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
//         params: { ip: req.ip },
//         headers: {
//             'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
//             'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
//         }
//     };
//     axios.request(options).then(function (response) {
//         //res.send(response.data);
//         console.log(response.data);
//         const lat = response.data.latitude;
//         const lng = response.data.longitude;

//         var config = {

//             method: 'GET',
//             url: 'https://nearby-places.p.rapidapi.com/nearby',
//             params: { lat, lng, type: 'hospital', radius: '500' },
//             headers: {
//                 'x-rapidapi-host': 'nearby-places.p.rapidapi.com',
//                 //'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
//                 'x-rapidapi-key': '08a3cae90amshff35d3de9823cbep158a07jsn5a19304725c7'
//             }
//         };
//         axios(config)
//             .then(function (response) {
//                 res.send(response.data);
//             })
//             .catch(function (error) {
//                 res.send(error);
//             });
//     }).catch(function (error) {
//         console.error(error);
//     });

//     // });

//     // });
// };

// exports.hospitalData = async (req, res) => {

//     var options = {
//         method: 'GET',
//         url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
//         params: { apikey: '873dbe322aea47f89dcf729dcc8f60e8' },
//         headers: {
//             'x-rapidapi-host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
//             'x-rapidapi-key': '08a3cae90amshff35d3de9823cbep158a07jsn5a19304725c7'
//         }
//     };

//     axios.request(options).then(function (response) {
//         console.log(response.data);
//         const lat = response.data.latitude;
//         const lng = response.data.longitude;

//         var config = {

//             method: 'GET',
//             url: 'https://nearby-places.p.rapidapi.com/nearby',
//             params: { lat, lng, type: 'hospital', radius: '500' },
//             headers: {
//                 'x-rapidapi-host': 'nearby-places.p.rapidapi.com',
//                 //'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
//                 'x-rapidapi-key': '08a3cae90amshff35d3de9823cbep158a07jsn5a19304725c7'
//             }
//         };
//         axios(config)
//             .then(function (response) {
//                 res.send(response.data);
//             })
//             .catch(function (error) {
//                 res.send(error);
//             });
//     }).catch(function (error) {
//         console.error(error);
//     });

// }


exports.hospitalData = async (req, res) => {
    // http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
    //     resp.on('data', function (ip) {
    //console.log("My public IP address is: " + ip);
    //const my_ip = ip.toString();
    //const my_ip = req.socket.remoteAddress;
    //console.log(req.ip);
    // const parseIp = (req) =>
    // req.headers['x-forwarded-for']?.split(',').shift()
    // || req.socket?.remoteAddress;

    // const my_ip = requestIp.getClientIp(req);
    // const my_ip = ip.address();

        http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
        resp.on('data', function (ip) {
    console.log("My public IP address is: " + ip);
    const my_ip = ip.toString();

    console.log(my_ip);
    var options = {
        method: 'GET',
        url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
        params: { ip: my_ip },
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
                //'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
                // 'x-rapidapi-key': '08a3cae90amshff35d3de9823cbep158a07jsn5a19304725c7'
                'x-rapidapi-key': 'e1b54c91c8mshcfeb4fcfc23fb19p1f1eaejsna9bc4634e0c8'

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

// exports.hospitalData = async (req, res) => {

//     var config = {
//       method: 'get',
//       url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDL8wShrGK7XCtbxs-F7B5Q7oYUpEjp_R0',
//       headers: { }
//     };
    
//     axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };