import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
        <span className="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">
          uusitalo.io
        </span>
        <span className="inline-flex px-2">building in progress</span>
      </div>
    </div>
  );
}
