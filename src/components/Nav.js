import React from 'react'


const links = [
    { name: 'My Reviews', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Logout', href: '/loginform' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function Nav() {
    return (
      <div className="flex items-center justify-center relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.pexels.com/photos/1454794/pexels-photo-1454794.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img
            className="mx-auto h-20 w-auto"
            src="image/panda-logo.png"
            alt="PandaCritic"
          />
            <h2 className="text-base font-semibold leading-7 text-gray-900 logo">PandaCritic</h2>
          <p className="mt-4 text-sm leading-6 text-gray-600 subject">
          🐼My personal reviews in one place🐼
          </p>
          
            
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
           
          </div>
        </div>
      </div>
    )
  }
  