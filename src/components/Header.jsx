import { useState } from "react";
const Header=()=>{
   const[brandName, setBrandName] = useState("Ayush Kumar")
  const[menuLinks, setMenulinks] = useState([
    {
        title: "Home",
        link: "/home",
        id: 1,
    },
    {
        title: "About",
        link: "/About",
        id: 2,
      },
      {
        title: "Skills",
        link: "/skills",
        id: 3,
      },
      {
        title: "Work",
        link: "/work",
        id: 4,
      },
      {
        title: "Contact",
        link: "/Contact",
        id: 4,
      },
    
   ]);
   const [actionButton, setActionButton] = useState({
    title: "Download Resume",
    link: "https://drive.google.com/file/d/1myjBBuMK5ucmLBQPizfI_oPIcdDotVyg/view?usp=sharing",
  });
    return (
        <>
        <div className="h-20 main flex justify-between items-center px-16 bg-gray-100">
            <div> 
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>
            <div className="space-x-6">
            {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
                {/* <a href="/Home"className="hover:text-orange-600" >Home</a>
                <a href="/About" className="hover:text-orange-600">About</a>
                <a href="/skills" className="hover:text-orange-600">Skills</a>
                <a href="/Contact" className="hover:text-orange-600">Contact</a> */}
            </div>
            <div>
                {/* <button  className='bg-orange-500  px-4 py-2 text-1xl rounded-full shadow-lg'>Hire Me</button> */}
                <a
            href={actionButton.link}
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
          >
            {actionButton.title}
          </a>
            </div>

        </div>
        </>
    )
};

export default Header;