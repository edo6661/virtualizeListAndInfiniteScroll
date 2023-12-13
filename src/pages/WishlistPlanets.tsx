import { SectionWishlist } from "../components/style/allStyle"
import Wishlist from "../components/wishlist/Wishlist"
import useProvider from "../hooks/useProvider"

const WishlistPlanets = () => {

    const { wishlist, deleteWishlist } = useProvider()

    return (
        <SectionWishlist>
            {wishlist.sort((a, b) => Number(b) - Number(a)).map(ids => <Wishlist key={ids} ids={ids} deleteById={deleteWishlist} />)
            }
        </SectionWishlist>
    )
}

export default WishlistPlanets