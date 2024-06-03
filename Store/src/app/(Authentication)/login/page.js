"use client";
import Link from "next/link";
import { FiLock, FiMail } from "react-icons/fi";
//internal  import
// import Error from "@component/form/Error";
import Error from "@/components/form/Error";
// import Input from "@component/form/Input";
// import Input from "@/components/form/Input";
// import useLoginSubmit from "@hooks/useLoginSubmit";
// import UseLoginSubmit from "@hooks/useLoginSubmit";
// import InputArea from "@component/form/InputArea";
// import Input from "@/components/form/Input";
import InputArea from "@/components/form/InputArea";
import useLoginSubmit from "@/hooks/useLoginSubmit";

const Login = ({ setShowResetPassword, setModalOpen }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setModalOpen);

  return (
    <>
      <div className="mb-6 mt-8 text-center sm:mt-10 md:mt-14 lg:mt-20">
        <h2 className="font-serif text-3xl font-bold">Login</h2>
        <p className="mb-8 mt-2 text-sm text-gray-500 sm:mb-10 md:text-base">
          Login with your email and password
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mx-auto flex max-w-[500px] flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="paul@gmail.com"
              label="Email"
              name="registerEmail"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={errors.registerEmail} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="12345678"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={errors.password} />
          </div>

          <div className="flex items-center justify-between">
            <div className="ms-auto flex">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-heading ps-3 text-end text-sm underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          {loading ? (
            <button
              disabled={loading}
              type="submit"
              className="mt-1 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-md border-0 border-transparent bg-primary px-5 py-2 text-center text-sm font-medium leading-5 text-white placeholder-white transition duration-300 ease-in-out hover:bg-primary/90 hover:text-white focus:outline-none focus-visible:outline-none sm:w-auto md:px-6 md:py-3 md:text-sm lg:px-8 lg:py-3 lg:text-sm"
            >
              <span className="ml-2 font-serif font-light">Processing</span>
            </button>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="my-1 w-full rounded bg-primary py-3 text-center text-white transition-all hover:bg-primary/90 focus:outline-none"
            >
              Login
            </button>
          )}
        </div>
      </form>
      <p className="mt-2 text-center">
        Don't an account?{" "}
        <Link href="/register" className="underline">
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
