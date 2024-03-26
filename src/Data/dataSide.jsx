import TweetWhite from "../assets/tweetWhite.svg"
import Home_Fill from "../assets/Home-Fill.svg"
import Explore_icn from "../assets/Explore.svg"
import Notificpic from "../assets/Notificpic.svg"
import Message_icn from "../assets/Messages.svg"
import Bookmarks_icn from "../assets/Bookmarks.svg"
import Lists_icn from "../assets/Lists.svg"
import Profile_icn from "../assets/Profile.svg"
import More_icn from "../assets/More.svg"

const sidebarItems = [
  { img: <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.643 2.93701C22.808 3.30701 21.911 3.55701 20.968 3.67001C21.93 3.09401 22.668 2.18001 23.016 1.09201C22.116 1.62601 21.119 2.01401 20.058 2.22201C19.208 1.31801 17.998 0.752014 16.658 0.752014C14.086 0.752014 12 2.83801 12 5.41201C12 5.77601 12.042 6.13001 12.12 6.47201C8.24701 6.27701 4.81601 4.42201 2.51801 1.60401C2.11801 2.29401 1.88801 3.09401 1.88801 3.94601C1.88801 5.56201 2.71101 6.98901 3.96001 7.82401C3.19601 7.79901 2.47801 7.59001 1.85001 7.24101V7.30101C1.85001 9.55801 3.45501 11.441 5.58701 11.869C5.19501 11.975 4.78401 12.031 4.36001 12.031C4.06001 12.031 3.76701 12.003 3.48301 11.949C4.07601 13.799 5.79601 15.147 7.83501 15.183C6.24001 16.433 4.23101 17.178 2.04901 17.178C1.67301 17.178 1.30201 17.156 0.937012 17.113C2.99901 18.436 5.44701 19.206 8.07701 19.206C16.647 19.206 21.332 12.108 21.332 5.95201C21.332 5.75201 21.327 5.55001 21.318 5.35001C22.228 4.69201 23.018 3.87301 23.641 2.94001L23.643 2.93701Z" fill="#D9D9D9"/>
  </svg>
  , value: "" },
  { img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.58 7.34998L12.475 1.89698C12.178 1.73698 11.821 1.73698 11.525 1.89698L1.42502 7.34998C0.939018 7.61398 0.758018 8.21998 1.02002 8.70598C1.20002 9.04098 1.54502 9.23098 1.90002 9.23098C2.06002 9.23098 2.22402 9.19298 2.37502 9.11098L3.10902 8.71498L4.69902 19.965C4.91502 21.179 6.00902 22.027 7.35902 22.027H16.641C17.991 22.027 19.085 21.179 19.303 19.939L20.891 8.71398L21.628 9.11198C22.113 9.37498 22.72 9.19398 22.982 8.70798C23.245 8.22198 23.062 7.61498 22.578 7.35298L22.58 7.34998ZM12 15.435C10.205 15.435 8.75002 13.98 8.75002 12.185C8.75002 10.39 10.205 8.93498 12 8.93498C13.795 8.93498 15.25 10.39 15.25 12.185C15.25 13.98 13.795 15.435 12 15.435Z" fill="#D9D9D9"/>
  </svg>, value: "Home",path: "/"},
  { img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 7.33698H17.07L17.442 3.06498C17.478 2.65298 17.172 2.28998 16.76 2.25298C16.343 2.22298 15.984 2.52298 15.948 2.93598L15.565 7.33598H9.245L9.615 3.06598C9.652 2.65298 9.345 2.28998 8.935 2.25298C8.515 2.22298 8.158 2.52298 8.122 2.93598L7.74 7.33598H3.782C3.368 7.33598 3.032 7.67298 3.032 8.08598C3.032 8.49898 3.368 8.83598 3.782 8.83598H7.61L7.06 15.163H3C2.586 15.163 2.25 15.499 2.25 15.913C2.25 16.327 2.586 16.663 3 16.663H6.93L6.558 20.935C6.522 21.347 6.828 21.71 7.24 21.747L7.306 21.75C7.691 21.75 8.018 21.455 8.052 21.064L8.435 16.664H14.755L14.385 20.934C14.349 21.347 14.655 21.71 15.067 21.747L15.133 21.75C15.518 21.75 15.845 21.455 15.879 21.064L16.261 16.664H20.218C20.631 16.664 20.968 16.327 20.968 15.914C20.968 15.501 20.631 15.164 20.218 15.164H16.39L16.94 8.83698H21C21.414 8.83698 21.75 8.50098 21.75 8.08698C21.75 7.67298 21.414 7.33698 21 7.33698ZM14.885 15.163H8.565L9.115 8.83698H15.435L14.885 15.163Z" fill="#D9D9D9"/>
  </svg>
  , value: "Explore" ,path: "/"},
  { img: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.697 15.468C19.677 15.452 17.557 13.828 17.594 9.43799C17.614 6.90599 16.782 4.65599 15.247 3.10299C13.872 1.70999 12.01 0.939993 10.005 0.929993H9.99197C7.98798 0.939993 6.12597 1.70999 4.74997 3.10399C3.21597 4.65699 2.38197 6.90599 2.40397 9.43799C2.44097 13.768 0.383975 15.405 0.301975 15.468C0.0419748 15.661 -0.0640253 15.998 0.0369747 16.306C0.138975 16.614 0.426975 16.821 0.748975 16.821H5.66897C5.77098 19.131 7.66597 20.981 9.99897 20.981C12.332 20.981 14.225 19.131 14.326 16.821H19.248C19.57 16.821 19.858 16.615 19.958 16.307C20.061 16 19.955 15.662 19.695 15.469L19.697 15.468ZM9.99998 19.478C8.49498 19.478 7.26997 18.301 7.17197 16.82H12.828C12.728 18.3 11.505 19.48 9.99998 19.48V19.478ZM2.37997 15.32C3.11997 14.188 3.92797 12.292 3.90397 9.42399C3.88597 7.26399 4.54797 5.44199 5.81697 4.15699C6.90997 3.04999 8.39698 2.43699 9.99998 2.42999C11.603 2.43799 13.087 3.04999 14.18 4.15799C15.45 5.44299 16.113 7.26399 16.095 9.42499C16.071 12.293 16.88 14.19 17.62 15.321H2.37997V15.32Z" fill="#D9D9D9"/>
  </svg>
  , value: "Notifications" ,path: "/"},
  { img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.25 3.01801H4.75C3.233 3.01801 2 4.25201 2 5.77001V18.265C2 19.783 3.233 21.018 4.75 21.018H19.25C20.767 21.018 22 19.783 22 18.265V5.77001C22 4.25201 20.767 3.01801 19.25 3.01801ZM4.75 4.51801H19.25C19.94 4.51801 20.5 5.07801 20.5 5.76801V6.48201L12.45 11.849C12.177 12.029 11.824 12.031 11.55 11.847L3.5 6.48201V5.76801C3.5 5.07801 4.06 4.51801 4.75 4.51801ZM19.25 19.516H4.75C4.06 19.516 3.5 18.956 3.5 18.266V8.24001L10.74 13.07C11.123 13.326 11.562 13.454 12 13.454C12.44 13.454 12.877 13.326 13.26 13.071L20.5 8.24101V18.263C20.5 18.953 19.94 19.513 19.25 19.513V19.516Z" fill="#D9D9D9"/>
  </svg>
  , value: "Messages",path: "/"},
  { img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.9 23.5C19.743 23.5 19.588 23.45 19.458 23.356L12 17.928L4.54198 23.358C4.31398 23.522 4.01198 23.548 3.75998 23.418C3.50998 23.291 3.34998 23.033 3.34998 22.751V5.60001C3.34998 4.36001 4.35998 3.35001 5.59998 3.35001H18.398C19.638 3.35001 20.648 4.36001 20.648 5.60001V22.75C20.648 23.032 20.49 23.29 20.238 23.418C20.132 23.473 20.015 23.5 19.898 23.5H19.9ZM12 16.25C12.155 16.25 12.31 16.298 12.44 16.394L19.15 21.277V5.60001C19.15 5.18801 18.813 4.85001 18.4 4.85001H5.59998C5.18698 4.85001 4.84998 5.18801 4.84998 5.60001V21.277L11.56 16.394C11.69 16.298 11.845 16.25 12 16.25Z" fill="#D9D9D9"/>
  </svg>
  , value: "Bookmarks" ,path: "/"},
  { img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2H19.75C20.99 2 22 3.01 22 4.25V19.75C22 20.99 20.99 22 19.75 22ZM4.25 3.5C3.836 3.5 3.5 3.837 3.5 4.25V19.75C3.5 20.163 3.836 20.5 4.25 20.5H19.75C20.164 20.5 20.5 20.163 20.5 19.75V4.25C20.5 3.837 20.164 3.5 19.75 3.5H4.25Z" fill="#D9D9D9"/>
  <path d="M17 8.64002H7C6.586 8.64002 6.25 8.30301 6.25 7.89001C6.25 7.47701 6.586 7.14001 7 7.14001H17C17.414 7.14001 17.75 7.47501 17.75 7.89001C17.75 8.30501 17.414 8.64002 17 8.64002ZM17 12.75H7C6.586 12.75 6.25 12.414 6.25 12C6.25 11.586 6.586 11.25 7 11.25H17C17.414 11.25 17.75 11.586 17.75 12C17.75 12.414 17.414 12.75 17 12.75ZM12 16.86H7C6.586 16.86 6.25 16.525 6.25 16.11C6.25 15.695 6.586 15.36 7 15.36H12C12.414 15.36 12.75 15.697 12.75 16.11C12.75 16.523 12.414 16.86 12 16.86Z" fill="#D9D9D9"/>
  </svg>
  , value: "Lists" ,path: "/"},
  { img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 11.816C13.355 11.816 14.872 11.666 15.84 10.56C16.654 9.63001 16.918 8.19201 16.646 6.16801C16.266 3.34301 14.529 1.65601 12 1.65601C9.47103 1.65601 7.73403 3.34301 7.35403 6.17001C7.08203 8.19201 7.34603 9.63001 8.16003 10.56C9.12803 11.667 10.645 11.816 12 11.816ZM8.84003 6.36801C9.00203 5.16801 9.62703 3.15601 12 3.15601C14.373 3.15601 14.998 5.16901 15.16 6.36801C15.367 7.91801 15.217 8.99501 14.71 9.57301C14.255 10.093 13.444 10.316 12 10.316C10.556 10.316 9.74503 10.093 9.29003 9.57301C8.78303 8.99501 8.63303 7.91701 8.84003 6.36801ZM20.28 19.236C19.403 15.71 15.998 13.246 12 13.246C8.00203 13.246 4.59703 15.71 3.72003 19.236C3.54803 19.928 3.69203 20.636 4.11503 21.176C4.52303 21.696 5.15503 21.996 5.84803 21.996H18.152C18.845 21.996 19.477 21.696 19.885 21.176C20.309 20.636 20.452 19.929 20.279 19.236H20.28ZM18.704 20.252C18.578 20.412 18.388 20.498 18.152 20.498H5.84803C5.61303 20.498 5.42203 20.413 5.29603 20.252C5.15903 20.078 5.11603 19.84 5.17603 19.598C5.88603 16.743 8.69303 14.748 12 14.748C15.307 14.748 18.114 16.742 18.824 19.598C18.884 19.84 18.841 20.078 18.704 20.252Z" fill="#D9D9D9"/>
  </svg>
  , value: "Profile" ,path:"/bradley_"},
  { img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13.5C17.8284 13.5 18.5 12.8284 18.5 12C18.5 11.1716 17.8284 10.5 17 10.5C16.1716 10.5 15.5 11.1716 15.5 12C15.5 12.8284 16.1716 13.5 17 13.5Z" fill="#D9D9D9"/>
  <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#D9D9D9"/>
  <path d="M7 13.5C7.82843 13.5 8.5 12.8284 8.5 12C8.5 11.1716 7.82843 10.5 7 10.5C6.17157 10.5 5.5 11.1716 5.5 12C5.5 12.8284 6.17157 13.5 7 13.5Z" fill="#D9D9D9"/>
  <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#D9D9D9"/>
  </svg>
  , value: "more",path:"/" },
];



export default sidebarItems;