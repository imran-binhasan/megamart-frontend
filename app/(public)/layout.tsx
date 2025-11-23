import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <header>This is header</header>
      <section>{children}</section>
      <footer>This is footer</footer>
    </main>
  );
}
