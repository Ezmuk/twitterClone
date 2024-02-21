import photo from '../assets/php.jpg';

export default function Avatar(){
    return(
        <div className='avatar'>
        <img src={photo} alt="Profile Picture" />
    </div>
    )
}