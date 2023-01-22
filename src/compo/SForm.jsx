import { useFormik } from "formik";
import { object, string } from "yup";

const SForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: object({
      firstName: string().required("First Name cannot be empty"),
      lastName: string().required("Last Name cannot be empty"),
      email: string().email("Looks like this is not an email").required("Email cannot be empty"),
      password: string().required("Password cannot be empty"),
    }),
    onSubmit: (val) => {
      alert(`Hi ${val.firstName} ${val.lastName}, Your trail period is activated!`);
    },
  });

  return (
    <>
      <div className="wrapper">
        <div className="trybox">
          <p>
            <span className="f-bold">Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <div className="signupCard">
          <form onSubmit={formik.handleSubmit} className="signupForm">
            <input
              className={formik.errors.firstName && formik.touched.firstName ? "error" : null}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
              autoComplete="off"
            />
            {formik.errors.firstName && formik.touched.firstName ? <p>{formik.errors.firstName}</p> : null}
            <input
              className={formik.errors.lastName && formik.touched.lastName ? "error" : null}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              name="lastName"
              type="text"
              placeholder="Last Name"
              autoComplete="off"
            />
            {formik.errors.lastName && formik.touched.lastName ? <p>{formik.errors.lastName}</p> : null}
            <input
              className={formik.errors.email && formik.touched.email ? "error" : null}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              type="email"
              placeholder={formik.errors.email && formik.touched.email ? "email@example.com" : "Email Address"}
              autoComplete="on"
            />
            {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : null}
            <input
              className={formik.errors.password && formik.touched.password ? "error" : null}
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            {formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : null}

            <button type="submit" className="btn">
              Claim your free trail
            </button>
          </form>
          <p>
            By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SForm;
