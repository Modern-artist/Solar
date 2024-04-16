import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import localFont from '@next/font/local'
const styrene = localFont({
  src: [
    {
      path: '../public/fonts/StyreneA-RegularItalic-Trial-BF63f6cbd94325f.otf',
      weight: '400'
    },
  ],
  variable: '--font-styrene'
})

function MyApp({ Component, pageProps }) {
  return (
    // <main className={`${surt.variable} font-sans`}>
    <ThemeProvider  attribute="class">
      <main className={`${styrene.variable} font-sans` }>
      <Component {...pageProps} />
      </main>
    </ThemeProvider>
    // </main>
  );
}

export default MyApp;
