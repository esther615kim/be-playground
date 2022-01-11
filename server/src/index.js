// app 띄우기 위한 기능 들어감
import express from 'express';
import cors from 'cors';

const app = express();

// extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용
app.use(express.urlencoded({extended:true}));
// exporess에서는 json 형태로 사용
app.use(express.json());