'use client';

import React from 'react';

import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa6';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type={'submit'}
      className={
        'group font-iranSans self-end flex justify-center items-center gap-3 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all haf hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10'
      }
      disabled={pending}
    >
      {pending ?
        <div className={"w-5 aspect-square animate-spin rounded-full border-b-2 border-white"}/>
      : <>
          ارسال{' '}
          <FaPaperPlane
            className={
              'transition-all group-hover:translate-x-1 group-hover:-translate-y-1'
            }
          />
        </>
      }
    </button>
  );
};

export default SubmitButton;
