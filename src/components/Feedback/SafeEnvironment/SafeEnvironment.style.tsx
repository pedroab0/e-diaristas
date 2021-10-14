import { styled } from "@mui/material/styles";

export const SafeEnvironmentContainer = styled("div")`
    text-align: right;
    font-size: 0.75rem;
    padding: ${({ theme }) => theme.spacing(2)} 0;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.secondary};
`;
