import React from 'react'

function Login() {
  return (
    <div>
      <div className="container-fluid">
<div className="row d-flex justify-content-center align-items-center m-0" style={{height: "100vh"}}>
    <div className="login_oueter">
      {/* <div className="col-md-12 logo_outer">
        <img src="https://bootstrapfriendly.com/static/images/bootstrapfriendly_logo.png" />
      </div> */}
      <form action="" method="post" id="login" autoComplete="off" className="bg-light border p-3">
        <div className="form-row">
          <h4 className="title my-3">Login For Access</h4>
          <div className="col-12">
            <div className="form-group col-md-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
              </div>
              <input name="username" type="text" value="" className="input form-control" id="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group col-md-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span>
              </div>
              <input name="password" type="password" value="" className="input form-control" id="password" placeholder="password" required="true" aria-label="password" aria-describedby="basic-addon1" />
              <div className="input-group-append">
                <span className="input-group-text" onclick="password_show_hide();">
                  <i className="fas fa-eye" id="show_eye"></i>
                  <i className="fas fa-eye-slash d-none" id="hide_eye"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group form-check text-left">
              <input type="checkbox" name="remember" className="form-check-input" id="remember_me" />
              <label className="form-check-label" for="remember_me">Remember me</label>
            </div>
          </div>
          <div className="col-sm-12 pt-3 text-right">
            <p>Already registered <a href="#">Register</a></p>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit" name="signin">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
