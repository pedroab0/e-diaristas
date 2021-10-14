import React from "react";

import { Container } from "@mui/material";

import { SafeEnvironmentContainer } from "./SafeEnvironment.style";

const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            Ambiente Seguro <span className={"twf-lock"} />
        </SafeEnvironmentContainer>
    );
};

export default SafeEnvironment;
