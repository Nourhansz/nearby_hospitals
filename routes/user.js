const express = require('express');
const router = express.Router();
const { createUser, userSignIn } = require('../controllers/user');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middlewares/validation/user');
const {hospitalData} = require('../models/hospitals');

router.post('/registration', validateUserSignUp, userValidation, createUser);
router.post('/login', validateUserSignIn, userValidation, userSignIn);
router.get('/hospitals', hospitalData);

    // var apiCall = unirest("GET",
    //     "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
    // );
    // apiCall.headers({
    //     "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
    //     "x-rapidapi-key": "srclZqaa9imshAk9Xzz55u27oltLp1SqdiFjsnmva9PTpf2j3f"
    // });
    // apiCall.end(function (result) {
    //     if (res.error) throw new Error(result.error);
    //     console.log(result.body);
    //     const lat = result.body.latitude;
    //     const lng = result.body.longitude;
    //     // const lat = 30.0136;
    //     // const lng = 31.2081;
    //     //res.send(result.body);
    //     var config = {

    //         method: 'GET',
    //         url: 'https://nearby-places.p.rapidapi.com/nearby',
    //         params: { lat, lng, type: 'hospital', radius: '500' },
    //         headers: {
    //             'x-rapidapi-host': 'nearby-places.p.rapidapi.com',
    //             'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
    //         }
    //     };
    //     axios(config)
    //         .then(function (response) {
    //             res.send(response.data);
    //         })
    //         .catch(function (error) {
    //             res.send(error);
    //         });
    // });



    //res.send(await publicIp.v4());


    // http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
    //     resp.on('data', function (ip) {
    //         //console.log("My public IP address is: " + ip);
    //         const my_ip = ip.toString();
    //         //console.log(my_ip);
    //         var options = {
    //             method: 'GET',
    //             url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
    //             params: { ip: my_ip },
    //             headers: {
    //                 'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    //                 'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
    //             }
    //         };
    //         axios.request(options).then(function (response) {
    //             //res.send(response.data);
    //             console.log(response.data);
    //             const lat = response.data.latitude;
    //         const lng = response.data.longitude;

    //         var config = {

    //             method: 'GET',
    //             url: 'https://nearby-places.p.rapidapi.com/nearby',
    //             params: { lat, lng, type: 'hospital', radius: '200' },
    //             headers: {
    //                 'x-rapidapi-host': 'nearby-places.p.rapidapi.com',
    //                 'x-rapidapi-key': '5e334ee3fbmsh6bd6a8836bbe529p1084f3jsnac9947c9818b'
    //             }
    //         };
    //         axios(config)
    //             .then(function (response) {
    //                 res.send(response.data);
    //             })
    //             .catch(function (error) {
    //                 res.send(error);
    //             });
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
            
    //     });

    // });
//});


module.exports = router;
//  export default router;