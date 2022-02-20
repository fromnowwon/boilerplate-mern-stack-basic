# Boilerplate - MERN Stack (Basic)

## Introduction
개발 시 초기 세팅에 소요되는 불필요한 시간을 줄이고자 제작된 boilerplate 코드입니다.
<br />
**SCSS**를 사용하였습니다.
<br />
각자 스타일에 맞게 커스텀해서 사용하길 추천합니다.
<br />
<br/>
It is a boilerplate code made to reduce unnecessary time required for initial setting during development.
<br/>
**SCSS** language is used.
<br />
It is recommended to customize and use according to your style.
<br/>
<br/>

## Development Environment
- Client: React
- Backend: Node.js, Express.js
- DB: MongoDB
<br/>

## Get started

루트 경로, client 경로에 필요한 npm 패키지를 설치해주세요.
<br />
Please install the necessary npm package for the root path and client path.

<br />

`server>config` 경로에 `dev.js` 파일을 생성하여 아래 코드를 입력해주세요. (본인의 DB가 필요합니다.) 배포 전, `dev.js` 파일은 `.gitignore`에 포함해주세요.
<br />
Please create a `dev.js` file in the `server>config` path and enter the code below. (You need your own DB.) Before deploy, please include the 'dev.js' file in the '.gitignore' list.

```jsx
module.exports = {
	mongoURI: 'Your mongoDB URI'
}
```

루트 디렉토리에서 client와 server를 같이 실행해주세요.
<br />
Please run client and server together in the root directory.

`cd ../`
<br />
`npm run dev`

<br />

## Tree
```
my-app
├── README.md
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── Footer
│       │   ├── LandingPage
│       │   └── NavBar
│       ├── index.css
│       ├── index.js
│       ├── setupProxy.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
└── server
    ├── config
    │   ├── dev.js
    │   ├── key.js
    │   └── prod.js
    ├── index.js
    ├── middleware
    └── models
```
