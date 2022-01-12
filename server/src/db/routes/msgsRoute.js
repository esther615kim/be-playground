// api를 배열로 만들어서 사용하기

import { v4 } from "uuid";
import { readDB, writeDB } from "./../../dbController.js";
// 핸들러의 내용 구현하기
const msgsRoute = [
    //Get ALL messages
 //GET msgs, get은 url 접근으로도 바로 확인가능
  {
    method: "get",
    route: "/messages",
    handler: (req, res) => {
      const msgs = readDB("msgs");
      res.send(msgs);
    },
  },
  // get 1 message
  {
    method: "get",
    route: "/messages/:id",
    // id 가져오면 error /edge case 넣기
    handler: ({params:{id}}, res) => {
        // 404 찾지 못함
        try{
            const msgs = readDB("msgs");
            const targetMsg = msgs.find(msg =>msg.id === id); // msg.id 는 db, 그냥 id는 params.id 임
            if(!targetMsg) throw Error("Message not found");
            res.send(targetMsg);
            
        }catch(err){res.status(404).send({error:err})}
    },
  },
  {
    //Post msgs
    method: "post",
    route: "/messages",
    //req.body has 새글 내용 text , userID
    handler: ({ body }, res) => {
      const msgs = readDB("msgs");
      //보낼 메시지내용
      const newMsg = {
        id: v4(),
        text: body.text,
        userId: body.userId,
        timestamp: Date.now(),
      };
      // existing msg 에 add 하기 (젤 앞 추가 unshift)
      msgs.unshift(newMsg);
      // DB에 write
      writeDB("msgs", msgs);
      // 응답 response 는 new msg 보내기
      res.send(newMsg);
    },
  },
  {
    //Update msgs
    method: "put",
    route: "/messages/:id",
    // update는 body에서 변경된 txt 들어옴, param 안에 아이디 있음 --req 콘솔찍어서 보기
    handler: ({ body, params: { id } }, res) => {
      // id의 경우는 서버, 클라이언트의 싱크가 맞지 않아서 오류 나는 경우 있으니 edge 케이스 넣어주기
      try {
        // body.userId는 지금 업뎃하는 id, msgs안의 id는 기존 db안 id
        const msgs = readDB("msgs");
        const targetIdx = msgs.findIndex((msg) => msg.id === id);
        if (targetIdx < 0) throw "no message available";
        if (msg[targetIdx].userId !== body.userId) throw "different user";
        // const newMsg = {text:body.text} //patch의 경우
        const newMsg = { ...msgs[targetIdx], text: body.text };

        // 기존 msgs 의 item을 splice해서 업데이트(new msg로 바꿔치기) 해주기
        msgs.splice(targetIdx, 1, newMsg);
        // DB에 write
        writeDB("msgs", msgs);
        res.send(newMsg);

      } catch (err) {
          // for any error, send err msg with 500 status
        res.status(500).send({error:err});
      }
    },
  },
      // Delete msgs => 업데이트와 거의 같음,newmsg 필요 없음
    //splice만 하고 다시 넣지 않음,, 성공 시 id만 넘기기
  {
    method: "delete",
    route: "/messages/:id",
    // update는 body에서 변경된 txt 들어옴, param 안에 아이디 있음 --req 콘솔찍어서 보기
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = readDB("msgs");
        const targetIdx = msgs.findIndex((msg) => msg.id === id);
        if (targetIdx < 0) throw "no message available";
        if (msg[targetIdx].userId !== body.userId) throw "different user";

        msgs.splice(targetIdx, 1);
        // DB에 write
        writeDB("msgs", msgs);
        res.send(id);

      } catch (err) {
          // for any error, send err msg with 500 status
        res.status(500).send({error:err});
      }
    },
  },
];

export default msgsRoute;
