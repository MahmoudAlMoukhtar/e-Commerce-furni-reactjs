import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import PageNotFound from "../PageNotFound";
import useDetailFetch from "../services/useDetailFetch";

export default function DetailBlog() {
  const {blogId} = useParams();
  const navigate = useNavigate();
  const {data: blog, loading, error} = useDetailFetch(`blogs/${blogId}`);
  console.log("detail blog", blog);
  if (loading) return <Spinner />;
  if (!blog) return <PageNotFound />;
  if (error) throw error;

  return (
    <section className="flex flex-col gap-4 w-[100%]">
      <div
        id="blog"
        class="flex flex-col justify-center gap-12 items-start  w-full transition duration-300 p-8 w-[100%] md:40 lg:px-60"
      >
        <div>
          <h2 class="font-semibold">{blog.title}</h2>
          <p class="font-bold text-sm text-green-800">
            <small class="text-gray-500">by</small> {blog.by}
            <small class="text-gray-500"> on</small> {blog.date}
          </p>
        </div>
        <img
          src={blog.img}
          alt=""
          class="w-[100%] rounded-xl transition duration-300 hover:opacity-70"
        />

        <p className="">{blog.content}</p>
        <button
          onClick={() => navigate("/blogs")}
          className="p-2 font-semibold bg-gray-300 rounded w-[100%]"
        >
          Back
        </button>
      </div>
    </section>
  );
}
