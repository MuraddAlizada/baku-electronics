import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Yeni smartfon modelləri",
      excerpt: "2025-ci ilin ən yeni smartfon modelləri haqqında məlumat",
      image: "/assets/img/logo-be.png",
      date: "15 Yanvar 2025",
    },
    {
      id: 2,
      title: "Laptop seçimi üçün tövsiyələr",
      excerpt: "İş və əyləncə üçün ən yaxşı laptop modelləri",
      image: "/assets/img/logo-be.png",
      date: "10 Yanvar 2025",
    },
    {
      id: 3,
      title: "Smart ev texnologiyaları",
      excerpt: "Ev avtomatlaşdırması üçün ən son texnologiyalar",
      image: "/assets/img/logo-be.png",
      date: "5 Yanvar 2025",
    },
  ];

  return (
    <>
      <Head>
        <title>Bloq və xəbərlər - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <div className="my-8 md:my-16">
            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8">
              Bloq və xəbərlər
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-brandGray p-6 rounded-2xl hover:shadow-lg transition"
                >
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brandGrayText opacity-70 mb-2">
                    <FiCalendar />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brandGrayText mb-2">
                    {post.title}
                  </h3>
                  <p className="text-brandGrayText opacity-70">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

