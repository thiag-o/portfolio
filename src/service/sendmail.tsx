import { render } from '@react-email/render';
import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { ISendEmailBody } from '@/interfaces/sendEmailBody.interface';

import Contact from '../../emails/Contact';

const transporterConfig: SMTPTransport.Options = {
  host: 'smtp.mailersend.net',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export async function sendMail({ email, name, subject }: ISendEmailBody) {
  const transporter = createTransport(transporterConfig);
  const htmlContactTemplate = render(
    <Contact email={email} name={name} subject={subject} />
  );
  const info = await transporter.sendMail({
    from: '"thiag-o" <MS_yJAlzl@trial-3vz9dle7m0n4kj50.mlsender.net>',
    cc: 'thiagobmansano@gmail.com',
    to: email,
    subject: 'Contato',
    html: htmlContactTemplate,
  });

  console.log('Message sent: %s', info.messageId);
}
