import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/banner.jpg',
        '/banner2.jpg',
        '/banner3.jpg',
        '/banner4.jpg'
    ]


    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length )
        },2000)
        return ()=> clearInterval(interval)
    },[])

  return (
    <div>
    <div className='main'> 
      <div className='banner'>
      <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <img key={index} src={img} alt={`Slide ${index + 1}`} className="slide" />
                    ))}
            </div>
      </div>
      <div className='title'>
        <span>YOUR FASHION JOURNEY STARTS HERE</span>
        <h2>Shop the Finest Quality Apparel</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa error expedita dicta fuga quod laborum, eos beatae. Velit inventore, eius aut, est recusandae doloremque eligendi dignissimos molestiae iusto repudiandae temporibus quia. Consequuntur aperiam, vel recusandae voluptatibus, ab dignissimos dicta praesentium libero odit, nihil nobis! Accusantium nisi exercitationem dolor nam!</p>
        <Link className='store' to='/Store'>Visit Store</Link>
      </div>
    </div>
    </div>
  )
}

export default Home