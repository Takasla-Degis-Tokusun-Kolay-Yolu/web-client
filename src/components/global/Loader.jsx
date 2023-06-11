import { Spin } from "antd";


export const Loader = () => {

  return (
      <div className="flex justify-center bg-white items-center overflow-y-hidden h-screen" >
          <div >
              <Spin className="mx-auto" size="large" />
          </div>
      </div>
  );
};
