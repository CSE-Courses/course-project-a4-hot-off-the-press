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

import http.client
import mimetypes
conn = http.client.HTTPSConnection("ecfi61snh7.execute-api.us-east-1.amazonaws.com")
payload = "{\r\n\"Username\": \"Kartik\", \r\n\"Password\": \"yellow\",\r\n\"Email\": \"joshua.meier\"\r\n}"
headers = {
  'Content-Type': 'application/json'
}
conn.request("POST", "/test/input", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))