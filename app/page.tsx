// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f5b94b] to-[#e29f23] flex flex-col items-center justify-center text-black p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg mb-8">Discover the power of client-side and server-side rendering with Next.js and Tailwind CSS.</p>

      <div className="flex space-x-4">
        <Link href="/client_side" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Client Side
        </Link>

        <Link href="/server_side" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Server Side
        </Link>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="mb-2">Client-side rendering is a technique where the browser is responsible for rendering the HTML content using JavaScript.
          <br />
          This process occurs after the page has been fully loaded in the client's browser.</p>
        <p className="mb-2">Server-side rendering is a technique where the server generates the complete HTML content for a page and sends it to the client's browser.
          <br />This process occurs before the page is fully loaded</p>
        {/* <p>Join us on a journey to explore the potentials of client-side and server-side rendering!</p> */}
      </div>
    </div>
  );
};

export default HomePage;
