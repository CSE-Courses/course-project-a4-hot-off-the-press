# import http.client
# import mimetypes

# username, password, email = {}

# conn = http.client.HTTPSConnection("ecfi61snh7.execute-api.us-east-1.amazonaws.com")
# payload = "{\r\n    \"TableName\": \"LogInfo\",\r\n    \"Item\": {\r\n        \"Username\": {\r\n            \"S\": \"$input.params('{username}')\"\r\n        },\r\n        \"Password\": {\r\n            \"S\": \"$input.params('{password}')\"\r\n        },\r\n        \"Email\": {\r\n            \"S\": \"$input.params('{email}')\"\r\n        }\r\n    }\r\n}"
# headers = {
#     'Content-Type': 'application/json'
# }

# conn.request("POST", "/test/storeid/{username}/{password}/{email}", payload, headers)
# res = conn.getresponse()
# data = res.read()
# print(data.decode("utf-8"))

import requests

url = "https://ecfi61snh7.execute-api.us-east-1.amazonaws.com/test/getid/test1"

payload = {}
headers = {
  'x-api-key': '3IoVrnoyYf3Ttlft13Eim1r2iBQ9Cf1H8xHlbeZA'
}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
