// "use client";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "./component/Header";
// import Login from "./login/page";
// import Signup from "./signup/page";
// import { usePathname } from "next/navigation";
// import Category from "./component/Category";
// import ProductMain from "./component/ProductMain";
// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {pathname === "/home" ? (
//           <div>
//             <Header />
//             <ProductMain />
//           </div>
//         ) : pathname === "/signup" ? (
//           <div>
//             <Signup />
//           </div>
//         ) : (
//           <div>{children}</div>
//         )}{" "}
//       </body>
//     </html>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./common-component/Header";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get pathname for conditional layout
  const pathname = usePathname();

  // condition layout - Pathname - Array
  const display: any = ["/", "/signup"];

  return (
    <html lang="en">
      <body className={inter.className}>
   
          {/* Condition for display Header */}
          {display.includes(pathname) ? null : <Header />}
    
    {children}
     
      </body>
    </html>
  );
}

