"use client";

import Image from "next/image"
import { useState, useEffect } from "react"

//images icon
import Btnicon from "public/assets/images/icon-dice.svg"
import Lined from "public/assets/images/pattern-divider-desktop.svg"

const URL_API = "https://api.adviceslip.com/advice"

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ id: number; advice: string } | null>(null);

  const fetchAllData = async () => {
    try {
      setLoading(true);

      const response = await fetch(URL_API);
      const responseData = await response.json();


      if (!responseData.slip || !responseData.slip.advice) {
        throw new Error("Problema na requisição");
      }

      setData(responseData.slip);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchNewAdvice = () => {
    setLoading(true);
    fetchAllData();
  };

  return (
    <main className="w-screen bg-dark-blue flex min-h-screen flex-col items-center justify-center p-2 sm:p-24">
      <div className="w-full sm:w-96 h-52 rounded-xl bg-dark-grayish-blue flex flex-col gap-3 items-center justify-center text-center p-4 relative">
        <div>
          <span className="text-neon-green uppercase text-xs tracking-widest">Adivice #{data?.id}</span>
          {loading && !data &&
            <p className="text-light-cyan text-xl">Carregando conselho</p>
          }

          {data && (
            <p className="text-light-cyan text-xl" key={data.id}>
              &quot;{data.advice}&quot;
            </p>
          )}
        </div>

        <div>
          <Image
            src={Lined}
            width={300}
            height={50}
            alt="btn icon"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-neon-green w-10
          h-10 flex items-center justify-center rounded-3xl p-3 absolute -bottom-4 hover:shadow-neon-green shadow-3xl transition delay-150 duration-300 ease-in-out" onClick={fetchNewAdvice}>
            <Image
              src={Btnicon}
              width={30}
              height={30}
              alt="btn icon"
            />
          </button>
        </div>
      </div>
    </main>
  )
}
