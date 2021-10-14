import type { NextPage } from "next";
import SafeEnvironment from "components/Feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "components/DataDisplay/PageTitle/PageTitle";
import UserInformation from "components/DataDisplay/UserInformation/UserInformation";
import TextFieldMask from "components/Inputs/TextFieldMask/TextFieldMask";
import {
    FormElementsContainer,
    ProfissionaisPaper,
    ProfissionaisContainer,
} from "styles/pages/index.style";
import { Container, Button, Typography, CircularProgress } from "@mui/material";

import useIndex from "hooks/pages/useIndex.page";

const Home: NextPage = () => {
    const {
        cep,
        setCep,
        cepValido,
        erro,
        buscaFeita,
        diaristas,
        diaristasRestantes,
        carregando,
        buscarProfissionais,
    } = useIndex();
    return (
        <Container>
            <SafeEnvironment />
            <PageTitle
                title={"Conheça os profissionais"}
                subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"}
            />

            <FormElementsContainer>
                <TextFieldMask
                    mask={"99.999-999"}
                    label={"Digite seu CEP"}
                    fullWidth
                    variant={"outlined"}
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                />

                {erro && <Typography color={"error"}>{erro}</Typography>}

                <Button
                    variant={"contained"}
                    color={"secondary"}
                    sx={{ width: "220px" }}
                    disabled={!cepValido || carregando}
                    onClick={() => buscarProfissionais(cep)}
                >
                    {carregando ? <CircularProgress size={20} /> : "Buscar"}
                </Button>
            </FormElementsContainer>

            {buscaFeita &&
                (diaristas.length > 0 ? (
                    <ProfissionaisPaper>
                        <ProfissionaisContainer>
                            {diaristas.map((diarista, index) => {
                                return (
                                    <UserInformation
                                        key={index}
                                        name={diarista.nome_completo}
                                        picture={diarista.foto_usuario}
                                        rating={diarista.reputacao}
                                        description={diarista.cidade}
                                    />
                                );
                            })}
                        </ProfissionaisContainer>

                        <Container sx={{ textAlign: "center" }}>
                            {diaristasRestantes > 0 && (
                                <Typography sx={{ mt: 5 }}>
                                    ...e mais {diaristasRestantes}{" "}
                                    {diaristasRestantes > 1
                                        ? "profissionais atendem"
                                        : "profissional atende"}{" "}
                                    ao seu endereço.
                                </Typography>
                            )}
                            <Button variant={"contained"} color={"secondary"} sx={{ mt: 5 }}>
                                Contratar um profissional
                            </Button>
                        </Container>
                    </ProfissionaisPaper>
                ) : (
                    <Typography align={"center"} color={"textPrimary"} sx={{ mb: 5 }}>
                        Ainda não temos nenhuma diarista disponível na sua região
                    </Typography>
                ))}
        </Container>
    );
};

export default Home;
