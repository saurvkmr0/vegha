import React from 'react'
import '../styles/card.css'

const Card = () => {
  return (
    <div className="hover:bg-gray-300 rounded-lg">

    
      <div class="relative py-20 min-w-[320px]  bg-blue-500 text-white p-6 rounded-t-lg shadow-lg overflow-hidden skewed-card">
    {/* <!-- Card Content --> */}
    <div class="relative z-10">
        <div class="flex justify-center items-center mb-4">
            {/* <!-- Icon here --> */}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-5H6v-1h12v1zm0-3H6V9h12v3z"/>
            </svg>
        </div>

        <h2 class="text-2xl font-bold">Custom Angled Bottom Card</h2>
        <p class="mt-2">This is a custom card with an angled bottom.</p>
        <div class="mt-4 flex items-center">
            <a href="#" class="text-white flex items-center hover:text-gray-200">
                <span>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 14.707a1 1 0 010-1.414l3.293-3.293H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
            <div class="ml-4 h-2 w-2 bg-yellow-400 rounded-full"></div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Card