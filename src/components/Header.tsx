import { Link } from 'react-router-dom';
import { HeaderFooterContainer, Logo, StyledLink } from './style/allStyle';

const Header = () => {
    return (
        <header>
            <HeaderFooterContainer >
                <Link to='/'>
                    <Logo src="/logo.png" alt="logo" />
                </Link>
                <StyledLink to='wishlist'  >Wishlist</StyledLink >
            </HeaderFooterContainer>
        </header>
    )
}

export default Header