import { IBM_Plex_Sans, IBM_Plex_Mono, Work_Sans } from "next/font/google";

export const workSans = Work_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-primary",
});
