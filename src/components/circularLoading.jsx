/**JsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "../../theme.config";

const StyledDiv = styled.div`
    button {
        overflow: hidden;
        background: none;
        border: 0;
        box-sizing: border-box;

        // Required, since we're setting absolute on pseudo-elements
        position: relative;
        vertical-align: middle;
        display: grid;
        place-items: center;

        &::before,
        &::after {
            box-sizing: inherit;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
    .spin {
        width: 4em;
        height: 4em;
        padding: 0;

        &:hover {
            color: $blue;
        }

        &::before,
        &::after {
            top: 0;
            left: 0;
        }

        &::before {
            border: ${(props) => props.theme.border.thickness} solid transparent; // We're animating border-color again
        }

        &:hover::before {
            border-top-color: ${(props) =>
                props.theme.color.blue}; // Show borders
            border-right-color: ${(props) => props.theme.color.blue};
            border-bottom-color: ${(props) => props.theme.color.blue};

            transition: border-top-color 0.15s linear,
                // Stagger border appearances
                border-right-color 0.15s linear 0.1s,
                border-bottom-color 0.15s linear 0.2s;
        }

        &::after {
            border: 0 solid transparent; // Makes border thinner at the edges? I forgot what I was doing
        }

        &:hover::after {
            border-top: ${(props) => props.theme.border.thickness} solid
                ${(props) => props.theme.color.blue}; // Shows border
            border-left-width: ${(props) =>
                props.theme.border.thickness}; // Solid edges, invisible borders
            border-right-width: ${(props) =>
                props.theme.border.thickness}; // Solid edges, invisible borders
            transform: rotate(270deg); // Rotate around circle
            transition: transform 0.4s linear 0s,
                border-left-width 0s linear 0.35s; // Solid edge post-rotation
        }
    }

    .circle {
        border-radius: 100%;
        box-shadow: none;

        &::before,
        &::after {
            border-radius: 100%;
        }
    }
`;

export function CircularLoading({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <StyledDiv>
                <button className="spin circle">{children}</button>
            </StyledDiv>
        </ThemeProvider>
    );
}
