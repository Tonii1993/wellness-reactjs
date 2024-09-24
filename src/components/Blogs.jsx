// import React from "react";
// import Button from "../layouts/Button";
// import BlogCard from "../layouts/BlogCard";
// import img1 from "../assets/img/blog1.jpg";
// import img2 from "../assets/img/blog2.jpg";
// import img3 from "../assets/img/blog3.jpg";
// import img4 from "../assets/img/blog4.jpg";
// import img5 from "../assets/img/blog5.jpg";
// import img6 from "../assets/img/blog6.jpg";

// const Blogs = () => {
//   return (
//     <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
//       <div className=" flex flex-col items-center lg:flex-row justify-between">
//         <div>
//           <h1 className=" text-4xl font-semibold text-center lg:text-start">
//             Latest Post
//           </h1>
//           <p className=" mt-2 text-center lg:text-start">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
//             quidem.
//           </p>
//         </div>
//         <div className=" mt-4 lg:mt-0">
//           <Button title="Our Articles" />
//         </div>
//       </div>
//       <div className=" my-8">
//         <div className=" flex flex-wrap justify-center gap-5">
//           <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
//           <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
//           <BlogCard
//             img={img3}
//             headlines="Understanding Pediatric Vaccinations"
//           />
//           <BlogCard img={img4} headlines="Navigating Mental Health" />
//           <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
//           <BlogCard img={img6} headlines="Skin Health 101" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import React from "react";
import image from "../assets/img/blog5.jpg";

const Blogs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen pt-16 items-center p-6 bg-background text-foreground">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        <p className="text-base text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente at
          vero nisi tempore maiores officiis dolor! Cupiditate impedit
          voluptates natus vitae omnis, deleniti autem sed accusantium ab
          sapiente fuga facilis!.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          alt="Woman looking in mirror"
          src={image}
          className="rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
};

export default Blogs;
