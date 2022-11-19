import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import PageNotFound from "../PageNotFound";
import useFetchBlogs from "../services/useFetchBlogs";

export default function DetailBlog() {
  const {blogId} = useParams();
  const navigate = useNavigate();
  const {data: blog, loading, error} = useFetch(`blogs/${blogId}`);
  if (loading) return <Spinner />;
  if (!blog) return <PageNotFound />;
  if (error) throw error;

  return (
    <section className="flex flex-col gap-4">
      <div
        id="blog"
        class="flex justify-between gap-x-12 w-full transition duration-300 p-8 "
      >
        <img
          src={blog.img}
          alt=""
          class="w-[600px] rounded-xl transition duration-300 hover:opacity-70"
        />
        <div className="flex flex-col gap-y-24">
          <div>
            <h2 class="font-semibold">{blog.title}</h2>
            <p class="font-bold text-sm text-green-800">
              <small class="text-gray-500">by</small> {blog.by}
              <small class="text-gray-500"> on</small> {blog.date}
            </p>
          </div>
          <p className="">{blog.content}</p>
        </div>
      </div>
      <button
        onClick={() => navigate("/blogs")}
        className="p-2 font-semibold bg-gray-300 rounded"
      >
        Back
      </button>
    </section>
  );
}
