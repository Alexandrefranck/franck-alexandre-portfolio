import styles from '../../styles/Hero.module.scss';
import Lottie from "react-lottie";
import animationData from "../../public/lotties/8167-simple-scroll-down-icon.json";
import ThreeDButtons from '../ThreeDButtons';
import Image from 'next/image';
import Avatar from '@/public/photos/Arkange.png';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


function Hero() {
    

    return (
        <div className="vh-100 bg-dark d-flex align-items-center justify-content-center">
            <div className="text-white text-center">
                <Image src={Avatar} width={250} height={305} className='rounded-circle object-fit-cover px-4 px-md-0 '  />
                <h1 className="">Alexandre Franck</h1>
                <p>Développeur Web en recherche d'alternance !</p>
                <div className="d-flex justify-content-center gap-4 fs-4">
                    <a target="_blank" href="https://www.linkedin.com/in/alexandre-franck-54411825a/" className="text-white">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://github.com/Alexandrefranck" className="text-white">
                        <i className="bi bi-github"></i>
                    </a>
                    <a target="_blank" href="/CV_Alexandre.pdf" className="text-white">
                        <i className="bi bi-file-earmark-person-fill"></i>
                    </a>

                </div>
                <div className="mt-4">
                    <a href="#contact">
                        <ThreeDButtons text="Me contacter"></ThreeDButtons>
                    </a>
                </div>
            </div>
                <a href="#" className={styles.lottieSection}>
                    <small className="text-white">Scroll Down</small>
                    <Lottie options={defaultOptions} height={40} width={40} />
                </a>
        </div>
    );
}

export default Hero;
