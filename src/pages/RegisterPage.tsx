import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  return (
    <div className="pt-12 min-h-screen w-full bg-[url('./assets/bg.png') bg-gray-100] pb-12">
      <div className="flex flex-col items-center justify-center lg:py-0">
        <div className="w-1/3 bg-gray-100 rounded-lg shadow">
          <div className="p-6 space-y-4 sm:p-8">
            {/* {error && (
              <p className="text-red-600 text-sm mb-2 text-right">{error}</p>
            )} */}

            <h2 className="text-2xl w-full font-bold text-gray-900 text-right">
              Register
            </h2>

            <form action="#">
              {/* <form onSubmit={handleSubmit} action="#"> */}
              <div>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@domain.com"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="FName"
                  id="FName"
                  placeholder="First Name"
                  //   value={firstName}
                  //   onChange={(e) => {
                  //     setFirstName(e.target.value);
                  //   }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="LName"
                  id="LName"
                  placeholder="Last Name"

                  //   value={lastName}
                  //   onChange={(e) => {
                  //     setLastName(e.target.value);
                  //   }}
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  //   value={password}

                  // '                  onChange={(e) => {
                  //                     setPassword(e.target.value);
                  //                     setError(null);
                  //                   }}
                />
              </div>

              <Button
                // text={mutation.isLoading ? "Create..." : "Create an account"}
                text="Register"
                // disabled={mutation.isLoading}
                type="submit"
              />

              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <Link to="/">
                  <span className="text-blue-600 font-semibold">
                    {" "}
                    Login here.
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
