export default function End() {
    return (
        <>
            <>
                <div className="hidden-md-down">
                    <div
                        className="notification alert alert-dismissible fade show"
                        role="alert"
                    >
                        <div className="wrapper">
                            <div className="content">
                                <div className="action">
                                    Cookies help us display personalized product recommendations and
                                    ensure you have great shopping experience.
                                </div>
                                <button
                                    className="btn secondary waves-effect waves-light"
                                    type="button"
                                    data-dismiss="alert"
                                    aria-label="Close"
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ##### END NOTIFICATIONS #####*/}
                {/* ##### CORNER #####*/}
                <div className="hidden-md-down">
                    <div className="chat">
                        <div className="panel" id="chat_panel">
                            <header>
                                <h3>
                                    <span className="indicator online" />
                                    Live Chat
                                </h3>
                                <div className="btn btn-icon waves-effect close" id="close_chat">
                                    <i className="ion-android-close" />
                                </div>
                            </header>
                            <div className="chat-room" id="chat-container">
                                <ul>
                                    <li className="item">
                                        <div className="avatar">
                                            <img
                                                className="avatar-img"
                                                src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/avatars/pp_boy4.svg"
                                                alt="visitor"
                                            />
                                        </div>
                                        <span className="talk from">Hola!, Maecenas</span>
                                    </li>
                                    <li className="item justify-content-end">
                                        <span className="talk">Hola!, Maecenas nisl </span>
                                    </li>
                                    <li className="item">
                                        <div className="avatar">
                                            <img
                                                className="avatar-img"
                                                src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/avatars/pp_boy4.svg"
                                                alt="visitor"
                                            />
                                        </div>
                                        <span className="talk from">Hola!, Maecenas</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="form">
                                <div className="input-field">
                                    <input id="chat_field" type="text" />
                                    <label htmlFor="chat_field">Ask something</label>
                                </div>
                                <div className="btn-floating waves-effect send" id="send_message">
                                    <span className="ion-android-send" />
                                </div>
                            </div>
                        </div>
                        <div className="btn-floating btn-large chat-button" id="toggle_chat">
                            <span className="indicator online" />
                            <i className="ion-chatbox" />
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}