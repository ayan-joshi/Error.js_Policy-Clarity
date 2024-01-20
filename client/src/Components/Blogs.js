import React, { useState } from "react";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "Blog Title 1",
      image: "./public/assets/blog1.jpg", // Replace with the actual image path
      link: "/blog1", // Replace with the actual link
    },
    {
      id: 2,
      title: "Blog Title 2",
      image: "/blog2.jpg", // Replace with the actual image path
      link: "/blog2", // Replace with the actual link
    },
    {
      id: 3,
      title: "Blog Title 3",
      image: "/blog3.jpg", // Replace with the actual image path
      link: "/blog3", // Replace with the actual link
    },
    {
      id: 4,
      title: "Blog Title 4",
      image: "/blog4.jpg", // Replace with the actual image path
      link: "/blog4", // Replace with the actual link
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {blogsData.map((blog) => (
        <div key={blog.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 text-base">Description or snippet of the blog.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href={blog.link} className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
