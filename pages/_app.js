import { ThemeProvider } from "@/components/theme-provider";
import { Ubuntu } from "next/font/google";
import "@/styles/globals.css";



// Import Ubuntu font from Google Fonts
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"], // Specify weights you want to include
  subsets: ["latin"], // Specify subsets you want to include
  variable: "--font-ubuntu-sans",
});


export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className={ubuntu.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </>
}
