obj = {
  "academyName": "그린컴퓨터아트학원",
  "location": "둔산점",
  "address": "대전광역시 서구 대덕대로 182 오라클빌딩 3층",
  "telNumber": "042-476-2111",
  "classroomNumber": 305,
  "lectureName": "it's different",
  "studentList": [
    "김우진",
    "김현",
    "방승희",
    "변호녕",
    "소사무엘",
    "송영준",
    "신동현",
    "오승민",
    "유승민",
    "윤준현",
    "이민구",
    "이유안",
    "이은정",
    "정영식",
    "최성민",
    "최은철",
    "홍문기"
  ],
}

# print("나는 " + obj["address"] + "의 " + obj["location"] + obj["academyName"] + "에 있는 " + 
# obj["classroomNumber"] + "호 강의에 훈련중인 " + obj["studentList"][8] + " 입니다.")

# for i in obj["studentList"]:
#   if i == "유승민":
#     print("나는 " + obj["studentList"][8])

print(obj["address"])
print(
  "나는 {}의 {}에 있는 {}강의실에서 {}에서 훈련중인 {}입니다."
    .format(
      obj["address"],
      obj["academyName"],
      obj["classroomNumber"],
      obj["lectureName"],
      obj["studentList"][8]
    )
)