import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-slate-900">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
