import { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMediaScroll } from '../../../hooks/useMediaScroll';
import { Link } from 'react-router-dom';

export const HamburguerMenu = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const { scrolled } = useMediaScroll(80)
    const navData = [
        { name: 'NOSOTROS', link: '/#nosotros', type: 'a' },
        { name: 'CONTACTO', link: '/#contacto', type: 'a' },
        { name: 'ESPECIALIDADES', to: '/especialidades', type: 'link' },
        { name: 'ESTUDIOS', to: '/estudios', type: 'link' }
    ]

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'space-between'
    }));

    const DrawerBody = styled('div')(({ theme }) => ({
        height: "100%",
        ...theme.mixins.toolbar,
    }));

    const DrawerFooter = styled('div')(({ theme }) => ({
        display: 'flex',
        position: 'relative',
        bottom: 0,
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    }));
    return (
        <div className={scrolled? 'firstHeader scrolled' : 'firstHeader'}>
            <IconButton onClick={handleOpen}>
                <MenuIcon sx={[{
                    color: "white",
                    fontSize: "2rem",
                }]} />
            </IconButton>
            <Drawer
                sx={{
                    width: 400,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 400,
                        boxShadow: 'border-box'
                    }
                }}
                anchor='left'
                open={open}>
                <DrawerHeader>
                    <div className='drawerHeader_title'>
                        <img srcSet="/logoCMD.png" alt="Logo CMD" />
                        <h1>Consultorios Médicos David</h1>
                    </div>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                    <List>
                        {navData.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton component={item.type === 'a' ? 'a' : Link} to={item.to?? item.to} href={item.link?? item.link}>
                                    <ListItemText primary={item.name} sx={[{
                                        color: "#005725",
                                        fontWeight: "bold",
                                        fontSize: "1.5rem",
                                    }]} onClick={handleClose}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemButton component='a' href="https://cmdavid.onrender.com/">
                                <ListItemText primary="Prestadores" sx={[{
                                    color: "#005725",
                                    fontWeight: "bold",
                                    textTransform: 'uppercase'
                                }]} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </DrawerBody>
                <Divider />
                <DrawerFooter>
                    <div className='drawer_Footer'>
                        <a href="https://www.instagram.com/consultoriosmedicosdavid" target='_blank'><InstagramIcon sx={[{ color: "#005725", margin: "0 0.5rem", fontSize: "2rem" }]} /></a>
                        <a href='https://www.facebook.com/ConsultoriosMedicosDavid' target='_blank'><FacebookIcon sx={[{ color: "#005725", margin: "0 0.5rem", fontSize: "2rem" }]} /></a>
                        <a href="https://api.whatsapp.com/send?phone=5491135958787" target='_blank'><WhatsAppIcon sx={[{ color: "#005725", margin: "0 0.5rem", fontSize: "2rem" }]} /></a>
                        <a href="https://www.linkedin.com/company/consultoriosmedicosdavid" target='_blank'><LinkedInIcon sx={[{ color: "#005725", margin: "0 0.5rem", fontSize: "2rem" }]} /></a>
                    </div>
                </DrawerFooter>
            </Drawer>
            
            <img srcSet="/logoCMD.png" alt="Logo CMD" />
        </div>
    )
}
