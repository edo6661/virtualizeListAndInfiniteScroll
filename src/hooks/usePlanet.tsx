import { useQuery } from "@tanstack/react-query"
import { getPlanet } from "../api/get"

const usePlanet = (id: string) => {
    const { data: planet, isError, error, isLoading } = useQuery({
        queryKey: ['Planet', id],
        queryFn: () => getPlanet(id),
    })
    return { planet, isError, error, isLoading }
}

export default usePlanet