import client from '../../libs/client';

export default async function handler(req, res
) {
  await client.user.create({
    data: {
      name: 'test',
      email: 'lesson06@naver.com',
    },
  });

  res.json({
    ok: true,
  });
}
