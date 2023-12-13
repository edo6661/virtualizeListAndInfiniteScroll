interface ContextType {
	wishlist: string[];
	setWishlist: React.Dispatch<React.SetStateAction<string[]>>;
	addWishlist: (id: string) => void;
	deleteWishlist: (id: string) => void;
}
