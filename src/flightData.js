var xhr = new XMLHttpRequest();
var url = 'http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('depAirportId') + '=' + encodeURIComponent('NAARKJJ'); /**/
queryParams += '&' + encodeURIComponent('arrAirportId') + '=' + encodeURIComponent('NAARKPC'); /**/
queryParams += '&' + encodeURIComponent('depPlandTime') + '=' + encodeURIComponent('20201201'); /**/
queryParams += '&' + encodeURIComponent('airlineId') + '=' + encodeURIComponent('AAR'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');