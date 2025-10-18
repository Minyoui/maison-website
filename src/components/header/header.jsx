import './header.scss';

function Header ({ title, subtitle }) {
    return (
        <div className='spa-header'>
            <h1 className='spa-title'>{title}</h1>
            <div className='spa-title-divider'/>
            <p className='spa-subtitle'>{subtitle}</p>
        </div>
    );
};

export default Header;