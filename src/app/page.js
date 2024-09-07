import Header from "@/components/Header";
import Content from "@/components/Main/Content";
import NumberList from "@/components/NumberList";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
 const answerPercentage = 17;
 // class for options (${answerPercentage && answerPercentage > 50 ? 'bg-lime-400' : 'bg-red-700'})
 return (
   <div className="bg-gray-100 min-h-screen">
     <Head>
       <title>Medicall</title>
     </Head>
     <Header/>


     {/* Main */}
     <main className="flex w-full gap-4">
       <NumberList />
       <Content />
     </main>
     {/* Main */}
   </div>
 );
}





