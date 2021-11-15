/* node js */

const express = require("express");
const router = express.Router();
const request = require('request');

var url = 'http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList';
var queryParams = '?' + encodeURIComponent('serviceKey') + '='; /* Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('depAirportId') + '=' + encodeURIComponent('NAARKJJ'); /* */
queryParams += '&' + encodeURIComponent('arrAirportId') + '=' + encodeURIComponent('NAARKPC'); /* */
queryParams += '&' + encodeURIComponent('depPlandTime') + '=' + encodeURIComponent('20201201'); /* */
queryParams += '&' + encodeURIComponent('airlineId') + '=' + encodeURIComponent('AAR'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);
});