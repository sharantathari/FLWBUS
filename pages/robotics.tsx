import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer"
import MobileNav from "@/components/common/MobileNav";
import Detail from "@/components/ai_components/Detail";
import Related from "@/components/ai_components/RelatedItems";
import Preloader from "@/components/common/Preloader";
export default function contact() {
    return (
        <>
            {/* <Preloader /> */}
            <div className="m-application theme--light transition-page" id="app">
                <div className="loading"></div>
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="detail-product-page">
                        <div className="main-wrap">
                            <MobileNav />
                            <Header />
                            <div className="container-general">
                                <div className="list-style">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-sm-5 py-0 px-0 pa-md-6">
                                            <div className="carousel">
                                                <div className="detail-carousel" id="detail_carousel">
                                                    <div className="image" data-index={0}>
                                                        <a className="waves-effect" href="https://img.freepik.com/free-photo/robot-with-megaphone-directors-chair_1048-3595.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais">
                                                            <div className="figure">
                                                                <img src="https://img.freepik.com/free-photo/robot-with-megaphone-directors-chair_1048-3595.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais" alt="thumb" />
                                                                <div className="img image-detail" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/robot-with-megaphone-directors-chair_1048-3595.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais)' }}>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="image" data-index={1}>
                                                        <a className="waves-effect" href="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524402.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais">
                                                            <div className="figure">
                                                                <img src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524402.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais" alt="thumb" />
                                                                <div className="img image-detail" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524402.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais)' }}>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="image" data-index={2}>
                                                        <a className="waves-effect" href="https://img.freepik.com/premium-photo/nice-illustration-3d-robot-presenting-signage-banner-with-antennas-head-ai-generated_501669-26806.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais">
                                                            <div className="figure">
                                                                <img src="https://img.freepik.com/premium-photo/nice-illustration-3d-robot-presenting-signage-banner-with-antennas-head-ai-generated_501669-26806.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais" alt="thumb" />
                                                                <div className="img image-detail" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/nice-illustration-3d-robot-presenting-signage-banner-with-antennas-head-ai-generated_501669-26806.jpg?size=626&ext=jpg&uid=R115369832&ga=GA1.2.2011221450.1694800750&semt=ais)' }}>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-7 pa-13 px-md-10">
                                            <div className="text">
                                                <h4 className="use-text-title2">Robotics</h4>
                                                <article className="desc">
                                                    <h6 className="use-text-paragraph">Robotics merges engineering and computer science to create
                                                        autonomous machines. These devices, from industrial automation to AI-driven applications,
                                                        enhance manufacturing efficiency and healthcare, while exploring distant planets in space.</h6>
                                                    <h6 className="use-text-p">AI and robotics combine to bolster machines cognitive abilities, ushering
                                                        in self-driving cars, interactive robots, and smart homes. This innovative field is reshaping
                                                        human-machine interaction with autonomous vehicles, disaster relief bots, and caregiving
                                                        devices, leading in technological advancement across industries.</h6>
                                                    <div className="btn-area">
                                                        <a className="btn-flat text-btn"><i className="ion-android-share-alt" />Share</a>
                                                        <a className="btn-flat text-btn"><i className="ion-film-marker" />Video</a>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* ##### END DETAIL #####*/}
                                {/* ##### RELATED ITEMS #####*/}
                                <div className="container-general">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-md-13 py-6 px-sm-0 px-md-6">
                                            <h4 className="use-text-subtitle mb-3">Related Projects</h4>
                                            <div className="row scroll-tablet mb-0">
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={0}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://www.sciencebuddies.org/cdn/Files/7954/9/how-to-build-a-brushbot.jpg)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Brush Bot</h6>
                                                                <p className="use-text-paragraph">You may construct brushbots, a straightforward and
                                                                    entertaining form of robot, with crafting supplies.They are simple to construct and dont
                                                                    require any prior robotics knowledge</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.sciencebuddies.org/stem-activities/brushbot#:~:text=Brushbots%20are%20a%20simple%2C%20fun,even%20make%20them%20sumo%20wrestle!">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={1}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://content.instructables.com/FWM/T0BO/GQBCJ794/FWMT0BOGQBCJ794.jpg?auto=webp&frame=1&width=933&height=1024&fit=bounds&md=06028d0c500f17a1130cdb957110afa1)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Simple Bots:Clack</h6>
                                                                <p className="use-text-paragraph">Clack, the robot, finds beauty in imperfections. With varying
                                                                    wheels, it brings unpredictability and entertainment, celebrating irregularity in a world
                                                                    of precision.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.instructables.com/Simple-Bots-Clack/">see detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={2}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://www.sciencebuddies.org/A6p9vXnr78rEMQVL9fF_RKxizSQ=/975x698/-/https/www.sciencebuddies.org/cdn/Files/19409/5/jumping-robot.jpg)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Jumping Bot</h6>
                                                                <p className="use-text-paragraph">Engineers mimic natures jumping abilities in robots, a rare
                                                                    motion in machines, by studying animals and insects, unlocking innovative techniques for
                                                                    improved robotic jumping.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p047/robotics/rubber-band-jumping-robot?from=Blog">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://hackster.imgix.net/uploads/attachments/1087364/dsc00644_n7gcbzd9Xj.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Wash Timer</h6>
                                                                <p className="use-text-paragraph">Promote health by washing hands thoroughly for 20 seconds. DIY
                                                                    handwashing timer at home encourages proper hand hygiene for your well-being and others.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.hackster.io/331510/wash-a-lot-bot-a-diy-hand-washing-timer-2df500">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://circuitdigest.com/sites/default/files/projectimage_mic/mars-rover-robot-using-arduino.jpg)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Mars Rover Robot</h6>
                                                                <p className="use-text-paragraph">This project delves into robotics, demonstrating how to build
                                                                    a versatile Mars rover capable of navigating diverse terrains. Explore the world of
                                                                    autonomous exploration and technological innovation.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://circuitdigest.com/microcontroller-projects/build-your-own-mars-rover-robot-using-arduino">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://www.sciencebuddies.org/7c8E-ghbyRQlX32OLntTa1o9_xw=/280x0/-/https/www.sciencebuddies.org/cdn/Files/9065/11/bristlebot-robots-trio-1100.png)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Wobbly Robot</h6>
                                                                <p className="use-text-paragraph">The Robot is driven by a compact electric motor, which relies
                                                                    on a battery for power. This battery supplies the necessary electrical energy to propel
                                                                    the robot and enable its creative movements.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p014/robotics/build-art-bot">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/BxpsfB2kI7I/maxresdefault.jpg)' }} />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Leaping Robot Frog</h6>
                                                                <p className="use-text-paragraph">This robot leaps and bounds akin to a frog, delighting young
                                                                    creators. Its amphibian-like movements provide both entertainment and educational value
                                                                    for budding makers and robot enthusiasts.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.makeuseof.com/11-easy-budget-friendly-robotics-project-ideas-for-kids/">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://maker.pro/storage/rHXcbPa/thumb/rHXcbPatRly6evqu8iRbzh8mzcDn8OSRO1IvOG65.jpg)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate">Balancing Robot </h6>
                                                                <p className="use-text-paragraph">Typically, a self-balancing robot requires a microprocessor to
                                                                    function, or more sophisticated electronics like those found in the Segway. This one
                                                                    demonstrates what can be done using just a motor, two switches, and four batteries.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://maker.pro/analog/projects/balancing-robot-with-no-microcontroller">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://hackster.imgix.net/uploads/attachments/1441943/_yungsjjK9v.blob?auto=compress%2Cformat&w=900&h=675&fit=min)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">Voice Controlled Robot</h6>
                                                                <p className="use-text-paragraph">Users can take charge of the robots actions with custom voice
                                                                    commands. This interactive feature empowers users to direct and personalize the robots
                                                                    movements, enhancing the overall experience.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://maker.pro/arduino/projects/diy-arduino-voice-controlled-robot">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://www.sciencebuddies.org/BUzRGlRF2PAY1j11v5q-J2oNUwA=/650x304/-/https/www.sciencebuddies.org/cdn/Files/19831/5/simple-walking-robots.jpg)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">Four Legged Walking Robot</h6>
                                                                <p className="use-text-paragraph">It may sound difficult for kids to build a four-legged,
                                                                    walking robot, but it isnt. The simplicity of each stage ensures that children wont quit
                                                                    up in the middle of the process.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.youtube.com/watch?v=wY08f3MIDnc&t=54s">see detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://nevonprojects.com/wp-content/uploads/2021/02/nevon-solar-floor-cleaner-web.jpg)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">Solar Vaccum Cleaner Robot</h6>
                                                                <p className="use-text-paragraph">A floor-cleaning robot powered by solar energy that makes it
                                                                    simple to clean outside areas, terraces, open restaurants, big campuses, etc. The method
                                                                    is designed to make it easier for cleaners to clean big, open spaces without exerting any
                                                                    physical effort or requiring frequent robot charging.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://nevonprojects.com/solar-vacuum-cleaner-floor-cleaner-robot/">see detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://maker.pro/storage/ozATwC6/thumb/ozATwC6FooN9Ntsd2xeOmmzbny6tKlgv6kosqV0N.jpeg)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">Soccer Robot using ESP32-CAM</h6>
                                                                <p className="use-text-paragraph">This robot can play football by dribbling and kicking the
                                                                    ball. You can create a lot of them and play robot football matches because it is
                                                                    controlled using a smartphone with a wireless bluetooth connection!</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://maker.pro/everything-esp/projects/esp32-cam-video-surveillance-robot">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://projects-static.raspberrypi.org/projects/build-a-buggy/023941b95648dfd29594734493e6521bc6720a7f/en/images/banner.png)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">Robot Buggy</h6>
                                                                <p className="use-text-paragraph">Frequently employed terms often include basic, essential,
                                                                    popular, ubiquitous, prevalent, routine, standard, customary, and everyday words that
                                                                    people regularly use in various contexts and conversations.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://projects.raspberrypi.org/en/projects/build-a-buggy">see detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://quartzcomponents.com/cdn/shop/articles/line-follower-robot-using-arduino_770x500.jpg?v=1671189499)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">Line Following Robot</h6>
                                                                <p className="use-text-paragraph">A line follower robot navigates by tracking a visible black
                                                                    line on a white surface. It can be adapted for a white line on a black surface to suit
                                                                    specific requirements. The robot autonomously moves along the designated path within its
                                                                    field of view.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://quartzcomponents.com/blogs/electronics-projects/line-follower-robot-using-arduino">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(data:image/jpeg' }}  />
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">CardBoard Robot Arm</h6>
                                                                <p className="use-text-paragraph">This uncomplicated robotic arm, designed from easily
                                                                    accessible materials like cardboard and hot glue, offers position recording and playback
                                                                    functionality. Its simplicity facilitates straightforward construction, making it an
                                                                    accessible project for enthusiasts exploring robotics.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.hackster.io/ryanchan/recordable-cardboard-robot-arm-c7fbc0">see
                                                                    detail</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-4 col-10 px-2" data-index={3}>
                                                    <div className="card product-card portrait over">
                                                        <a className="waves-effect hidden-link" href="#">&nbsp;</a>
                                                        <div className="figure">
                                                            <div className="responsive-img" style={{ backgroundImage: 'url(https://content.instructables.com/FLY/QK4L/JPSO0JL6/FLYQK4LJPSO0JL6.jpg?auto=webp&frame=1&crop=3:2&fit=bounds&md=616de03bf1a44b5c5631d5034f6a7c23)' }}>
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="text">
                                                                <h6 className="title pb-2 text-truncate1">Drinking Water Robot</h6>
                                                                <p className="use-text-paragraph">Promote well-being by building a water reminder robot. With
                                                                    our busy schedules, its easy to forget the recommended 8 cups daily. Craft a helpful
                                                                    companion to gently prompt hydration, ensuring you prioritize your health amid the demands
                                                                    of daily work.</p>
                                                            </div>
                                                            <div>
                                                                <a className="btn btn-outlined primary button block waves-effect" href="https://www.instructables.com/Drinking-Robot/">see detail</a>
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
                    </div >
                </div>
            </div>
        </>
    )
}