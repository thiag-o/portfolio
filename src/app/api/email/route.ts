import { NextRequest, NextResponse } from 'next/server';

import { ISendEmailBody } from '@/interfaces/sendEmailBody.interface';
import { sendMail } from '@/service/sendmail';

export async function POST(req: NextRequest) {
  try {
    const sendMailBody: ISendEmailBody = await req.json();
    await sendMail(sendMailBody);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.message) {
      return NextResponse.json({
        message: 'Falha ao enviar o email, Tente novamente mais tarde.',
      });
    }
  }
}
