import { NextApiRequest, NextApiResponse } from 'next';
import handleError from '@/controllers/error/handle_error';
import checkSupportMethod from '@/controllers/error/check_support_method';
import MessageCtrl from '@/controllers/message.ctrl';

// members.add.ts 복북
// POST만 할 예정
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('👀 messages.info에서 MessageCtrl.get 해요');
  const { method } = req;
  const supportMethod = ['GET'];
  try {
    checkSupportMethod(supportMethod, method);
    await MessageCtrl.get(req, res);
  } catch (err) {
    console.error(err);
    //에러 처리
    handleError(err, res);
  }
}
