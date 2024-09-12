import React from "react";

function AboutPage() {
  return (
    <div>

   <div class="relative z-10 bg-gray-700 text-white p-4">
        <div class="container mx-auto">
          <h2 class="text-lg">Header Scrolling</h2>
        </div>
      </div>

      <header class="sticky z-20 top-0 bg-gray-800 text-white p-4">
        <div class="container mx-auto">
          <h1 class="text-xl">Header Fixed</h1>
        </div>
      </header>

   

      <main class="py-8 px-4">
        <div class="container mx-auto">
          <p class="mb-4">Lorem ipsum dolor sit amet...</p>
          <div class="h-screen">
            <p class="mb-4">More content here to make the page scrollable...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
