import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    let history = useNavigate();
    const dispatch = useDispatch();

    function deslogar() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined,        
        })
        history('/logar')
    }

    var navbarComponent;

    if(token!== '') {
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense" className='fundo1'>
            <Link to="/home" className='text-decorator-none'>
                <Box className='cursor'>                    
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>
            </Link>
            <Box display="flex" justifyContent="start" >
                <Link to="/home"  className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>                        
                    </Box>
                </Link>
                <Link to="/postagens" className='text-decorator-none'>
                    <Box mx={1} className='cursor'>                        
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                </Link>
                <Link to="/formularioTema" className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            cadastrar tema
                        </Typography>
                    </Box>
                </Link>                      
                <Box mx={1} className='cursor' onClick={deslogar}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>               
            </Box>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
           {navbarComponent} 
        </>
    )
}
export default Navbar;