const SForm = () => {
  return (
    <>
      <div className="wrapper">
        <div className="trybox">
          <p>
            <span className="f-bold">Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <div className="signupCard">
          <form className="signupForm">
            <input name="firstName" type="text" placeholder="First Name" />
            <input name="secondName" type="text" placeholder="Second Name" />
            <input name="email" type="email" placeholder="Email Address" />
            <input name="password" type="password" placeholder="Password" />

            <button className="btn">Claim your free trail</button>
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
