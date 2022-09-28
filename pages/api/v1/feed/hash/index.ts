// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method, url } = req;
  if (!url) return res.status(400).json({ code: -1 });

  let internal: URL;
  internal = new URL(url, 'http://localhost:3000');
  if (!internal.searchParams) return res.status(400).json({ code: -1 });

  const type = internal.searchParams.get('type');
  const count = internal.searchParams.get('count');
  switch (type) {
    case 'trend':
      return res.status(200).json({
        code: 0,
        data: [
          {
            count: Math.round(Math.random() * 100),
            name: Math.random().toString(36).substring(2, 10),
          },
          {
            count: Math.round(Math.random() * 100),
            name: Math.random().toString(36).substring(2, 10),
          },
          {
            count: Math.round(Math.random() * 100),
            name: Math.random().toString(36).substring(2, 10),
          },
          {
            count: Math.round(Math.random() * 100),
            name: Math.random().toString(36).substring(2, 10),
          },
        ],
      });
  }

  return res.status(400).json({ code: -1 });
}
