import { useState } from "react";
import { CellMeasurer, CellMeasurerCache, List, ListRowRenderer } from "react-virtualized";
import CardPlanet from './CardPlanet';

interface Props {
    width: number;
    height: number;
    allPlanets: Planet[];
    nextPage: () => void;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
}

const VirtualizePlanets = ({ width, height, allPlanets, hasNextPage, isFetchingNextPage, nextPage }: Props) => {

    const [virtualCache] = useState(() => new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100
    }));

    const rowRenderer: ListRowRenderer = ({ index, style, parent }) => {
        const planet = allPlanets[index];

        return (
            <CellMeasurer key={planet.name} cache={virtualCache} parent={parent} columnIndex={0} rowIndex={index}>
                <CardPlanet {...planet} style={style} />
            </CellMeasurer>
        );
    };


    return (
        <List
            width={width}
            height={height}
            rowHeight={virtualCache.rowHeight}
            deferredMeasurementCache={virtualCache}
            rowCount={allPlanets.length}
            rowRenderer={rowRenderer}
            onRowsRendered={({ overscanStopIndex }) => {
                console.log("stop" + overscanStopIndex)
                console.log('length planet' + allPlanets.length)
                if (overscanStopIndex >= allPlanets.length - 1 && hasNextPage && !isFetchingNextPage) {
                    nextPage();
                }
            }}
        />
    )
}

export default VirtualizePlanets