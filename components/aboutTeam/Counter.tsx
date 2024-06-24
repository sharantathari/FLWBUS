export default function Counter(){
    return (
        <div className="counter-style" id="counter_target">
                                    <div className="container max-md">
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col py-4">
                                                <div className="counter-item">
                                                    <span className="icon ion-flag" />
                                                    <div className="text">
                                                        <h4 className="display-1">
                                                            +{" "}
                                                            <span
                                                                className="numscroller"
                                                                data-min={0}
                                                                data-max={123}
                                                                data-delay={5}
                                                                data-increment={8}
                                                            >
                                                                &nbsp;
                                                            </span>
                                                        </h4>
                                                        <h6 className="use-text-subtitle2">Lorem Ipsum</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col py-4">
                                                <div className="counter-item">
                                                    <span className="icon ion-android-people" />
                                                    <div className="text">
                                                        <h4 className="display-1">
                                                            +{" "}
                                                            <span
                                                                className="numscroller"
                                                                data-min={0}
                                                                data-max={456}
                                                                data-delay={5}
                                                                data-increment={8}
                                                            >
                                                                &nbsp;
                                                            </span>
                                                        </h4>
                                                        <h6 className="use-text-subtitle2">Ac bibendum</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col py-4">
                                                <div className="counter-item">
                                                    <span className="icon ion-android-globe" />
                                                    <div className="text">
                                                        <h4 className="display-1">
                                                            ${" "}
                                                            <span
                                                                className="numscroller"
                                                                data-min={0}
                                                                data-max={789}
                                                                data-delay={5}
                                                                data-increment={8}
                                                            >
                                                                &nbsp;
                                                            </span>
                                                        </h4>
                                                        <h6 className="use-text-subtitle2">Adipiscing</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    )
}