'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Logo from './Logo';

type NavData = {
    title: string;
    path: string;
}

type DrawerProps = {
    navData: NavData[];
    resolvedTheme: string;
}
const DrawerMenu = ({navData, resolvedTheme}: DrawerProps) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
        backgroundColor: resolvedTheme === 'dark' ? '#101219' : '#ffffff',
    }));
    
    const DrawerBody = styled('div')(({ theme }) => ({
        height: "100%",
        ...theme.mixins.toolbar,
        backgroundColor: resolvedTheme === 'dark' ? '#101219' : '#ffffff',
        fontFamily: 'var(--font-ubuntu)'
    }));
    
    const DrawerFooter = styled('div')(({ theme }) => ({
        display: 'flex',
        position: 'relative',
        bottom: 0,
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'center',
        backgroundColor: resolvedTheme === 'dark' ? '#101219' : '#ffffff',
    }));

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <MenuIcon sx={{ color: resolvedTheme === 'dark' ? '#ffffff' : 'var(--logo-text-primary)' }} />
            </IconButton><Drawer
                sx={{
                    width: '90%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '90%',
                        boxShadow: 'border-box'
                    }
                }}
                anchor='left'
                open={open}>
                <DrawerHeader>
                    <div className='flex items-center gap-2'>
                        <Logo color={resolvedTheme === 'dark' ? '#ffffff' : 'var(--logo-text-primary)'} height='30' width='30' />
                        <h1 className='text-md font-bold tracking-tight text-(--logo-text-primary)  font-ubuntu'>Consultorios Médicos David</h1>
                    </div>
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ color: resolvedTheme === 'dark' ? '#ffffff' : 'var(--logo-text-primary)' }} />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                    <List>
                        {navData.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton component={Link} href={item.path}>
                                    <ListItemText primary={item.title} sx={[{
                                        color: resolvedTheme === 'dark' ? '#ffffff' : 'var(--logo-text-primary)',
                                        fontWeight: "bold",
                                        fontSize: "1.5rem"
                                    }]} onClick={handleClose} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{backgroundColor: resolvedTheme === 'dark' ? '#ffffff' : '#101219', opacity: 0.2
                    }} variant='middle'/>
                    <List>
                        <ListItem>
                            <ListItemButton component='a' href="https://app.consultoriosmedicosdavid.com.ar/login">
                                <ListItemText primary="Prestadores" sx={[{
                                    color: resolvedTheme === 'dark' ? '#ffffff' : 'var(--logo-text-primary)',
                                    fontWeight: "bold",
                                }]}  />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </DrawerBody>
                <Divider />
                <DrawerFooter>
                    <div className='flex items-center gap-2'>
                        <Link href="https://www.instagram.com/consultoriosmedicosdavid" target='_blank'><InstagramIcon sx={[{ color: resolvedTheme === 'dark' ? '#ffffff' : '#034d37', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                        <Link href='https://www.facebook.com/ConsultoriosMedicosDavid' target='_blank'><FacebookIcon sx={[{ color: resolvedTheme === 'dark' ? '#ffffff' : '#034d37', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                        <Link href="https://api.whatsapp.com/send?phone=5491135958787" target='_blank'><WhatsAppIcon sx={[{ color: resolvedTheme === 'dark' ? '#ffffff' : '#034d37', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                        <Link href="https://www.linkedin.com/company/consultoriosmedicosdavid" target='_blank'><LinkedInIcon sx={[{ color: resolvedTheme === 'dark' ? '#ffffff' : '#034d37', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                    </div>
                </DrawerFooter>
            </Drawer>
        </div>
    )
}


export default DrawerMenu;