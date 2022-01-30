# Python 샘플 코드 #


import requests

url = "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getIflightScheduleList?ServiceKey=gOB08iIzzqGOwRT3bTdx%2Fuo6IEk0zKSilGVmnKx4mGOy%2B%2Bq2d%2FraX49coFC8zIZlC3Yx%2FfUPUyfddEH0Ww0RUA%3D%3D&schDeptCityCode=GMP&schArrvCityCode=HND&pageNo=1"
key = "gOB08iIzzqGOwRT3bTdx%2Fuo6IEk0zKSilGVmnKx4mGOy%2B%2Bq2d%2FraX49coFC8zIZlC3Yx%2FfUPUyfddEH0Ww0RUA%3D%3D"

content = requests.get(url).content
print(content)