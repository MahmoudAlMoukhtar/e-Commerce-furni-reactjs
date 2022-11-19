import React from "react";
import Header from "../../common/Header";
import Blogs from "../../components/Blogs";
import MainHeader from "../../components/MainHeader";

const BlogsPage = () => {
  return (
    <React.Fragment>
      <Header>
        <MainHeader title={"Blogs"} />
      </Header>
      <Blogs page="blogs" />
    </React.Fragment>
  );
};

export default BlogsPage;
