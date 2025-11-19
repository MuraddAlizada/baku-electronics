import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Login logic here
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Daxil ol - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          
          <Breadcrumb
            items={[
              { label: "Ana səhifə", href: "/" },
              { label: "Daxil ol" },
            ]}
          />
          
          <div className="my-8 md:my-16 max-w-md mx-auto">
            <div className="flex gap-4 mb-6 bg-brandGray p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-lg font-semibold transition ${
                  isLogin
                    ? "bg-brandBtn text-white"
                    : "text-brandGrayText opacity-70 hover:opacity-100"
                }`}
              >
                Daxil ol
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-lg font-semibold transition ${
                  !isLogin
                    ? "bg-brandBtn text-white"
                    : "text-brandGrayText opacity-70 hover:opacity-100"
                }`}
              >
                Qeydiyyat
              </button>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-brandGrayText mb-8 text-center">
              {isLogin ? "Daxil ol" : "Qeydiyyat"}
            </h1>

            <form onSubmit={handleSubmit} className="bg-brandGray p-6 md:p-8 rounded-2xl space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-brandGrayText mb-2 font-medium">
                    Ad və Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required={!isLogin}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                    placeholder="Ad və soyadınızı daxil edin"
                  />
                </div>
              )}
              <div>
                <label className="block text-brandGrayText mb-2 font-medium">
                  E-poçt
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-brandGrayText mb-2 font-medium">
                  Şifrə
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBtn text-brandGrayText"
                  placeholder="Şifrənizi daxil edin"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brandBtn text-white py-4 rounded-xl font-semibold hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Yüklənir..." : "Daxil ol"}
              </button>

              <div className="text-center">
                <a href="#" className="text-brandToggle text-sm hover:underline">
                  Şifrəni unutmusan?
                </a>
              </div>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

