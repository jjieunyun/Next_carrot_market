import client from '../../../libs/server/client';
import withHandler from "../../../libs/server/withHandler";

/*❗️Next.js에서 api를 router하고 싶다면 무조건 export default해줘야함!!!
* nextJS가 사용자가 URL을 호출할 떄 함수를 실행하고 NextJS가 Req와 res을 줌*/
//withHandler의 핵심은 코드를 대신 실행해주는것

async function handler(req, res
) {
  console.log(req.body)
  return res.status(200).end();
}

export default withHandler('POST',handler)