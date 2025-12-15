'use server';

import { contactSchema } from '@/schemas/contactSchema';
import { Resend } from 'resend';
import z from "zod";
import { validateCaptcha } from './validateCaptcha';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailHtmlModel = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contato Potifólio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f7;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #010E36;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
    }
    .content p {
      line-height: 1.5;
      margin-bottom: 10px;
    }
    .footer {
      background-color: #f4f4f7;
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #999999;
    }
    .highlight {
      color: #010E36;
      font-weight: bold;
    }
    @media (max-width: 600px) {
      .container {
        width: 95%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      Novo Contato - Portifólio
    </div>
    <div class="content">
      <p>Nome: <span class="highlight">{{name}}</span>,</p>
      <p>Mensagem recebida através do formulário de contato</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Assunto:</strong> {{subject}}</p>
      <p><strong>Mensagem:</strong></p>
      <p>{{message}}</p>
    </div>
    <div class="footer">
      Este é um email do meu portifólio.
    </div>
  </div>
</body>
</html>
`

export async function sendEmail(formData: any) {
  try {
    // Validate with zod. It is going to throw an error if is something wrong.
    const validetedBody = contactSchema.parse(formData);

    if ((validetedBody.phone && validetedBody.phone.trim() !== "") || !validetedBody.captchaToken) {
      return { message: "Ignored", ok: false }
    }

    const isValidCaptcha = await validateCaptcha(validetedBody.captchaToken);
    if (!isValidCaptcha) {
      return { message: "Robot", ok: false }
    }

    const emailHTML = emailHtmlModel
      .replace('{{name}}', `${validetedBody.name.replaceAll('<', '').replace('>', '')}`)
      .replace('{{email}}', `${validetedBody.email.replaceAll('<', '').replace('>', '')}`)
      .replace('{{subject}}', `${validetedBody.subject.replaceAll('<', '').replace('>', '')}`)
      .replace('{{message}}', `${validetedBody.message.replaceAll('<', '').replace('>', '')}`);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: `${process.env.CONTACT_EMAIL}`,
      subject: 'Email do Portifólio',
      html: emailHTML
    });

    if (error) {
      return { message: "Server error", ok: false }
    }

    return { message: "Sent", ok: true }
  } catch (e: unknown) {
    if (e instanceof z.ZodError) {
      return { message: "Invalid fields", ok: false }
    }

    return { message: "Server error", ok: false }
  }
}