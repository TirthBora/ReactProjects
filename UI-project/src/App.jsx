import React from 'react'
import Section1 from './components/Section1/Section1'

const users = [
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    intro:
      "Passionate about design and user experience. Loves building clean and modern interfaces that solve real problems.",
    identity: {
      tag: "Satisfied",
      color: "bg-green-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    intro:
      "Frontend developer focused on performance and accessibility. Enjoys creating fast and responsive web apps.",
    identity: {
      tag: "Happy Client",
      color: "bg-blue-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    intro:
      "Creative thinker and problem solver. Dedicated to delivering high-quality digital products and experiences.",
    identity: {
      tag: "Verified User",
      color: "bg-purple-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    intro:
      "UI/UX enthusiast who enjoys designing intuitive and engaging digital experiences for users worldwide.",
    identity: {
      tag: "Satisfied",
      color: "bg-green-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    intro:
      "Full-stack developer passionate about building scalable applications and modern web platforms.",
    identity: {
      tag: "Trusted",
      color: "bg-indigo-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    intro:
      "Dedicated software engineer with a strong focus on clean code and innovative problem-solving.",
    identity: {
      tag: "Happy Client",
      color: "bg-blue-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    intro:
      "Creative designer blending aesthetics with functionality to deliver impactful digital products.",
    identity: {
      tag: "Verified",
      color: "bg-pink-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    intro:
      "Passionate about frontend technologies and creating seamless, interactive user interfaces.",
    identity: {
      tag: "Satisfied",
      color: "bg-green-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    intro:
      "Tech enthusiast focused on learning new tools and building innovative solutions.",
    identity: {
      tag: "Trusted",
      color: "bg-indigo-500",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    intro:
      "Results-driven developer committed to delivering high-quality and efficient applications.",
    identity: {
      tag: "Top Rated",
      color: "bg-yellow-500",
    },
  },
];



const App = () => {
  return (
    <div>
      <Section1 users={users}/>
    

    </div>
  )
}

export default App