import { ValidationError, useForm } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useRef, useState } from "react";
import { LoadingIcon } from "../icons/icons";

export const ContactMeForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!
  );

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };
  useEffect(() => {
    if (state.succeeded && formRef.current && captchaRef.current) {
      formRef.current.reset();
      captchaRef.current.reset();
      setCaptchaToken(null);
    }
  }, [state.succeeded]);
  return (
    <form
      ref={formRef}
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-xs sm:w-sm md:w-lg bg-white/25 justify-center items-center p-8 rounded-lg"
    >
      <div className="w-full">
        <label htmlFor="name" className="flex mb-1 font-bold dark:text-white">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 dark:text-white rounded"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-700 text-sm font-semibold pt-2"
        />
      </div>
      <div className="w-full">
        <label htmlFor="email" className="flex mb-1 font-bold dark:text-white">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="john@doe.com"
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 dark:text-white rounded"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-700 text-sm font-semibold pt-2"
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="message"
          className="flex mb-1 font-bold dark:text-white"
        >
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Let me know how I can help you or what you'd like to collaborate on."
          className="w-full h-40 resize-none px-4 py-2 bg-gray-800 border border-gray-700 dark:text-white rounded"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-700 text-sm font-semibold pt-2"
        />
      </div>

      <ReCAPTCHA
        ref={captchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={handleCaptchaChange}
        size="normal"
        className="ml-0.5 py-2"
      />

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-800 disabled:bg-slate-400 disabled:cursor-not-allowed cursor-pointer dark:text-white px-6 py-2 rounded"
        disabled={state.submitting || !captchaToken}
      >
        {state.submitting ? (
          <div className="flex items-center gap-2 w-24">
            <LoadingIcon />
            Sending...
          </div>
        ) : (
          "Send Message"
        )}
      </button>

      {state.errors && state.errors?.getFormErrors().length !== 0 && (
        <p className="text-red-700 text-sm font-semibold">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};
