export const UserActive = {
  avatar: "/img/av9.jpg",
  bgImage: "/img/bg5.jpg",
  name: "Septania Nopa Hafidzsyah",
  username: "septania_12",
  bio: "Hello welcome to my pages !!",
  following: 1,
  follower: "2K",
};

export const posts = [
  {
    id: 1,
    content: "Well beauty is in the eye of the beholder",
    time: "4h",
    replies: 381,
    likes: 24,
  }
  // {
  //   id: 2,
  //   content:
  //     "Even panjang di setiap masa kota reog Ponorogo Jawa Timur dengan sajian budaya selama 45 hari dengan 1001 agendanya.",
  //   image: "public/img/bg1.jpg",
  //   time: "12h",
  //   replies: 123,
  //   likes: 12,
  // },
  // {
  //   id: 3,
  //   content: "Well beauty is in the eye of the beholder",
  //   time: "4h",
  //   replies: 381,
  //   likes: 24,
  // },
  // {
  //   id: 4,
  //   content:
  //     "Omongan apasi aku ga paham aku cuman mau nulis aja si soalnya gak tau aku mau tulis apaan karna males aja si, eh tiba tiba jadi banyak banget yak kek mau curhat, tapi lagi males curhat juga, jadinya aku nulis aja si.",
  //   image: "public/img/bg3.jpg",
  //   time: "12h",
  //   replies: 0,
  //   likes: 10,
  // },
];





export type listPostType = {
  id: number;
  name: string;
  username: string;
  avatar?: string;
  text: string;
  likes: number;
  replies: number;
  image?: string[];
}

export const postsHome: listPostType[] = [
  {
    id: 1,
    name: "Khaira Fidi",
    username: "khaira_fidi",
    text: "Jangan berharap pada manusia, berharaplah pada Allah. Karena hanya Allah yang dapat memberikan segalanya.",
    likes: 123,
    replies: 5,
    avatar: "/img/av16.jpg",
  }
  // {
  //   id: 2,
  //   name: "Rehan Fidi",
  //   username: "rehanfidi_",
  //   text: "Jangan memikirkan masa lalu dan jangan takut pada masa depan. Hiduplah dalam keterikatan pada saat ini, karena itulah yang Anda miliki.",
  //   likes: 25,
  //   replies: 1,
  //   avatar: "/img/av15.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Fawaz Nopa Syaddaad Afif",
  //   username: "afiffaw_22",
  //   text: "Cordoba menjadi ibu kota Kekhalifahan Umayyah di Andalusia pada abad ke-10 dan awal abad ke-11...",
  //   likes: 56,
  //   replies: 20,
  //   avatar: "/img/av19.jpg",
  //   image: [
  //     "https://images.unsplash.com/photo-1570874839030-fdd385fbcd72?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Varen Zaviar Atharrauf",
  //   username: "varen_atarrauf",
  //   text: "Berprasangka baiklah kepada setiap orang, karena Allah Maha Mengetahui apa yang terbaik untuk kita.",
  //   likes: 170,
  //   replies: 90,
  //   avatar: "/img/av17.jpg",
  // },
  // {
  //   id: 5,
  //   name: "Saiful Asnawi",
  //   username: "sa_asna",
  //   text: "Innova dengan Generasi Diesel",
  //   image: ["/img/post1.jpg"],
  //   likes: 263,
  //   replies: 51,
  //   avatar: "/img/av14.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Khaira Fidi",
  //   username: "khaira_fidi",
  //   text: "Mas mas ini ganteng ganteng banget loh...",
  //   image: ["/img/bg4.jpg"],
  //   likes: 567,
  //   replies: 1090,
  //   avatar: "/img/av14.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Khaira Fidi",
  //   username: "khaira_fidi",
  //   text: "Tempat impian umat muslim",
  //   image: ["/img/bg7.jpg", "/img/bg6.jpg"],
  //   likes: 567,
  //   replies: 1090,
  //   avatar: "/img/av14.jpg",
  // },
  //   {
  //   id: 48,
  //   name: "Sopi Atuuun Baiq",
  //   username: "atunnnnnn",
  //   text: "Ini cuami akoooh....",
  //   image: ["/img/bts10.png"],
  //   likes: 21,
  //   replies: 7,
  //   avatar: "/img/av21.jpg",
  // },
];
