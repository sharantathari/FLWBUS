"use client";
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MobileNav from "@/components/common/MobileNav";
import Banner from "@/components/blog_components/Banner";
import type { Blog } from '@/types/global';
import { loadSiteJS } from "@/lib/frontend_functions";
import { useEffect } from "react";

export default function Blog({ blog, blogId }: { blog: Blog, blogId: string}) {

    useEffect(() => {
        setTimeout(() => {
          loadSiteJS();
        }, 2000);
      }, []);

    return(
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
                                        <Banner image={blog?.thumbnail}/>
                                        <div className="col-md-15 px-0 px-sm-3">
  <div className="blog-style">
    <article className="blog-content">
    <h4 className="text-h4 title-blog" dangerouslySetInnerHTML={{ __html: (blog?.title?.replace(/&#039;/g, "'")) || "" }}/>
    <br/>
      <span className="caption">{(new Date(Number(blog?.posted) * 1000)).toLocaleDateString("en-IN", {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}</span>
            <br/><br/><br/>
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
        <br/><br/>
        <a
          className="btn btn-outlined waves-effect twitter mq-xs-down"
          data-class="btn-icon"
        >
          <i className="icon ion-social-twitter left" />
          <span className="hidden-xs-down">twitter</span>
        </a>
        <br/><br/>
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
</div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}