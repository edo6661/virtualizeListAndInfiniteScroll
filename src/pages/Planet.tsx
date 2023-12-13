import { useParams } from "react-router-dom"
import TemporaryError from "../components/Error"
import PlanetDetails from "../components/planets/PlanetDetails"
import { SectionPlanet } from "../components/style/allStyle"
import usePlanet from "../hooks/usePlanet"
import useTitle from "../hooks/useTitle"
const Planet = () => {
    const { id } = useParams()

    const { planet, isLoading, isError, error } = usePlanet(id ?? '');

    useTitle(planet?.name ?? 'Loading...')

    if (isError) return <TemporaryError message={error?.message} />

    return (
        <SectionPlanet >
            {id && planet && !isLoading ? (
                <PlanetDetails {...planet} id={id} />
            ) : <h2>Loading...</h2>}
        </SectionPlanet>
    )
}

export default Planet