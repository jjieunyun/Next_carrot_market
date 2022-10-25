import mail from "@sendgrid/mail";
import twilio from "twilio";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

/*❗️Next.js에서 api를 router하고 싶다면 무조건 export default해줘야함!!!
 * nextJS가 사용자가 URL을 호출할 떄 함수를 실행하고 NextJS가 Req와 res을 줌*/
//withHandler의 핵심은 코드를 대신 실행해주는것

mail.setApiKey(process.env.SENDGRID_KEY);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(req, res) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE,
    //   body: `Your login token is ${payload}.`,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await mail.send({
    //   from: "lesson0186@gmail.com",
    //   to: "lesson0186@gmail.com",
    //   subject: "Your Carrot Market Verification Email",
    //   text: `Your token is ${payload}`,
    //   html: `<strong>Your token is ${payload}</strong>`,
    // });
    // console.log(email);
  }
  return res.json({
    ok: true,
  });
}

export default withHandler({
  method: "POST",
  handler,
  isPrivate: false,
});
