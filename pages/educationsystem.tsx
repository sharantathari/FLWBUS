import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNav from "@/components/common/MobileNav";
import Preloader from "@/components/common/Preloader";

export default function Education() {
    return (
        <>
            {/* <Preloader/> */}
            <div className="m-application theme--dark transition-page" id="app">
                <div className="loading" />
                <div className="m-content smart smart-var" id="main-wrap">
                    <div id="blog-page">
                        <div className="main-wrap">
                            <MobileNav />
                            <Header />
                            <div className="container-general pt-12">
                                <div className="container pt-3">
                                    <div className="row">
                                        <div className="col-md-15 px-0 px-sm-3">
                                            <div className="blog-style">
                                                <article className="blog-content">
                                                    <h4 className="text-h4 title-blog">
                                                        What is lacking in Modern Education System?
                                                    </h4>
                                                    <span className="caption">June 19, 2021</span>
                                                    <figure className="image-blog">
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIPb22amIQhEHkAFBW8Y7mBV4AvBcK-ky1w&usqp=CAU"
                                                            alt="blog"
                                                        />
                                                    </figure>
                                                    <p>
                                                        Education is the backbone of any society. Without proper education, a
                                                        society cannot progress. Education has been evolving since its
                                                        inception. The traditional method of education has changed over the
                                                        years, and now it has transformed into a modern education system.
                                                    </p>
                                                    <p>
                                                        The education system in India suffers from some serious lacunae. These
                                                        include preference for good marks/grades over being knowledgeable, lack
                                                        of encouragement for thinking out of the box (asking questions in the
                                                        class is considered rude and seldom encouraged; almost non-existent
                                                        practice of extra reading; education restricted to prescribed textbook
                                                        and help/guide books, and that too limited to 24 hrs.
                                                    </p>
                                                    <p>
                                                        before the examination day!), rigid and outdated curriculum, heavily
                                                        underpaid professors/teachers (bright minds stay away from this career;
                                                        professors don’t show much zeal for teaching, they just “go through” the
                                                        motions), only a few colleges with good quality of education where you
                                                        have to be in the top elite to gain admission besides there being a lack
                                                        of passion for education in the real sense (most students go for
                                                        engineering/medicine on the advice of “elders”!).{" "}
                                                    </p>
                                                    <p>
                                                        1. Spoon Feeding: Our schools and colleges spoon feed the students.
                                                        Students are not given any freedom to make their choices or make
                                                        mistakes to further learn from them. Everything is prepared and fed to
                                                        the students. This is one of the biggest disadvantages of the present
                                                        education system.
                                                    </p>
                                                    <p>
                                                        2. Examinations: In the modern education system, a student’s knowledge
                                                        is evaluated through examinations. This is another disadvantage of the
                                                        modern education system. Exams are not the way to judge someone’s
                                                        knowledge and skills. They create a divide and an unhealthy competition
                                                        among students. And it even discourages the other students …as they give
                                                        more preference to the fast learner students…
                                                    </p>
                                                    <figure className="image-blog">
                                                        <img
                                                            src="https://edodwaja.com/wp-content/uploads/2022/09/Bus-Inside-300x214.jpg"
                                                            alt="blog"
                                                        />
                                                    </figure>
                                                    <ul className="list">
                                                        <li>
                                                            3. No Education: The modern education system leaves no time to get
                                                            educated. Information is thrown at students and they have to grasp it.
                                                            They have to learn it, but not understand it. This is another
                                                            disadvantage of the present education system.
                                                        </li>
                                                        <li>
                                                            The students simply learn for the sake of learning and complete the
                                                            syllabus as directed. They have no idea why they are in school and why
                                                            they are taking the course they choose. They fail to connect the dots
                                                            as they are facing an existential crisis, which is regular in the
                                                            current generation.
                                                        </li>
                                                        <li>
                                                            If we want to make education the driving vehicle to success, then the
                                                            current system needs to focus on offering support to teachers. Young
                                                            people will have the interest to learn if they see learning as
                                                            meaningful, important and worthwhile. That’s how the teachers need to
                                                            present it.
                                                        </li>
                                                    </ul>
                                                    <p />
                                                    <div className="share-socmed">
                                                        <h6 className="use-text-primary use-text-bold mb-3">
                                                            Share to social media
                                                        </h6>
                                                        <a
                                                            className="btn btn-outlined waves-effect facebook mq-xs-down"
                                                            data-class="btn-icon"
                                                        >
                                                            <i className="icon ion-social-facebook left" />
                                                            <span className="hidden-xs-down">facebook</span>
                                                        </a>
                                                        <a
                                                            className="btn btn-outlined waves-effect twitter mq-xs-down"
                                                            data-class="btn-icon"
                                                        >
                                                            <i className="icon ion-social-twitter left" />
                                                            <span className="hidden-xs-down">twitter</span>
                                                        </a>
                                                        <a
                                                            className="btn btn-outlined waves-effect linkedin mq-xs-down"
                                                            data-class="btn-icon"
                                                        >
                                                            <i className="icon ion-social-linkedin left" />
                                                            <span className="hidden-xs-down">linkedin</span>
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="comment">
                                                <h6 className="use-text-primary use-text-bold mb-3">Write Comments</h6>
                                                <div className="comments-style">
                                                    <div className="form-comment">
                                                        <div className="write">
                                                            <div className="avatar-img">
                                                                <img src="./assets/images/avatars/pp_boy3.svg" alt="avatar" />
                                                            </div>
                                                            <div className="input-field">
                                                                <input
                                                                    id="write_comment"
                                                                    placeholder="Write Comments"
                                                                    type="text"
                                                                />
                                                                <button className="btn btn-small waves-effect primary send-btn">
                                                                    <span className="hidden-xs-down">Send Message</span>
                                                                    <i className="material-icons icon show-xs-down">send</i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="collection border-0">
                                                    <div className="comments-style">
                                                        <div className="comment-list">
                                                            <div className="collection-item avatar">
                                                                <img
                                                                    className="circle"
                                                                    src="./assets/images/avatars/pp_boy4.svg"
                                                                    alt="John Doe"
                                                                />
                                                                <span className="title font-weight-medium">John</span>
                                                                <div>
                                                                    <span className="caption">13 Dec 2021</span>
                                                                    <p className="mt-2">
                                                                        Edodwajas article offers a captivating look into cutting-edge
                                                                        mobile lab tech.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <hr className="divider" />
                                                        </div>
                                                        <div className="comment-list">
                                                            <div className="collection-item avatar">
                                                                <img
                                                                    className="circle"
                                                                    src="./assets/images/avatars/pp_boy4.svg"
                                                                    alt="John Doe"
                                                                />
                                                                <span className="title font-weight-medium">Koushik</span>
                                                                <div>
                                                                    <span className="caption">10 oct 2021</span>
                                                                    <p className="mt-2">
                                                                        Engaging and well-researched, LAB ON WHEELS is a tech
                                                                        enthusiasts delight.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <hr className="divider" />
                                                        </div>
                                                        <div className="comment-list">
                                                            <div className="collection-item avatar">
                                                                <img
                                                                    className="circle"
                                                                    src="./assets/images/avatars/pp_boy4.svg"
                                                                    alt="John Doe"
                                                                />
                                                                <span className="title font-weight-medium">Vineeth</span>
                                                                <div>
                                                                    <span className="caption">20 Sep 2021</span>
                                                                    <p className="mt-2">
                                                                        Insightful tech journalism by Edodwaja; the latest lab tech
                                                                        uncovered here.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <hr className="divider" />
                                                        </div>
                                                        <div className="comment-list">
                                                            <div className="collection-item avatar">
                                                                <img
                                                                    className="circle"
                                                                    src="./assets/images/avatars/pp_boy4.svg"
                                                                    alt="John Doe"
                                                                />
                                                                <span className="title font-weight-medium">Pranay</span>
                                                                <div>
                                                                    <span className="caption">5 Aug 2021</span>
                                                                    <p className="mt-2">
                                                                        Clear, concise, and informative – LAB ON WHEELS is exceptional
                                                                        work.
                                                                    </p>
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
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}