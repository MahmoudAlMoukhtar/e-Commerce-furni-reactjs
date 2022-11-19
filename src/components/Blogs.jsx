import React from "react";
import useFetchBlogs from "../services/useFetchBlogs";
import Spinner from "../Spinner";
import {useNavigate, useParams, Link} from "react-router-dom";
import Blog from "./Blog";

const Blogs = ({page}) => {
  const {blogs: blogsData, errorBlogs, loadingBlogs} = useFetchBlogs();
  // const navigate = useNavigate();
  // const {blogs} = useParams();
  if (errorBlogs) throw errorBlogs;
  if (loadingBlogs) return <Spinner />;
  const blogsAfterSort = blogsData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const blogsAfterSlice =
    page !== "blogs" ? blogsAfterSort.slice(0, 3) : blogsAfterSort;
  return (
    <section id="blogs">
      <div
        id="bolgs-container"
        className="contanier xl:px-16 lg:px-8 sm:px-6 flex flex-col justify-between gap-y-20"
      >
        {page !== "blogs" && (
          <React.Fragment>
            <div className="w-full">
              <h1 className="text-center text-6xl font-bold">BLOGS</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-3xl font-semibold">Recent Blog</h1>
              <Link
                to="/blogs"
                className="font-semibold text-sm underline decoration-2"
              >
                View All Posts
              </Link>
            </div>
          </React.Fragment>
        )}
        <div
          id="last-3-blogs"
          className="flex flex-wrap justify-center items-center gap-8 h-max"
        >
          {blogsAfterSlice.map(b => (
            <Blog blog={b} key={b.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blogs;
