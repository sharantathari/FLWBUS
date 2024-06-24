import Head from "next/head";
import BlogPage from "../blog";
import axios from "axios";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import type { Blog } from "@/types/global";

interface PageProps {
    params: {
      bid: string;
    };
  }

const get_blog = cache(async (blogId: string) => {
    const r = await axios.get(
        `https://blogs-cc.coffeecodes.in/v1/blogs/getSingle/${blogId}`,
      );
      console.log(r.data);
      if (r.data.api_status === 200) {
        return r.data.data;
      } else {
        return null;
      }
})

export async function generateMetadata({
    params: { bid },
  }: PageProps): Promise<Metadata> {
    const blog = await get_blog(bid);
  
    return {
      title: blog.title,
      description: blog.description.replace(/&#039;/g, "'").replace(/<br>/g, " "),
      openGraph: {
        images: [
          {
            url: blog.thumbnail
          }
        ]
      }
    };
  }

export default async function Page({ params }: PageProps){

    const { bid } = params;
    const r = await get_blog(bid);
      if (r) {
        return(
            <>
            <BlogPage blogId={bid} blog={r} />
            </>
        )
      } else {
        return(
            <div>
                <h1>Product not found</h1>
            </div>
        )
      }
}