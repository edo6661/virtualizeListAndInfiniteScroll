import { Link } from "react-router-dom"
import { AnchorPlanet, HeaderFooterContainer, Logo } from "./style/allStyle"

const Footer = () => {
    return (
        <footer>
            <HeaderFooterContainer style={{ justifyContent: 'end', gap: '.5rem' }}>
                <Link to='/'>
                    <Logo src="/logo.png" alt="logo" />
                </Link>
                <AnchorPlanet target="_blank" href="https://github.com/edo6661" rel="noreferrer">
                    Halo Mamaah
                </AnchorPlanet>


            </HeaderFooterContainer>
        </footer>
    )
}

export default Footer