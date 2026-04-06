import profileImg from '../assets/OwethuPicture.jpg'

function Hero(){
    return(
        <section id = "hero">
            <div className="hero-content">
                <img src={profileImg} alt="Gxabhashe" className="hero-img" />
                <h1>Hi, I'm Owethu Lukhona Xulu</h1>
                <p>Full Stack Developer | Building modern web Experiences</p>
                <a href="#contact" className="btn">Get In Touch</a>
            </div>
        </section>

    )
}

export default Hero;