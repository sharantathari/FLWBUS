import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MobileNav from "@/components/common/MobileNav";
import Banner from "@/components/blog_components/Banner";
import type { Blog } from '@/types/global';

export default function Blog() {
  const [blog, setBlog] = useState<Blog>();
  const router = useRouter();
  const { blogId } = router.query;

  useEffect(() => {
    const get_blogs = async () => {
      const r = await axios.get(`https://blogs-cc.coffeecodes.in/v1/blogs/getSingle/${blogId}`);
      if (r.data.api_status === 200) {
        setBlog(r.data.data);
      }
    }
    get_blogs();
  }, [blogId]);

  return (
    <>
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.description} />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.description} />
        <meta property="og:image" content={blog?.thumbnail} />
      </Head>
      <div className="m-application theme--dark transition-page" id="app">
        <div className="loading" />
        <div className="m-content smart smart-var" id="main-wrap">
          <div id="blog-page">
            <div className="main-wrap">
              <MobileNav />
              <Header />
              <div className="container-general">
                <div className="container mt-12 mt-sm-0">
                  <div className="row">
                    <Banner image={blog?.thumbnail} />
                    <div className="col-md-15 px-0 px-sm-3">
                      <div className="blog-style">
                        <article className="blog-content">
                          <h4 className="text-h4 title-blog" dangerouslySetInnerHTML={{ __html: (blog?.title?.replace(/&#039;/g, "'")) || "" }} />
                          <br />
                          <span className="caption">{(new Date(Number(blog?.posted) * 1000)).toLocaleDateString("en-IN", {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}</span>
                          <br /><br /><br />
                          <ReactMarkdown>
                            {blog?.content?.replace(/BRNBLBR/g, '\n').replace(/&#039;/g, "'")}
                          </ReactMarkdown>

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
                            <br /><br />
                            <a
                              className="btn btn-outlined waves-effect twitter mq-xs-down"
                              data-class="btn-icon"
                            >
                              <i className="icon ion-social-twitter left" />
                              <span className="hidden-xs-down">twitter</span>
                            </a>
                            <br /><br />
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
                      {/*<div className="comment">
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
                Edodwaja's article offers a captivating look into cutting-edge
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
                Engaging and well-researched, 'LAB ON WHEELS' is a tech
                enthusiast's delight.
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
                Clear, concise, and informative – 'LAB ON WHEELS' is exceptional
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>*/}
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}