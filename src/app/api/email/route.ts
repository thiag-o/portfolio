// import { NextRequest, NextResponse } from 'next/server';

// import { ISendEmailBody } from '@/interfaces/sendEmailBody.interface';
// import { sendMail } from '@/service/sendmail';

// export async function POST(req: NextRequest) {
//   try {
//     const sendMailBody: ISendEmailBody = await req.json();
//     await sendMail(sendMailBody);

//     return NextResponse.json({ ...sendMail }, { status: 201 });
//   } catch (e) {
//     throw e;
//   }
// }
