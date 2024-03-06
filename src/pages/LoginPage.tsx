import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-[url('./assets/bg.png') bg-gray-100]">
      <div className="pt-12 w-full flex flex-col items-center">
        <form
          className="w-1/3 bg-gray-100 p-8 rounded-lg"
          //   onSubmit={(e) => handleLogin(e)}
        >
          <h2 className="text-2xl font-bold mb-6 text-right text-gray-900">
            Login
          </h2>

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            //   setError(null);
            // }}
          />
          <Link to="/burger">
            <Button
              text={"Login"}
              // text={loginMutation.isLoading ? "Authentication..." : "Login"}
              // disabled={loginMutation.isLoading}
              type="submit"
            />
          </Link>
          <p className="text-center text-gray-600">
            Don&apos;t have an account?
            <Link to="/register">
              <span className="text-blue-600 font-semibold"> Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
