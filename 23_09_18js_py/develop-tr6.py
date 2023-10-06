studentList = [
  '김우진',
  '김현',
  '방승희',
  '변호녕',
  '소사무엘',
  '송영준',
  '신동현',
  '오승민',
  '유승민',
  '윤준현',
  '이민구',
  '이유안',
  '이은정',
  '정영식',
  '최성민',
  '최은철',
  '홍문기',
]

for i in range(len(studentList)) :
  file_name = studentList[i] + '.html'
  file_create = open(file_name, 'w', encoding='utf-8')
  file_create.write(
    f"""<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1> 
      {studentList[i]}
      </h1>
    </body>
    </html>"""
  )
  file_create.close()

