import { LinearProgress, CircularProgress } from '@mui/material';
import propTypes from 'prop-types';
import './LoadingPage.css';

export const LoadingPage = ({ progress }) => {
    return (
        <>
            <LinearProgress variant="determinate" value={progress} color="success" />
            <div className='loading_box'>
                <h1>Espere por favor...</h1>
                <div className='progress_box'>
                    <CircularProgress color='success' />
                </div>
            </div>
        </>

    )
}

LoadingPage.propTypes = {
    progress: propTypes.number.isRequired
}