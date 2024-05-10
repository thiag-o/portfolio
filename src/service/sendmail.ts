import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { ISendEmailBody } from '@/interfaces/sendEmailBody.interface';

const transporterConfig: SMTPTransport.Options = {
  host: 'smtp.mailersend.net',
  port: 587,
  secure: false,
  auth: {
    user: 'MS_yJAlzl@trial-3vz9dle7m0n4kj50.mlsender.net',
    pass: 'e1ymD1dXQ0erSrmp',
  },
};

export async function sendMail({ email, name, subject }: ISendEmailBody) {
  const transporter = createTransport(transporterConfig);
  const info = await transporter.sendMail({
    from: '"TESTE" <MS_yJAlzl@trial-3vz9dle7m0n4kj50.mlsender.net>',
    to: 'thiago@clubeagro.com.br',
    subject: 'Contato',
    html: '<b>Hello world?</b>',
  });

  console.log('Message sent: %s', info.messageId);
}
