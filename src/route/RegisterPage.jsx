import { SignUp } from "@clerk/clerk-react";

const Registerpage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignUp signUpUrl="/login" />
    </div>
  );
};

export default Registerpage;
