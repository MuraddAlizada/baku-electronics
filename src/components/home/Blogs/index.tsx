import React from "react";
import Container from "../../layout/Container";
import Image from "next/image";
import { blogPosts } from "@/src/shared/mock/blogPosts";

function Blogs() {
  return (
    <div className="bg-brandGray py-5 md:py-10">
      <Container>
        <div className="flex flex-col gap-1">
          <h4 className="text-brandRed text-sm font-normal">
            Bloq və xəbərlər
          </h4>
          <h5 className="text-placeholderText text-xl md:text-2xl font-semibold">
            Ən son yeniliklərdən xəbərdar ol!
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col">
              <div className="relative cursor-pointer group overflow-hidden rounded-2xl">
                {/* Image */}
                <Image
                  width={500}
                  height={300}
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-40 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-opacity-10" />

                <a
                  href={post.link}
                  className="absolute top-3 right-3 bg-background text-brandGrayText font-semibold text-xs tracking-wide px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandRed"
                >
                  Ətraflı
                </a>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-brandGrayText hover:text-brandRed transition-colors duration-300">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Blogs;
