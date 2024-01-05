import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className=" flex justify-center flex-col gap-8">
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Welcome to your Sites
      </h1>
      <p> Login or Signup to continue</p>
      <div>
        <Button className="mx-5" onClick={()=> navigate('/login')}>Log In</Button>
        <Button onClick={()=> navigate('/signup')}>Sign Up</Button>
      </div>
    </div>
  );
};

export default LandingPage;
