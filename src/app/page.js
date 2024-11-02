'use client'
import Header from "@/components/Header";
import Content from "@/components/Main/Content";
import NumberList from "@/components/Main/NumberList";
import BottomBar from "@/components/Main/BottomBar";
import Head from "next/head";

// custom hooks
import useDarkMode from "@/hooks/useDarkMode";

export default function Home() {
  const { darkMode, toggleDarkMode, isMounted } = useDarkMode();

  // Avoid rendering the UI until dark mode is correctly applied
  if (!isMounted) return null; // Or use a loading spinner if preferred

  return (
    <div className="bg-sky-100 dark:bg-gray-900 min-h-screen">
      <Head>
        <title>Medicall</title>
      </Head>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
      {/* Main */}
      <main className="flex w-full gap-4">
        <NumberList />
        <BottomBar />
        <Content />
      </main>
      {/* Main */}
    </div>
  );
}

