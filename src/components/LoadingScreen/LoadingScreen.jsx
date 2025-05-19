import "./LoadingScreen.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingScreen = () => {
    return (
        <div className="loadingScreen">
            <div className="loadingScreenText">
                <h1></h1>
                <p>Por favor, espere un momento.</p>
            </div>
            <div className="animation">
                <DotLottieReact src="/animacion.json" loop autoplay />
            </div>
        </div>
    );
};

export default LoadingScreen;
