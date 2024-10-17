import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute 
        } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='discover' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Product
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="tel:+19490000000">
                        Call 949-000-0000
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
