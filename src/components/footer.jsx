import styled from "@emotion/styled";
import { styles } from "../../styles";

const StyledFooter = styled.footer`
    padding: 0 ${styles.padding.paddingDesktop};
`;

export function Footer() {
    return <StyledFooter>email</StyledFooter>;
}
