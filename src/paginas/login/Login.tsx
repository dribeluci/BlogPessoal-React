import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate} from 'react-router-dom';
import { login } from '../../services/Service';
import UsuarioLogin from '../../models/UsuarioLogin';
import React, { useState, useEffect, ChangeEvent } from 'react';
import './Login.css';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: "" 
        }
        )

        function updatedModel(e:ChangeEvent<HTMLInputElement>) {

            setUsuarioLogin({
                ...usuarioLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(() =>{
                if(token != ''){
                    dispatch(addToken(token))
                    history('/home')
                }
            }, [token])


        async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, usuarioLogin, setToken)
                
                toast.success("Usuário logado com sucesso!",{
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined, 
                  });
            }catch(error){
                toast.error("Dados do usuário inconsistentes. Erro ao logar!",{
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined, 
                  });
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={usuarioLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={usuarioLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>                            
                                <Button type='submit' variant='contained' className='botao1'>
                                    Logar
                                </Button>                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Link to='/cadastrar'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>
                                  
                    </Box>                        
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login