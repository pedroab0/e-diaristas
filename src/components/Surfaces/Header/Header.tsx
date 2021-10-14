import React from "react";
import { Toolbar, Container } from "@mui/material";
import { HeaderAppBar, HeaderLogo } from "./Header.style";

const Header: React.FC = () => {
    return (
        <>
            <HeaderAppBar position={"sticky"}>
                <Toolbar component={Container}>
                    <HeaderLogo src={"/img/logos/logo.svg"} alt={"E-diaristas"} />
                </Toolbar>
            </HeaderAppBar>
        </>
    );
};

export default Header;
