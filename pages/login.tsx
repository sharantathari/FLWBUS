import Footer from "@/components/common/Footer";
import Preloader from "@/components/common/Preloader";
import Link from "next/link";
import login from '@/public/logimg.png'
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'
export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            return;
        }
        try {
            const token = await axios.post('/api/login', { email, password });
            console.log("Login successful. Token:", token?.data?.token?.token);
            const newToken = token?.data?.token?.token
            if(newToken){
              Cookies.set('authToken',newToken,{expires:7})  
            }else{
                console.log('Error Occured')
            }
        } catch (error: any) {
            console.error("Login failed:", error.message);
        }
    }
    return (
        <>
            {/* <Preloader/> */}
            <div className="m-application theme--dark transition-page" id="app">
                <div className="loading" />
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="register-page">
                        <div className="main-wrap">
                            <header className="app-bar header" id="header">
                                <div className="container">
                                    <div className="header-content">
                                        <nav className="nav-menu flex-grow-1">
                                            <div className="logo flex-grow-1 start-mobile">
                                                <Link href="/">
                                                    <span className="logo-main landscape medium">
                                                        <img src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/updated/flow-logo.svg" alt="logo" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <nav className="user-menu">
                                                <Link className="btn primary waves-effect" href="/register">
                                                    register
                                                </Link>
                                                <span className="spacer vertical-divider show-md-up" />
                                                <div className="menu-setting"></div>
                                            </nav>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="container-general container-front">
                                <div className="form-style">
                                    <div className="page-wrap">
                                        <div className="container inner-wrap">
                                            <div className="auth-frame">
                                                <div className="row mb-0">
                                                    <div className="col-md-6 px-lg-6 px-2">
                                                        <div className="card form-box fragment-fadeUp">
                                                            <div className="form-wrap">
                                                                <div className="form-style">
                                                                    <div className="head">
                                                                        <h4
                                                                            className="use-text-title mq-md-up use-text-primary"
                                                                            data-class="use-text-subtitle"
                                                                        >
                                                                            Welcome back
                                                                        </h4>
                                                                    </div>
                                                                    <div className="socmed-side-login">
                                                                        <button className="btn navi-btn waves-effect">
                                                                            <i className="ion-social-facebook left" />
                                                                            Facebook
                                                                        </button>
                                                                        <button className="btn blue-btn waves-effect">
                                                                            <i className="ion-social-twitter left" />
                                                                            Twitter
                                                                        </button>
                                                                        <button className="btn red-btn waves-effect">
                                                                            <i className="ion-social-google left" />
                                                                            Google
                                                                        </button>
                                                                    </div>
                                                                    <div className="separator">
                                                                        <p>Or login with email</p>
                                                                    </div>
                                                                    <form id="login_form" method="post" onSubmit={handleSubmit}>
                                                                        <div className="row spacing3 mb-0">
                                                                            <div className="col-sm-12">
                                                                                <div className="input-field dark">
                                                                                    <input
                                                                                        className="validate"
                                                                                        id="email"
                                                                                        type="email"
                                                                                        name="email"
                                                                                        required
                                                                                        value={email}
                                                                                        onChange={(e) => { setEmail(e.target.value) }}
                                                                                    />
                                                                                    <label htmlFor="email">Email</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12">
                                                                                <div className="input-field dark">
                                                                                    <input
                                                                                        className="validate"
                                                                                        id="password"
                                                                                        type="password"
                                                                                        name="password"
                                                                                        required
                                                                                        value={password}
                                                                                        onChange={(e) => { setPassword(e.target.value) }}
                                                                                    />
                                                                                    <label htmlFor="password">Password</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-helper mt-sm-4">
                                                                            <div className="form-control-label">
                                                                                <label>
                                                                                    <input
                                                                                        className="filled-in secondary"
                                                                                        type="checkbox"
                                                                                    />
                                                                                    <span>Remember</span>
                                                                                </label>
                                                                            </div>
                                                                            <a className="btn-flat button-link" href="#">
                                                                                Forgot Password
                                                                            </a>
                                                                        </div>
                                                                        <div className="btn-area">
                                                                            <button
                                                                                className="btn primary btn-large block waves-effect"
                                                                                type="submit"
                                                                            >
                                                                                Continue
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="hidden-sm-down">
                                                            <div className="greeting">
                                                                <h4 className="use-text-title2 use-text-primary pb-2">
                                                                    Please login to continue
                                                                </h4>
                                                                <h6 className="use-text-subtitle2">
                                                                    A platform with efficient integration of many features and
                                                                    so much more
                                                                </h6>
                                                                <div className="img">
                                                                    <Image
                                                                        className="img-2d3d"
                                                                        src={login}
                                                                        data-2d="https://cdn.global.noobsverse.com/cc.flowbus/assets"
                                                                        data-3d="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/login_3D@2x.png"
                                                                        alt="login"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

