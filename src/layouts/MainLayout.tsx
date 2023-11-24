// src/layouts/MainLayout.js
import React, {ReactNode, useState} from 'react';
import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import {AccountCircle, ExitToApp, Inbox as InboxIcon, Mail as MailIcon} from '@mui/icons-material';
import {Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


interface MainLayoutProps {
    children?: ReactNode
    // any props that come into the component
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    const navigate = useNavigate();

    const drawerWidth = 240;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleTitleClick = () => {
        navigate('/');
    };
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div style={{display: 'flex'}}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleSidebar}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap style={{flexGrow: 1, cursor: 'pointer'}} onClick={handleTitleClick}>
                        My Application
                    </Typography>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                    <Button color="inherit" startIcon={<ExitToApp/>}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={sidebarOpen}
                onClose={toggleSidebar}
                style={{
                    width: drawerWidth,
                    flexShrink: 0,
                }}
                PaperProps={{
                    style: {
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar/>
                <div style={{overflow: 'auto'}}>
                    <List>
                        {['Test'].map((text, index) => (
                            <ListItem key={text} component={Link} to={`/${text.toLowerCase()}`}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main style={{flexGrow: 1, padding: 3, marginLeft: sidebarOpen ? drawerWidth : 0}}>
                <Toolbar/>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
