"use client";
import { Box, Link, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

/* xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px */

const Footer = () => {
/* <Container>
    <Box 
        sx={{
            border: 2
            , p:5 
            , borderColor: "peru"
            , bgcolor: "#111"
            , color: "white"
        }} 
        component="span">
        Dentro
    </Box>
</Container> */
    return (
        <footer>
            <Grid container spacing={2} sx={{ pt:5, bgcolor:"#C2C2C2" }}>
                <Grid size={{ xs:12, sm:6, md:6 }}>
                    <Typography color="white" fontWeight="bold" fontSize="20px" sx={{ pb:3 }}>GIS Developers S.A.C.</Typography>
                    <Typography color="#80879A" component="p">
                        Convertimos datos geoespaciales en decisiones inteligentes, integrando precisión, innovación y sostenibilidad para transformar tu territorio.
                    </Typography>
                    <div style={{
                        display: 'flex',
                        gap: '16px',       // Espacio entre íconos
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginTop: '20px'
                        }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon style={{ fontSize: 30, color: '#80879A' }}/>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon style={{ fontSize: 30, color: '#80879A' }}/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon style={{ fontSize: 30, color: '#80879A' }}/>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ fontSize: 30, color: '#80879A' }}/>
                        </a>
                    </div>
                </Grid>
                <Grid size={{ xs:12, sm:6, md:2 }}>
                    <Typography color="white" fontWeight="bold" fontSize="20px">Enlaces útiles</Typography>
                    <Paper elevation={0} 
                        sx={{ 
                            display: "flex" 
                            , alignItems: "center"
                            , gap: 2 , mt: 1
                            , overflow: "hidden"
                            , bgcolor: "#C2C2C2"
                        }}>
                        <Box sx={{ flexGrow:1 }}>
                            <Link href="#" underline="none" color="#80879A"> 
                                <p>Blog</p>
                            </Link>
                            <Link href="#" underline="none" color="#80879A">
                                <p>Precios</p>
                            </Link>
                            <Link href="#" underline="none" color="#80879A">
                                <p>Acerca de</p>
                            </Link>
                        </Box>
                    </Paper>                
                </Grid>
                <Grid size={{ xs:12, sm:6, md:2 }}>
                    <Typography color="white" fontWeight="bold" fontSize="20px">Términos</Typography>
                    <Paper elevation={0} 
                        sx={{ 
                            display: "flex" 
                            , alignItems: "center"
                            , gap: 2 , mt: 1
                            , overflow: "hidden"
                            , bgcolor: "#C2C2C2"
                        }}>
                        <Box sx={{ flexGrow:1 }}>
                            <Link href="#" underline="none" color="#80879A"> 
                                <p>Condiciones de servicio</p>
                            </Link>
                            <Link href="#" underline="none" color="#80879A">
                                <p>Política de privacidad</p>
                            </Link>
                            <Link href="#" underline="none" color="#80879A">
                                <p>Política de reembolso</p>
                            </Link>
                        </Box>
                    </Paper>   
                </Grid>
                <Grid size={{ xs:12, sm:6, md:2 }}>
                    <Typography color="white" fontWeight="bold" fontSize="20px">Soporte y ayuda</Typography>
                    <Paper elevation={0} 
                        sx={{ 
                            display: "flex" 
                            , alignItems: "center"
                            , gap: 2 , mt: 1
                            , overflow: "hidden"
                            , bgcolor: "#C2C2C2"
                        }}>
                        <Box sx={{ flexGrow:1 }}>
                            <Link href="#" underline="none" color="#80879A"> 
                                <p>Abrir ticket - soporte</p>
                            </Link>
                            <Link href="#" underline="none" color="#80879A">
                                <p>Condiciones de uso</p>
                            </Link>
                            <Link href="#" underline="none" color="#80879A">
                                <p>Acerca de</p>
                            </Link>
                        </Box>
                    </Paper>   
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ pt:3, pb:3, bgcolor:"#C2C2C2" }}>
                <Grid size={{ xs:12, sm:12, md:12 }}>
                    <Typography color="white" fontSize="18px" textAlign="center"> 
                        © 2025 GIS Developers SAC | Derechos reservados
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
