import React from "react";
import Heading from "./Heading";
import Img1 from "../assets/blogs/blog-1.jpg";
import Img2 from "../assets/blogs/blog-2.jpg";
import Img3 from "../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "Smartwatch Trends",
    subtitle: "How smartwatches blend style with everyday functionality.",
    published: "August 25, 2025 by Harry",
    image: Img1,
  },
  {
    title: "VR for Everyone",
    subtitle: "Why virtual reality is no longer just for gamers.",
    published: "August 27, 2025 by Alli",
    image: Img3,
  },
  {
    title: "Must-Have Electronics",
    subtitle: "Top gadgets that make your daily life easier and smarter.",
    published: "August 30, 2025 by Heung",
    image: Img2,
  },
];

function Blogs() {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title="Recent News" substitle={"Explore Our Blogs"} />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8
        sm:gap-4 md:gap-7"
        >
          {BlogData.map((data) => (
            <div
              key={data.title}
              className="hover:bg-slate-200 p-4 dark:bg-blue-950 rounded-xl"
            >
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  className="w-full h-[220px] object-cover rounded-xl hover:scale-103 duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
