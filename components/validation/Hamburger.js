import React from 'react';
import {StyleSheet , TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

export default function Hamburger (props) {

    return (
        <TouchableOpacity style={styles.hamburger}>
            <Menu name="hamburger">
                <MenuTrigger>
                    <Icon name="menu" color = '#FFFFFF' size = {44} iconStyle = {styles.icon} />
                </MenuTrigger>
                <MenuOptions customStyles = {styles.menuOptions}>
                    <MenuOption onSelect={() => props.navigation.navigate('Home')}>
                        <Icon name="home" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                    <MenuOption>
                        <Icon name="dashboard" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                    <MenuOption>
                        <Icon name="settings" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                    <MenuOption>
                        <Icon name="close" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    hamburger: {
        height: 54,
        width: 54,
        backgroundColor: '#EC1C24',
        borderRadius: 27,
        alignContent: "center",
        marginLeft: 15,
        marginTop: 30,

        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    icon:{
        marginTop: 5,
        marginLeft: 2,
    },
    menuOptions:{
        optionsContainer:{
            width: 85,
            borderRadius: 20,
            alignContent: "center",
            padding: 20,
            backgroundColor: '#EC1C24',
        },
    },
})