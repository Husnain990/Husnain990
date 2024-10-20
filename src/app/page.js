import Header from "@/components/Header";
import Content from "@/components/Main/Content";
import NumberList from "@/components/Main/NumberList";
import BottomBar from "@/components/Main/BottomBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-sky-100 min-h-screen">
      <Head>
        <title>Medicall</title>
      </Head>
      <Header />
      {/* Main */}
      <main className="flex w-full gap-4">
        <NumberList />
        <BottomBar/>
        <Content />
      </main>
      {/* Main */}
    </div>
  );
}
