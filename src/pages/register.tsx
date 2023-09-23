import React, { Fragment } from "react";
import Header from "@/components/Layout/Header";
import RegisterPageBackgroundArt from "@/components/Register/RegisterPageBackgroundArt";
import RegistrationFormPanel from "@/components/Register/RegistrationFormPanel";
import Image from "next/image";

const Register = () => {
  return (
    <Fragment>
      <Header pageName="register" />
      <RegisterPageBackgroundArt />

      <main className="w-full h-full pb-20 md:pb-0 lg:h-[82vh] flex flex-col md:flex-col-reverse lg:flex-row justify-between items-center">
        <h1 className="mt-10 w-[90%] text-[15px] sm:text-[24px] md:hidden font-semibold text-[#D434FE]">
          Register
        </h1>
        <div className="z-10">
          <Image
            src="/assets/Images/register-hero.png"
            width={717}
            height={717}
            alt="Register Hero"
            className="md:w-[717px] w-[190px] sm:w-[400px] md:h-[717px] sm:h-[400px]"
          />
        </div>
        <RegistrationFormPanel />
      </main>
    </Fragment>
  );
};

export default Register;