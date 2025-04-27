import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Avatar from "../../Components/FormAvatar/Avatar";

export default function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: (values) => {
      // Save the user data to localStorage
      localStorage.setItem("userInfo", JSON.stringify(values));
      console.log("User registered:", values);
      navigate("/login");
    },
  });

  return (
    <>
      <section className="bg-white">
        <div className="flex items-center justify-around px-6 py-10 mx-auto">
          <div className="w-full rounded-lg shadow-lg bg-white/30 backdrop-blur-md border border-white/40 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white/70 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white/70 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-white/70 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      name="terms"
                      checked={formik.values.terms}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-4 h-4 border border-gray-300 rounded bg-white/70 focus:ring-3 focus:ring-blue-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <a
                        className="font-medium text-blue-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {formik.touched.terms && formik.errors.terms ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.terms}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <Avatar />
        </div>
      </section>
      <Footer />
    </>
  );
}
