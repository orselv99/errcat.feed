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

  function generateRandom(scope: number = 1) {
    return Math.round(Math.random() * scope);
  }

  const mockups = [];
  for (let i = 0; i < 5; i++) {
    mockups.push({
      thumbnail:
        'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      profile: {
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Joseph Therrien',
      },
      content: {
        title: 'White Mountains',
        preview:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...',
        indicator: [
          {
            // view
            key: generateRandom() === 1 ? '✔' : '👁‍🗨',
            value: generateRandom(100000),
          },
          {
            // reply
            key: '💬',
            value: generateRandom(100),
          },
          {
            // thumbsup
            key: generateRandom() === 1 && Math.random() * 10 > 4 ? '✨' : '⭐',
            value: generateRandom(1000),
          },
        ],
      },
    });
  }

  return res.status(200).json({ code: 0, data: mockups });
}
