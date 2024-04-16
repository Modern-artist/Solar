import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import localFont from '@next/font/local'
// const styrene = localFont({
//   src: [
//     {
//       path: '../public/fonts/StyreneA-Regular-Trial-BF63f6cbd970ee9.otf',
//       // variable: '--font-surt-bold',
//       weight: '400'
//     }, 
//   ],
//   variable: '--font-styrene'
// })

function MyApp({ Component, pageProps }) {
  return (
    // <main className={`${surt.variable} font-sans`}>
    <ThemeProvider  attribute="class">

      <Component {...pageProps} />

    </ThemeProvider>
    // </main>
  );
}

export default MyApp;
