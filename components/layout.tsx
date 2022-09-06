import Head from "next/head";
import { MenuBar } from "./menubar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Czar Storage App</title>
        <meta name="description" content="Czar Storage App - Czar.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar />
      <div>{children}</div>
    </>
  );
}
