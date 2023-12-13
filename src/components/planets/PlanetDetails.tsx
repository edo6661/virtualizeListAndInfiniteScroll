import { defaultImg } from "../../helpers";
import useProvider from "../../hooks/useProvider";
import { formatDate } from "../../utils";
import { Button } from "../style/Button";
import { ContainerPlanet, InnerPlanet, PlanetImage } from "../style/allStyle";

const PlanetDetails = ({ name, diameter, orbital_period, gravity, terrain, surface_water, population, created, edited, id }: Planet & { id: string }) => {
    const { deleteWishlist, wishlist, addWishlist } = useProvider()

    const details = [
        { label: '', value: name, class: 'title ' },
        { label: 'Diameter:', value: diameter, class: 'uniqueWord' },
        { label: 'Orbital Period:', value: orbital_period, },
        { label: 'Gravity:', value: gravity, class: 'uniqueWord' },
        { label: 'Terrain:', value: terrain, },
        { label: 'Surface Water:', value: surface_water, class: 'uniqueWord' },
        { label: 'Population:', value: population, },
        { label: 'Created at:', value: formatDate(created), class: 'fadeWord end' },
        { label: 'Edited at:', value: formatDate(edited), class: 'fadeWord end' },
    ];

    const randomImg = defaultImg[Math.floor(Math.random() * defaultImg.length)]

    const elementDetails = details.map(detail =>
        <div key={detail.label}>
            {detail.value && <p className={detail.class}>{`${detail.label} ${detail.value}`}</p>}
        </div>)

    const actions = wishlist.includes(id)
        ? <Button $primary onClick={() => deleteWishlist(id)}>Delete wishlist</Button>
        : <Button $primary onClick={() => addWishlist(id)}>Add to wishlist</Button>

    return (
        <ContainerPlanet>
            <PlanetImage src={randomImg} alt="random images" />
            <InnerPlanet>
                {elementDetails}
                {actions}
            </InnerPlanet>
        </ContainerPlanet>
    )
}

export default PlanetDetails