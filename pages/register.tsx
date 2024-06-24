import Footer from "@/components/common/Footer";
import Preloader from "@/components/common/Preloader";
import Link from "next/link";
import login from '@/public/regimg.png'
import Image from "next/image";
import { FormEvent, useState } from "react";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        phone: ''
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            return;
        }

        try {
            const response = await axios.post('/api/register', formData);
            console.log("Registration successful. Response status:", response?.status);
        } catch (error:any) {
            console.error("Registration failed:", error.message);
        }
    };

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
                                            <Link className="btn primary waves-effect" href="/login">
                                               login
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
                                                                        Create new account
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
                                                                    <p>Or register with email</p>
                                                                </div>
                                                                <form onSubmit={handleSubmit} id="register_form" method="post">
                                                                    <div className="row spacing3 mb-0">
                                                                        <div className="col-sm-12">
                                                                            <div className="input-field dark">
                                                                                <input
                                                                                    className="validate"
                                                                                    id="name"
                                                                                    type="text"
                                                                                    name="name"
                                                                                    value={formData.name}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                />
                                                                                <label htmlFor="name">Name *</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-12">
                                                                            <div className="input-field dark">
                                                                                <input
                                                                                    className="validate"
                                                                                    id="email"
                                                                                    type="email"
                                                                                    name="email"
                                                                                    value={formData.email}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                />
                                                                                <label htmlFor="email">Email *</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div
                                                                                className="input-field dark mq-md-up"
                                                                                data-class="me-2"
                                                                            >
                                                                                <input
                                                                                    className="validate"
                                                                                    id="phone"
                                                                                    type="text"
                                                                                    name="phone"
                                                                                    value={formData.phone}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                />
                                                                                <label htmlFor="phone">Phone Number</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div
                                                                                className="input-field dark mq-md-up"
                                                                                data-class="me-2"
                                                                            >
                                                                                <input
                                                                                    className="validate"
                                                                                    id="password"
                                                                                    type="password"
                                                                                    name="password"
                                                                                    value={formData.password}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                />
                                                                                <label htmlFor="password">Password</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div
                                                                                className="input-field dark mq-md-up"
                                                                                data-class="ms-2"
                                                                            >
                                                                                <input
                                                                                    className="validate"
                                                                                    id="confirm"
                                                                                    type="password"
                                                                                    name="confirm"
                                                                                    data-validation="confirmation"
                                                                                    data-validation-confirm="password"
                                                                                    required
                                                                                />
                                                                                <label htmlFor="confirm">Confirm Password</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="btn-area">
                                                                        <div className="form-helper">
                                                                            <div className="form-control-label">
                                                                                <label>
                                                                                    <input
                                                                                        className="filled-in secondary"
                                                                                        type="checkbox"
                                                                                        required
                                                                                    />
                                                                                    <span>
                                                                                        I have read and accept the Terms of{" "}
                                                                                        <a className="link" href="#">
                                                                                            Service &amp; Privacy Policy *
                                                                                        </a>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-4">
                                                                            <button
                                                                                className="btn primary btn-large waves-effect"
                                                                                type="submit"
                                                                            >
                                                                                Continue
                                                                            </button>
                                                                        </div>
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
                                                                Just register to join with us
                                                            </h4>
                                                            <h6 className="use-text-subtitle2">
                                                                A platform with efficient integration of many features and
                                                                so much more
                                                            </h6>
                                                            <div className="img">
                                                                <Image
                                                                    className="img-2d3d"
                                                                    src={login}
                                                                    // data-2d="https://cdn.global.noobsverse.com/cc.flowbus/assets"
                                                                    // data-3d="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/education/register_3D@2x.png"
                                                                    alt="register"
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
    );
}
