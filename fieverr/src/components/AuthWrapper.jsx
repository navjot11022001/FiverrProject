import React from "react";

const AuthWrapper = () => {
  return (
    <div className="fixed top-0 z-[100] opacity-1">
      <div
        className="h-[100vh] w-[100vw] fixed top-0 backdrop-filter-md"
        id="blur-div"
      ></div>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
        <div
          className="fixed z-[101] h-max w-max bg-white flex flex-col justify-center items-center"
          id="auth-model"
        >
          <div className="flex flex-col justify-center items-center p-8 gap-7">
            <h3>Login to fiverr</h3>
            <div className="flex flex-col gap-5">
              <button>Continue to Facebook</button>
              <button>Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
