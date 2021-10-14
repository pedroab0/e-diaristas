import { useState, useMemo } from "react";
import { UserInterface } from "types/UserInterface";
import { ValidationService } from "services/ValidationService";
import { ApiService } from "services/ApiService";

export default function useIndex() {
    const [cep, setCep] = useState(""),
        [erro, setErro] = useState(""),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiaristas] = useState([] as UserInterface[]),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);

    const cepValido = useMemo(() => {
        return ValidationService.cep(cep);
    }, [cep]);

    async function buscarProfissionais(cep: string) {
        setBuscaFeita(false);
        setCarregando(true);
        setErro("");

        try {
            const { data } = await ApiService.get<{
                diaristas: UserInterface[];
                quantidade_diaristas: number;
            }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
            console.log(data.diaristas);
            setDiaristas(data.diaristas);
            setDiaristasRestantes(data.quantidade_diaristas);
            setBuscaFeita(true);
            setCarregando(false);
        } catch (error) {
            setErro("CEP não encontrado");
            setCarregando(false);
        }
    }

    return {
        cep,
        setCep,
        cepValido,
        erro,
        buscaFeita,
        diaristas,
        diaristasRestantes,
        carregando,
        buscarProfissionais,
    };
}
