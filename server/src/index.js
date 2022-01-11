// app 띄우기 위한 기능 들어감
import express from 'express';
import cors from 'cors';
import msgsRoute from './db/routes/msgsRoute.js';

const app = express();

// extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용
app.use(express.urlencoded({extended:true}));

 // exporess에서는 json 형태로 사용
app.use(express.json());

// 별도의 처리 없이 app.use(cors())를 하게 되면 모든 도메인에서 제한 없이 해당 서버에 요청을 보내고 응답
// app.use(cors({
//     origin:"http:localhost:3000",
//     credentials:true;
// }))


// routes
//app[메서드](route, callback), 각 각이 api 명령어

app.get('/',(req,res)=>{
    res.send("ok");
})

msgsRoute.forEach(({method,route,handler})=>{
    app[method](route,handler);
})



app.listen(8000, () => {
    console.log('server is listening on 8000...')
  })