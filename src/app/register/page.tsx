import RegisterForm from "@/components/RegisterForm";
import Iridescence from "../../components/Iridescence";

export default async function Page() {
  return (
    <>
      <div className="flex flex-row w-full bg-base-100 z-10">
        <div className="w-1/2 h-screen">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <div className="h-auto flex flex-col justify-center p-10 w-auto">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
