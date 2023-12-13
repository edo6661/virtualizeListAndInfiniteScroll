import { AutoSizer } from 'react-virtualized';
import TemporaryError from "../components/Error";
import VirtualizePlanets from '../components/planets/VirtualizePlanets';
import { ContainerHome, LoadingHome } from '../components/style/allStyle';
import usePlanets from "../hooks/usePlanets";
import useTitle from '../hooks/useTitle';
const Home = () => {
    const { planets, nextPage, isFetchingNextPage, hasNextPage, isLoading, isError, error } = usePlanets()
    useTitle('Home')

    if (isError) return <TemporaryError message={error?.message} />

    const allPlanets = planets?.pages?.flatMap(page => page.results) || [];

    const loadingWord = isLoading ? 'Loading...' : isFetchingNextPage ? 'Load more...' : !hasNextPage && 'No more to load'

    const loadingElement = (isLoading || isFetchingNextPage || !hasNextPage) &&
        <LoadingHome> {loadingWord}</LoadingHome>

    return (
        <section>
            <ContainerHome >
                <AutoSizer className='scroller'>
                    {({ width, height }) => (
                        <VirtualizePlanets width={width} height={height} nextPage={nextPage} allPlanets={allPlanets} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} />
                    )}
                </AutoSizer>
                {loadingElement}
            </ContainerHome>
        </section>
    );
}

export default Home