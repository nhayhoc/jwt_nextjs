
import '../static/vendor/bootstrap/css/bootstrap.min.css';
import '../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../static/fonts/iconic/css/material-design-iconic-font.min.css';
import '../static/vendor/animate/animate.css';
import '../static/vendor/css-hamburgers/hamburgers.min.css';
import '../static/vendor/animsition/css/animsition.min.css';
import '../static/vendor/select2/select2.min.css';
import '../static/vendor/daterangepicker/daterangepicker.css';


import '../static/css/main.css'
import '../static/css/util.css'

import React, { Component } from 'react';
import Link from 'next/link'
import Fonts from './Fonts';

class index extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		// this.state = { counter: 0 };
		// this.handleClick = this.handleClick.bind(this);
	}



	componentDidMount () {
		Fonts()
	}
	

	render() {
		return (
			<div>
			<style  /> {/* dangerouslySetInnerHTML={{ __html: BootstrapStyle }} */}
			<div className="limiter">
				<div className="container-login100" style={{backgroundImage: "url('../static/images/bg-01.jpg')"}}>
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
						<form className="login100-form validate-form">
							<span className="login100-form-title p-b-49">
								Login
							</span>
		
							<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
								<span className="label-input100">Username</span>
								<input className="input100" type="text" name="username" placeholder="Type your username" />
								<span className="focus-input100" data-symbol="&#xf206;"></span>
							</div>
		
							<div className="wrap-input100 validate-input" data-validate="Password is required">
								<span className="label-input100">Password</span>
								<input className="input100" type="password" name="pass" placeholder="Type your password"/>
								<span className="focus-input100" data-symbol="&#xf190;"></span>
							</div>
							
							<div className="text-right p-t-8 p-b-31">
								<a href="#">
									Forgot password?
								</a>
							</div>
							
							<div className="container-login100-form-btn">
								<div className="wrap-login100-form-btn">
									<div className="login100-form-bgbtn"></div>
									<button className="login100-form-btn">
										Login
									</button>
								</div>
							</div>
		
							<div className="txt1 text-center p-t-54 p-b-20">
								<span>
									Or Sign Up Using
								</span>
							</div>
		
							<div className="flex-c-m">
								<a href="#" className="login100-social-item bg1">
									<i className="fa fa-facebook"></i>
								</a>
		
								<a href="#" className="login100-social-item bg2">
									<i className="fa fa-twitter"></i>
								</a>
		
								<a href="#" className="login100-social-item bg3">
									<i className="fa fa-google"></i>
								</a>
							</div>
		
							<div className="flex-col-c p-t-155">
								<span className="txt1 p-b-17">
									Or Sign Up Using
								</span>
								<Link href="/register">
      
	  
   
									<a className="txt2">
										Sign Up
									</a>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
			<style jsx>{`
						
			
			`}
		
			</style>
			</div>
		);
	}
}

export default index;
