import React, {useEffect, useRef, useState} from 'react';
import {Image, Button, Modal} from 'antd';
import LightningMcQueen from '../images/Lightning_McQueen.png';
import hizliyim from '../sounds/BenHızlıyım.mp3';

const McquennPage = ({ handleYesOption }) => {
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false); // Modal'in görünürlüğünü kontrol etmek için state

    const handleMouseEnter = () => {
        const randomX = Math.random() * (window.innerWidth - 200); // Pencere genişliği içinde rastgele X pozisyonu
        const randomY = Math.random() * (window.innerHeight - 200); // Pencere yüksekliği içinde rastgele Y pozisyonu
        setButtonPosition({ x: randomX, y: randomY });
    };

    const handleButtonClick = () => {
        setIsVisible(true); // Butona basıldığında modal'ı görünür yap
    };

    const handleModalClose = () => {
        setIsVisible(false); // Modal kapatıldığında modal'ı görünmez yap
        handleYesOption();
    };

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
            <audio ref={audioRef} autoPlay>
                <source src={hizliyim} type="audio/mpeg"/>
                Tarayıcınız audio elementini desteklemiyor.
            </audio>
            <div style={{marginBottom: '20px'}}> {/* Resim */}
                <Image
                    style={{maxWidth: '90vw', maxHeight: '70vh', objectFit: 'contain'}}
                    src={LightningMcQueen}
                    alt="mcquenn"
                    preview={false}
                />
            </div>
            <h1> Bir Kahve İçer Miyiz ?</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90vw',
                maxWidth: '500px'
            }}> {/* Evet ve Hayır Butonları */}
                <Button
                    type="danger"
                    style={{width: '100px', background: "red"}}
                    onClick={handleButtonClick}
                >
                    Evet
                </Button>
                <Button
                    type="danger"
                    style={{
                        width: '100px',
                        position: buttonPosition.x === 0 ? 'relative' : 'absolute',
                        left: buttonPosition.x + 'px',
                        top: buttonPosition.y + 'px',
                        transition: 'top 0.3s ease-in-out',
                        background: "red"
                    }}
                    onMouseEnter={handleMouseEnter}
                    onClick={handleMouseEnter}
                >
                    Hayır
                </Button>
            </div>
            <Modal
                title="Mükemmel!"
                visible={isVisible} // Modal'in görünürlüğü
                onCancel={handleModalClose} // Modal kapatılma işlevi
                footer={null} // Footer'ı kapatın, gerekiyorsa düzenleyebilirsiniz
            >
                <p>
                    Ozaman nereye gidiyoruz??? :)
                </p>
            </Modal>
        </div>
    );
};

export default McquennPage;
