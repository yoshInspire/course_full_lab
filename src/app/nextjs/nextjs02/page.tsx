import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className={`z-10 max-w-5xl w-full items-center justify-between text-sm ${inter.className}`}>
        <h1 className="text-4xl font-bold text-center mb-8">
          Font and Image Optimization Demo
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Optimized Fonts and Images Example
          </h2>
          
          <Image
            src="/images/nextjs01.webp"
            alt="Font Example"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
          
          <p className="text-gray-600 mt-4">
            This page should use optimized fonts from next/font and optimized images
          </p>
          
          <div className="mt-6 space-y-4">
            <p className="text-lg">
              Sample text with custom font styling
            </p>
            <p className="text-xl font-semibold">
              Bold text example
            </p>
            <p className="text-sm text-gray-500">
              Small text for demonstration
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}