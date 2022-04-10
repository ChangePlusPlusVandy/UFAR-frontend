import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function SlideshowPaginator(props) {
    const [activePage, setActivePage] = useState(0)

    const decrementActivePage = () => setActivePage(prev => prev - 1)
    const incrementActivePage = () => setActivePage(prev => prev + 1)

    return (
        <View>
            <View style={styles.container}>
                {activePage ? 
                    <Pressable onPress={decrementActivePage}>
                        <Icon name='left' type='antdesign' color='#9D9D9D' size={17} />
                    </Pressable> 
                    : <View style={{width: 17}} />
                }
                {props.pages.length > 0 && <Text style={styles.titleLabel}>{props.pages[activePage].title}</Text>}
                {activePage < props.pages.length - 1 ? 
                    <Pressable onPress={incrementActivePage}>
                        <Icon name='right' type='antdesign' color='#9D9D9D' size={17} />
                    </Pressable> 
                    : <View style={{width: 17}} />
                }
            </View>
            <View style={styles.inputContainer}>
                {props.pages.length > 0 && props.pages[activePage].content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 17,
        backgroundColor: 'white',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 11,
        lineHeight: 13,
        color: 'black',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        /* Android Drop Shadow Styling */
        elevation: 10,
        
        /* iOS Drop Shadow Styling */
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
    },
    titleLabel: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'Avenir-Roman',
        fontSize: 12,
        lineHeight: 17,
        color: "#9D9D9D",
    },
    inputContainer: {
        marginTop: 5,
    },
})
