import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function Footer() {
const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if(token !== '') {
      footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
          <Box className='box1'>
              <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-me nas redes sociais </Typography>
              </Box>             
          </Box>
          <Box className='box2'>
          <Box display="flex" alignItems="center" justifyContent="center">
                  <a href="https://github.com/dribeluci" target="_blank">
                      <GitHubIcon className='redes'/>
                  </a>
                  <a href="https://www.linkedin.com/in/adriana-beluci/" target="_blank">
                      <LinkedInIcon className='redes'/>
                  </a>
              </Box>              
          </Box>
      </Grid>
  </Grid>      
  }

    return (
        <>
        {footerComponent}
        </>
    )
}

export default Footer;