'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

// import { Header } from '@root/renderer/components/NewHeader';
// import MobileNav from '@root/renderer/components/MobileNav';

// import BG from '@assets/contact-us-bg.png';
// import './index.css';

type FormData = {
  username: string;
  request: string;
  email: string;
  mobileNumber: number;
  available_time: string;
};

const serviceId = 'service_seoftwb';
const templateId = 'template_wzhjjzg';
const publicKey = '10Pgsib7wbcrHepPa';

function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const { username, email, mobileNumber, request, available_time } = formData;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,

      template_params: {
        from_name: username,
        to_name: 'Luca Squad',
        from_email: email,
        mobile_number: mobileNumber,
        message: request,
        available_time,
      },
    };

    try {
      setIsLoading(true);
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);

      if (!res.ok) throw new Error('Something went wrong, Please try again');

      // alert('Email sent successfully!');
      toast.success('Email sent successfully!', {
        style: {
          border: '1px solid #1A1A1A',
          padding: '16px',
          color: '#1A1A1A',
        },
        iconTheme: {
          primary: '#1A1A1A',
          secondary: '#FFFAEE',
        },
      });
    } catch (err) {
      // console.log(
      //   '🚀 ~ file: index.page.tsx:45 ~ constonSubmit:SubmitHandler<FormData>= ~ err:',
      //   err,
      // );
      // alert('Something went wrong, please try again');
      toast.success('Something went wrong, Please try again.', {
        style: {
          border: '1px solid #1A1A1A',
          padding: '16px',
          color: '#1A1A1A',
        },
        iconTheme: {
          primary: '#1A1A1A',
          secondary: '#FFFAEE',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className='flex flex-1 items-center justify-center max-md:order-last'>
        <div className='container  flex flex-col gap-4  p-8 md:flex-row'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex w-full flex-col'
          >
            <input
              {...register('username', {
                required: 'Please enter your username',
              })}
              className={`focus:outline-primary text-primary py-2 ${
                errors?.username && 'border-2 focus:outline-0'
              }  border-solid border-red-600
              px-4`}
              placeholder='Your Name'
              type='text'
              name='username'
              onKeyDown={(event) => {
                if (!/^[a-zA-Z]*$/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />

            <p className='mb-2 mt-1 text-sm leading-none text-red-600 md:text-base'>
              {errors?.username?.message}
            </p>

            <input
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Please enter a valid email format',
                },
                onChange: () => {
                  trigger('email');
                },
              })}
              className={`focus:outline-primary text-primary  px-4 py-2 ${
                errors?.email &&
                'border-2 border-solid border-red-600 focus:outline-0'
              }`}
              placeholder='E-Mail'
              type='email'
              name='email'
            />

            <p className='mb-2 mt-1 text-sm leading-none text-red-600 md:text-base'>
              {errors?.email?.message}
            </p>

            <input
              {...register('mobileNumber', {
                required: 'Please enter your mobile number',
                pattern: {
                  value: /^\+39\d*$/,
                  message:
                    'Please enter a valid mobile number starting with +39',
                },
                maxLength: 13,
                onChange: () => {
                  trigger('mobileNumber');
                },
              })}
              className={`focus:outline-primary text-primary px-4 py-2 ${
                errors?.mobileNumber &&
                'border-2 border-solid border-red-600 focus:outline-0'
              }`}
              placeholder='Mobile Number: +390297134070'
              type='text'
              name='mobileNumber'
              onKeyDown={(event) => {
                if (event.key === 'Backspace' || event.key === 'Tab') {
                  return;
                }
                if (!/[\d+]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />

            <p className='mb-2 mt-1 text-sm leading-none text-red-600 md:text-base'>
              {errors?.mobileNumber?.message}
            </p>
            {errors.mobileNumber &&
              errors.mobileNumber.type === 'maxLength' && (
                <span className='mb-2 text-sm leading-none text-red-600 md:text-base'>
                  Max length exceeded
                </span>
              )}
            <input
              {...register('available_time')}
              className='focus:outline-primary text-primary px-4 py-2'
              placeholder='Available time to connect'
              type='text'
              name='available_time'
            />

            <textarea
              {...register('request', {
                required: 'Please enter your request',
              })}
              className={`focus:outline-primary text-primary mb-2 mt-3 h-48 resize-none px-4 py-2 ${
                errors?.request &&
                'border-2 border-solid border-red-600 focus:outline-0'
              }`}
              placeholder='Request'
              name='request'
              rows={3}
              cols={10}
            ></textarea>

            <p className='mb-2 mt-1 text-sm leading-none text-red-600 md:text-base'>
              {errors?.request?.message}
            </p>

            <button
              className='mt-3 w-1/2  border border-white bg-ls-primary px-3 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-ls-primary hover:text-white disabled:bg-[#DCDCDC] md:w-1/3 md:text-lg'
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  aria-hidden='true'
                  role='status'
                  className='inline h-5 w-5 animate-spin'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='#1A1A1A'
                  ></path>
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='#D3D3D3'
                  ></path>
                </svg>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default EmailForm;
