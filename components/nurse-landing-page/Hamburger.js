import React, {useContext} from 'react';
import {StyleSheet , TouchableOpacity, View, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { AuthContext } from '../../src/context/AuthContext';

const {height, width} = Dimensions.get('window');
const buttonDiameter = Math.round(height * 0.072)

export default function Hamburger (props) {

    const authContext = useContext(AuthContext);

    return (
        <TouchableOpacity style={styles.hamburger}>
            <Menu name="hamburger">
                <MenuTrigger>
                    <Icon name="menu" color = '#FFFFFF' size = {41} iconStyle = {styles.icon} />
                </MenuTrigger>
                <MenuOptions customStyles = {styles.menuOptions}>
                    <MenuOption onSelect={() => props.navigation.navigate('Home')}>
                        <Icon name="home" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                    <MenuOption onSelect={() => props.setBridgeActivePage(2)}>
                        <Icon name="user" type="entypo" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                    <MenuOption>
                        <Icon name="settings" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                    <MenuOption>
                        <Icon name="close" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                    </MenuOption>
                    {/** if is authenticated */
                        authContext.authState.authenticated &&
                        <MenuOption onSelect={() => authContext.logout()}>
                        <Icon name="logout" color = '#FFF' size = {30} iconStyle = {styles.icon} />
                        </MenuOption>
                    }
                    
                </MenuOptions>
            </Menu>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    hamburger: {
        height: buttonDiameter,
        width: buttonDiameter,
        borderRadius: Math.floor(buttonDiameter/2),
        backgroundColor: '#cb0d00',
        alignContent: "center",
        marginLeft: 15,
        marginTop: '8%',

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
        marginLeft: 0,
    },
    menuOptions:{
        optionsContainer:{
            width: '21%',
            borderRadius: 20,
            alignContent: "center",
            padding: '23%',
            backgroundColor: '#cb0d00',
        },
    },
})