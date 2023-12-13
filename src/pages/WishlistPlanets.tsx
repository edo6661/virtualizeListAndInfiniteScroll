import { useState } from "react";
import { Button } from "../components/style/Button";
import { ContainerPagination, SectionWishlist } from '../components/style/allStyle';
import Wishlist from "../components/wishlist/Wishlist";
import useProvider from "../hooks/useProvider";

const WishlistPlanets = () => {

    const { wishlist, deleteWishlist } = useProvider()
    const [page, setPage] = useState(1)

    const perPage = 8
    const numPages = Math.ceil(wishlist.length / perPage)

    const emptyElement = !wishlist.length && <h4>No Wishlist YetTTTT</h4>

    console.log(wishlist)
    return (

        <SectionWishlist>
            {wishlist.slice((page - 1) * perPage, page * perPage).sort((a, b) => +b - +a).map(ids => <Wishlist key={ids} ids={ids} deleteById={deleteWishlist} />)}


            <ContainerPagination >
                {emptyElement}
                {Array.from({ length: numPages }).map((_, i) => {
                    const numPage = i + 1
                    const currentPageStyle = numPage === page ? '0.5' : '1'
                    return (
                        <Button key={i} $primary onClick={() => setPage(numPage)}
                            style={{ opacity: currentPageStyle }}>{numPage}</Button>
                    )
                })}
            </ContainerPagination>
        </SectionWishlist >
    )
}

export default WishlistPlanets