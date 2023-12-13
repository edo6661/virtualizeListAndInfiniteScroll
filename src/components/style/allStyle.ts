import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../helpers';
import { Button } from './Button';

// ! homepage

// ! ! single planets

// ! ! utils
export const title = `
  font-size: 1.2rem;
  font-weight: 600;
`;

export const fadeWordStyle = `
  opacity: 0.5;
`;

export const endStyle = `
  text-align: end;
`;

export const uniqueWordStyle = `
  color: ${theme.quaternaryBg};
`;

export const wrapper = `
  max-width: 768px;
  margin-inline: auto;
`;

export const spaceY = `
  padding-block: 1.5rem;
`;

export const spaceX = `
  padding-inline: 1.5rem;
`;

export const hovered = `
  transition: all 300ms;

  &:hover {
    opacity: 0.6;
  }
`;

const flexCenter = `
  display: flex;
  align-items: center;
`;

const titleHovered = `
  ${title}
  ${hovered}
`;

export const gapWrapper = `
	${wrapper}
	${spaceX}
	${spaceY}
`;

// ! Header & Footer
export const HeaderFooterContainer = styled.div`
	width: 100%;
	${flexCenter};
	${wrapper}
	${spaceX}
	color: ${theme.tertiaryBg}
`;

export const Logo = styled.img`
	height: 3rem;
	${hovered}
`;

export const StyledLink = styled(Link)`
	${titleHovered}
`;

// Home
export const ContainerHome = styled.article`
	height: 40vh;
	${gapWrapper}
`;

export const LoadingHome = styled.h5`
	position: absolute;
	bottom: -30px;
	margin-top: 1rem;
	${title}
`;

export const LinkHome = styled(Link)`
	${hovered}
`;
export const TitleHome = styled.p`
	${titleHovered}
`;
export const UniqueParagraph = styled.p`
	color: ${theme.quaternaryBg};
`;

// ! Planet
export const SectionPlanet = styled.section`
	${gapWrapper}
`;

export const ContainerPlanet = styled.article`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		justify-items: center;
	}
`;

export const PlanetImage = styled.img`
	border-radius: 0.75rem;
	width: 16rem;
	height: 346px;

	@media (max-width: 600px) {
		border-radius: 0;
		border-top-left-radius: 0.75rem;
		border-top-right-radius: 0.75rem;
	}
`;

export const InnerPlanet = styled.div`
	grid-column: span 2 / span 2;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media (max-width: 600px) {
		grid-column: 1;
	}
`;

export const AnchorPlanet = styled.a`
	${titleHovered}
`;

// ! Wishlist Page
export const SectionWishlist = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
	gap: 1rem;
	${spaceX}
	${spaceY}
	${wrapper}
`;

export const Details = styled.div`
	${flexCenter};
	flex-direction: column;
	gap: 0.5rem;
`;

export const DetailsButton = styled.button`
	${Button}
	width: 100%;
	border-radius: 0.3rem;
`;

export const DetailsImage = styled.img`
	height: 186px;
	width: 186px;
	border-radius: 0.75rem;
	${hovered}
`;

export const DetailsTitle = styled.p`
	${title}
`;

export const ContainerPagination = styled.div`
	grid-column: 1 / -1;
	margin-top: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
`;

export const NotFound = styled.h2`
	text-align: center;
	${spaceX}
	${spaceY}
`;
