# 프리윌린-프론트엔드 채용 과제

## 실행 방법
1. `yarn install`로 Package 설치
2. `yarn start`로 프로젝트 실행

## 설명
state와 기능 구현은 `app.jsx`에서 구현

### getQuestion()
local의 `문제 json`파일을 불러와 state에 저장하며 해당 문제 선택여부를 저장 할 속성도 같이 저장한다

### getSimilarQuestion()
local의 `유사유형 문제 json`파일을 불러와 state에 저장하며 해당 문제 선택여부를 저장 할 속성도 같이 저장한다.

### setActiveQuestion()
state의 문제들 중에 현재 선택 된 문제를 찾아 반환한다.

### getActiveQuestionIndex()
state의 문제들 중에 현재 선택 된 문제의 `index`값을 찾아 반환한다.

### handleLoad()
`유사문항` 버튼이 클릭 된 문제를 찾아 선택여부를 저장하고, 만약 다른 문제들이 선택되어 있으면 해제해준다. 

### handleDelete()
`삭제` 버튼이 클릭 된 문제를 찾아 state에서 삭제한다.

### handleAdd()
`추가` 버튼이 클릭 된 유사문항을 찾아 먼저 선택 된 문제 뒤에 추가하고 유사문항리스트에서 해당 문항 데이터를 삭제한다.

### handleReplace()
`교체` 버튼이 클릭 된 유사문항을 찾아 먼저 선택 된 문제랑 교체한다.

## 개발 환경
- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
