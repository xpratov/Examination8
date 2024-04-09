import { useForm } from "react-hook-form";
import Label from "../../components/Label";
import LoginInput from "../../components/LoginInput";
import { useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,} from "firebase/auth";
import { GoogleProvider, auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Registration = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const onSubmit = (data: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => navigate("/"))
      .catch(() => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then(
          (credential) => {
            if (credential.user) {
              navigate("/");
            }
          }
        );
      });
  };

  useEffect(() => {
    if (auth.currentUser) {
      navigate("/");
    }
  }, []);

  const authGoogle = () => {
    signInWithPopup(auth, GoogleProvider).then((userCredintal) => {
      if (userCredintal.user) {
        navigate("/");
      }
    }).catch(()=>toast.error("Registration is not successfully"))
  };
  return (
    <main className="min-h-[calc(100dvh-80px)] w-full flex justify-center overflow-hidden">
      <Toaster position="top-right" richColors />
      <div className="pt-40 max-w-[500px] w-full px-6">
        <h1 className=" dark:text-white text-3xl text-center text-black font-semibold mb-5">Registration for FREE</h1>
        <form className="flex flex-col gap-6 min-w-full " onSubmit={handleSubmit((data: any) => onSubmit(data))}>
          <div className="grid">
            <Label>Email:</Label>
            <div className="relative dark:text-purple text-purpleLight">
              <LoginInput type="mail" name="email" form={register} className=" pr-14 text-black" />
              <svg className="absolute top-1/2 -translate-y-1/2 right-4" width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
              </svg>
            </div>
          </div>
          <div className="grid">
            <Label>Password:</Label>
            <div className="relative dark:text-purple text-purpleLight">
              <LoginInput type={show ? "text" : "password"}
                name="password"
                form={register}
                className=" pr-14 text-black"
              />
              <svg xmlns="http://www.w3.org/2000/svg" 
                onClick={()=>{setShow(!show)}} 
                viewBox="0 0 24 24" 
                className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-4"
                width={30}
                fill="currentColor">
                <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
              </svg>
            </div>
          </div>

          <button className="py-3 px-6 dark:bg-purple rounded-md active:scale-95 font-bold dark:text-white mx-auto inline-block lg:hover:opacity-75 bg-purpleLight text-white" type="submit">Register</button>
        </form>
        <span className="block text-center  mt-4">
          <Label>or</Label>
        </span>
        <button type="button" onClick={() => authGoogle()} className="py-2 px-5 flex hover:opacity-70 items-center bg-white text-purpleLight font-bold mx-auto mt-4 rounded-md dark:bg-[transparent] border-[2px] dark:border-purple border-purpleLight dark:text-white active:scale-90 ">Registration with Google</button>
      </div>
    </main>
  );
};

export default Registration;
