import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <Header />
      <section>{children}</section>
      <Footer/>
    </main>
  );
}
