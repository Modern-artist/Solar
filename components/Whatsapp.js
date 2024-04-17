import React from 'react'

const Whatsapp = () => {
    const phoneNumber = '+18326990367'; // Replace with the desired phone number
        const message = 'Hello, this is a test message!'; // Optional message

        const openWhatsApp = () => {
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.location.href = url;
        };

  return (
      <div  onClick={openWhatsApp} className='fixed text-white transition duration-300 ease-in-out p-4bg-amber-500 rounded-full shadow-lg right-5 bottom-5 p-4 focus:outline-none hover:bg-gradient-to-r from-amber-500 to-orange-500 bg-amber-500' >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
    </div>
  )
}

export default Whatsapp