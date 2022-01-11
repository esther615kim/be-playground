import fs from 'fs';
import {resolve} from 'path';

const basePath = resolve();

const filenames = {
  msgs: resolve(basePath, 'src/db/msgs.json'),
  users: resolve(basePath, 'src/db/users.json'),
}
// msg를 읽을지 user를 읽을지 target으로 받아서 결정해줌
// 인코딩 반드시 넣기('utf-8")
// 제이슨 형식으로 가져와서 => JSON.parse 

// read :target만 지정
export const readDB = target => {
    try {
      return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
    } catch (err) {
      console.error(err)
    }
  };


//write target 지정 + 넣을 데이터
export const writeDB = (target,data) =>{
    try{
        return fs.writeFileSync(filenames[target], JSON.stringify(data)) // data는 js 문법이므로  data형식으로 바꿈
    }catch (err) {
        console.error(err)
      }
    }
