import { Helmet } from 'react-helmet-async';
import  './Banner.css'
const Banner = () => {
 return (
   <div className="w-full  dark:bg-black max-w-7xl mx-auto bg-slate-200">
     <Helmet>
       <title>Effective Task</title>
     </Helmet>

     <div className="carousel w-full">
       <div id="slide1" className="carousel-item relative min-h-screen w-full m- border-4">
         <img
           src="https://media.licdn.com/dms/image/D5612AQENzojGNldqsw/article-cover_image-shrink_720_1280/0/1683354341943?e=2147483647&v=beta&t=5Raai7lAfurSA8qHSFe_uq57WOxKMaXVnHKGdz0ZV5U"
           className="w-full h-[42rem]"
         />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide4" className="btn btn-circle">
             ❮
           </a>
           <a href="#slide2" className="btn btn-circle">
             ❯
           </a>
         </div>
       </div>
       <div id="slide2" className="carousel-item relative w-full">
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5COUgRzktk8ogI-U9MQzOkDBCa5hM0wJkIhUm5gjuYQ&s"
           className="w-full"
         />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide1" className="btn btn-circle">
             ❮
           </a>
           <a href="#slide3" className="btn btn-circle">
             ❯
           </a>
         </div>
       </div>
       <div id="slide3" className="carousel-item relative w-full">
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKS5fLuwRTs92KO1uMXgVjB_iYA99XEUxSew&s"
           className="w-full"
         />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide2" className="btn btn-circle">
             ❮
           </a>
           <a href="#slide4" className="btn btn-circle">
             ❯
           </a>
         </div>
       </div>
       <div id="slide4" className="carousel-item relative w-full">
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXyVGt6B3msQ_AM5K2htYzdych9OioD5a2g&s"
           className="w-full"
         />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide3" className="btn btn-circle">
             ❮
           </a>
           <a href="#slide1" className="btn btn-circle">
             ❯
           </a>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Banner;