import React from 'react'
import { Link } from 'react-router-dom'

export default class Signin extends React.Component {
  render(){
    return(
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-4 col-xs-4">
            <div class="card bg-primary text-center card-form">
              <div class="card-body">
                <h3 class="text-white">Sign In</h3>
                <h6 class="font-weight-light text-white">Enter your login details</h6>
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" placeholder="Username"/>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-sm" placeholder="Password"/>
                  </div>
                  <Link to='/dashboard' class="btn btn-warning btn-block">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> Sign In
                  </Link>
                </form>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}