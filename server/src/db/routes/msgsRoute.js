// api를 배열로 만들어서 사용하기
import { readDB } from './../../dbController.js';
// 핸들러의 내용 구현하기
const msgsRoute = [
  {
    //GET msgs
    method: "get",
    route: "/messages",
    handler: (req, res) => {
        const msgs= readDB('msgs');
        res.send(msgs);
    },
  },
  {
    //Post msgs
    method: "post",
    route: "/messages",
    handler: (req, res) => {
      res.send();
    },
  },
  {
    //Update msgs
    method: "put",
    route: "/messages/:id",
    handler: (req, res) => {
      res.send();
    },
  },
  {
    //Delete msgs
    method: "get",
    route: "/messages/:id",
    handler: (req, res) => {
      res.send();
    },
  },
];

export default msgsRoute;