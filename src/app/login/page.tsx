import Iridescence from "../../components/Iridescence";

export default async function Page() {
  return (
    <>
      <div className="flex flex-row w-full bg-white z-10">
        <div className="w-1/2 h-screen">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <div className="h-auto flex flex-col justify-center p-10 w-auto">
          <div className="w-full space-y-4">
            <h1 className="text-2xl font-bold">Login</h1>
            <input
              type="text"
              placeholder="User Name"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Password"
              className="input w-full"
            />
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
