import styled from "@emotion/styled";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledLoader = styled.div`
    display: grid;
    height: 100%;
    text-align: center;
    place-items: center;

    * {
        overflow: hidden;
    }
    .circular {
        height: 60px;
        width: 60px;
        position: relative;
    }

    .circular .inner {
        position: absolute;
        z-index: 6;
        top: 50%;
        left: 50%;
        height: 50px;
        width: 50px;
        margin: -24.5px 0 0 -24.5px;
        background: red;
        border-radius: 100%;
    }

    .circular .number {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        font-weight: 500;
        color: #4158d0;

        display: grid;

        place-items: center;
    }

    .circular .bar {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #fff;
        -webkit-border-radius: 100%;
        clip: rect(0px, 60px, 60px, 30px);
    }

    .circle .bar .progress {
        position: absolute;
        height: 100%;
        width: 100%;
        -webkit-border-radius: 100%;
        clip: rect(0px, 30px, 60px, 0px);
        background: #4158d0;
    }

    .circle .left .progress {
        z-index: 1;
        animation: left 1s linear both;
    }
    @keyframes left {
        100% {
            transform: rotate(180deg);
        }
    }
    .circle .right {
        transform: rotate(180deg);
        z-index: 3;
    }
    .circle .right .progress {
        animation: right 1s linear both;
        animation-delay: 1s;
    }
    @keyframes right {
        100% {
            transform: rotate(180deg);
        }
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    height: 3rem;
    font-size: 3rem;
    margin: 0;
    padding: 0;
`;

export function CircularLoading() {
    return (
        <StyledLoader>
            <div className="circular">
                <div className="inner"></div>
                <div className="number">
                    <StyledFontAwesomeIcon icon={faDev} />
                </div>
                <div className="circle">
                    <div className="bar left">
                        <div className="progress"></div>
                    </div>
                    <div className="bar right">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </StyledLoader>
    );
}
