import styled from "styled-components";
import { theme } from "../../helpers";

export const Button = styled.button<{ $primary?: boolean; }>`
background: ${props => (props.$primary ? theme.primaryBg : theme.secondaryBg)};
color: ${props => (props.$primary ? 'white' : 'black')};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: 0;
    transition: all 200ms ease-in-out;

    &:hover {
        background: ${props => (props.$primary ? theme.secondaryBg : theme.primaryBg)};
    }

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;
