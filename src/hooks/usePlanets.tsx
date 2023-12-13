import { useInfiniteQuery } from "@tanstack/react-query"
import { getPlanets } from "../api/get"

const usePlanets = () => {

    const { data: planets, isError, error, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['Planets'],
        queryFn: getPlanets,
        initialPageParam: 1,
        getNextPageParam: (currentPage) => {
            if (currentPage.next) {
                const url = new URL(currentPage.next ?? '')
                const nextPageParam = Number(url.searchParams.get('page'))
                return nextPageParam
            }
        }
    })

    const nextPage = () => fetchNextPage()

    return { planets, isError, error, isFetchingNextPage, hasNextPage, nextPage, isLoading }

}

export default usePlanets