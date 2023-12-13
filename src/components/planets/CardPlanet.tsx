import { basicFormatDate, getPlanetId } from "../../utils";
import { LinkHome, TitleHome, UniqueParagraph } from '../style/allStyle';
const CardPlanet = ({ created, name, url, terrain, style }: Planet & { style: React.CSSProperties }) => {
    const date = basicFormatDate(created)
    const id = getPlanetId(url)
    const fullUrl = `planet/${id}/${date}`
    return (
        <div style={{ ...style, paddingBottom: '1rem' }}>
            <LinkHome to={fullUrl}>
                <TitleHome>{name}</TitleHome>
                <UniqueParagraph>{terrain}</UniqueParagraph>
            </LinkHome>
        </div>
    )
}

export default CardPlanet