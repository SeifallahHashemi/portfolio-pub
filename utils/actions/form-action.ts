'use server';

import {getErrorMassage, validateString} from '@/utils/utils';
import { Resend } from 'resend';
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const massage = formData.get('massage');
  const email = formData.get('email');

  if (!validateString(email, 100)) {
    return {
      error: 'invalid Email',
    };
  }
  if (!validateString(massage, 500)) {
    return {
      error: 'invalid massage',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form<onboarding@resend.dev>',
      // to: "sepehrhashemimamaquani1996@gmail.com",
      to: 'sepehrhashemimamaquani1996@gmail.com',
      subject: 'Massage from contact form',
      // text: massage as string,
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        massage: massage as string,
        email: email as string,
      }),
    });
  } catch (e: unknown) {
    return {
      error: getErrorMassage(e),
    }
  }
  return {
    data,
  }
};
