import { useProvider } from "../../hooks/providerHook"
import { StyleModalWrapper } from "../modalWrapper/style"
import { StyledConfirmDelete } from "./style"

export const ConfirmUserDelete = () => {

    const {user, setUserdel, userDelete} = useProvider()

    const submit = () => {
        setUserdel(null)
        if(user){
            userDelete(user.id)
        } 
    }

    return(
        <StyleModalWrapper>
            <StyledConfirmDelete>
                <div>
                    <h3>Deletar Usuário</h3>
                    <span onClick={()=>setUserdel(null)}>X</span>
                </div>
                <h3>Confirma a deleção?</h3>
                <div>
                    <button onClick={()=>submit()}>Confirmar</button>
                    <button onClick={()=>setUserdel(null)}>Cancelar</button>
                </div>
            </StyledConfirmDelete>
        </StyleModalWrapper>
    )
}