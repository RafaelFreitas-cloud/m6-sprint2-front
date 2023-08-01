import { useProvider } from "../../hooks/providerHook"
import { StyleModalWrapper } from "../modalWrapper/style"
import { StyledConfirmDelete } from "./style"

export const ConfirmUserDelete = () => {

    const {user, userDelete, setDelecao} = useProvider()

    const submit = () => {
        setDelecao(null)
        if(user){
            userDelete(user.id)
        } 
    }

    return(
        <StyleModalWrapper>
            <StyledConfirmDelete>
                <div className="header">
                    <h4>Deletar Usuário</h4>
                    <span onClick={()=>setDelecao(null)}>X</span>
                </div>
                <h3>Confirmar a deleção?</h3>
                <div className="btnForm">
                    <button  className="confirm" onClick={()=>submit()}>Confirmar</button>
                    <button className="cancel" onClick={()=>setDelecao(null)}>Cancelar</button>
                </div>
            </StyledConfirmDelete>
        </StyleModalWrapper>
    )
}