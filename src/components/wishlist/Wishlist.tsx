import { Link } from 'react-router-dom';
import { defaultImg } from "../../helpers";
import usePlanet from "../../hooks/usePlanet";
import { basicFormatDate, getPlanetId } from '../../utils';
import { Button } from '../style/Button';
import { Details, DetailsImage, DetailsTitle } from '../style/allStyle';

interface Props {
    ids: string;
    deleteById: (id: string) => void;
}
const Wishlist = ({ ids, deleteById }: Props) => {

    const { planet, isLoading } = usePlanet(ids)

    const randomImages = defaultImg[Math.floor(Math.random() * defaultImg.length)]

    const date = basicFormatDate(planet?.created ?? '')
    const id = getPlanetId(planet?.url ?? '')
    const fullUrl = `/planet/${id}/${date}`


    return (
        <article>
            {!isLoading && (
                <Details>
                    <Link to={fullUrl}>
                        <DetailsImage src={randomImages} alt={planet?.name} />
                    </Link>
                    <DetailsTitle >{planet?.name}</DetailsTitle>
                    <Button $primary onClick={() => deleteById(ids)}>Delete</Button>
                </Details>
            )}
        </article>
    )
}

export default Wishlist

