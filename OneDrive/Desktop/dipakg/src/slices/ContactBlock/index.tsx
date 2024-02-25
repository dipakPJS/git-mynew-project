"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

/* importing react toastify */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type ContactBlockProps = SliceComponentProps<Content.ContactBlockSlice>;

const ContactBlock = ({ slice }: ContactBlockProps): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_lg2ger9", "template_lk5qgx6", form.current, {
          publicKey: "-zrV3u5X-tmUn89tb",
        })
        .then(
          () => {
            toast.success("Email Sent successfully");
            form.current?.reset();
          },
          (error) => {
             toast.error("Error Sending Email");
          },
        );
    }
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-5 py-0">
        <div className="mb-12 flex w-full flex-col text-center">
          <Heading as="h1" size="xl">
            {slice.primary.heading}
          </Heading>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            {slice.primary.description}
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto md:w-2/3 lg:w-1/2"
        >
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-slate-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Enter your Name"
                  required
                  className="w-full rounded-[15px] border bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-800 focus:bg-white focus:ring-2 focus:ring-red-200"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-slate-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="Enter your Email"
                  required
                  className="w-full rounded-[15px] border bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-800 focus:bg-white focus:ring-2 focus:ring-red-200"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="text-sm leading-7 text-slate-100"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the Subject"
                  required
                  className="w-full rounded-[15px] border bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-800 focus:bg-white focus:ring-2 focus:ring-red-200"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-slate-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your Message"
                  required
                  className="h-32 w-full resize-none rounded-[20px] border bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-800 focus:bg-white focus:ring-2 focus:ring-red-200"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                value="send"
                className="group relative mx-auto flex w-fit items-center justify-center overflow-hidden rounded-[55px] border-2 border-slate-900 bg-slate-50 px-10 py-2 font-bold text-slate-900 transition-transform ease-out hover:scale-105"
              >
                <span className="h-ful absolute inset-0 z-0 translate-y-9 rounded-[50px] bg-[#0037ff] transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                <span className="relative flex items-center justify-center gap-2">
                  {slice.primary.contact_text}
                </span>
              </button>
              <ToastContainer />
            </div>
            <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
              <p>
                You can contact me through this email:{" "}
                <a href="#" className="text-bold text-[20px] text-blue-500">
                  {slice.primary.contact_email}
                </a>{" "}
              </p>

              <p className="my-5 leading-normal">
                Bhalwari
                <br />
                {slice.primary.contact_address}
              </p>
            </div>
          </div>
        </form>
      </div>
    </Bounded>
  );
};

export default ContactBlock;
