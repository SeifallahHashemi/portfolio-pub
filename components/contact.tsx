'use client';

import React from 'react';

import { FaPaperPlane } from 'react-icons/fa6';
import {motion} from "framer-motion"
import { sendEmail } from "@/utils/actions/form-action";

import useInview from '@/hooks/useInview';
import SectionHeader from '@/components/section-header';
import SubmitButton from "@/components/submit-button";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useInview('contact');
  return (
    <motion.section
      id={'contact'}
      ref={ref}
      className={'mb-20 sm:mb-28 w-[min(100%,38rem)]'}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      viewport={{ once: true }}
    >
      <SectionHeader>ارتباط با من</SectionHeader>
      <p className={'font-iranSansDn text-gray-700 text-justify dark:text-white/80'}>
        برای ارتباط با من یا از طریق شماره تلفن{' '}
        <a className={'underline dark:text-gray-700 dark:hover:text-gray-100 transition'} href='tel:+989144175370'>
          09144175370
        </a>{' '}
        و یا از طریق ایمیل به این آدرس{' '}
        <a
          href='mailto:sepehrhashemimamaquani1996@gmail.com'
          className={'underline dark:text-gray-700 dark:hover:text-gray-100 transition'}
        >
          sepehrhashemimamaquani1996@gmail.com
        </a>{' '}
        و یا نهایتا از طریق فرم زیر میتوانید اقدام نمائید
      </p>
      <form className={'mt-10 flex flex-col dark:text-black'} action={async (fd) => {
        const {data, error} = await sendEmail(fd);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Email Sent Successfully");
      }}>
        <input
          type='email'
          name={'email'}
          className={'h-14 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'}
          placeholder={"ایمیل"}
        />
        <textarea name={"massage"} className={'h-52 rounded-lg borderBlack p-4 my-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'} placeholder={"لطفا پیام خود را بنویسید"}/>
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
