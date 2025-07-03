export type UserType = {
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
};

export const initialUser: UserType[] = [
  {
    name: "Kim Namjoon",
    username: "@RM",
    avatar: "/img/rm.jpg",
    isFollowing: true,
  },
  {
    name: "Kim Seok Jin",
    username: "@Jim",
    avatar: "/img/jin.jpg",
    isFollowing: false,
  },
  {
    name: "Min yoongin",
    username: "@suga",
    avatar: "/img/sg.jpg",
    isFollowing: false,
  },
  {
    name: "Kim Taehyung",
    username: "@V",
    avatar: "/img/v.jpg",
    isFollowing: false,
  },
  {
    name: "Jeon Jungkook",
    username: "@Kookie",
    avatar: "/img/jk.jpg",
    isFollowing: false,
  },
  // {
  //   name: "Khaira Fidi",
  //   username: "khaira_fidi",
  //   avatar: "/img/av16.jpg",
  //   isFollowing: false,
  // },
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
