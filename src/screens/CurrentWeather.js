import React from "react"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { View, Text, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({weatherData}) => {
    const {
       wrapper,
       container,
       tempStyles,
       feels,
       highLowWrapper,
       highLow,
       bodyWrapper,
       description,
       message
    } = styles
    
    const {main: {temp, feels_like,temp_max,temp_min},weather} =weatherData
    const weatherCondition = weather[0].main

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[wrapper,{backgroundColor: weatherType[weatherCondition]?.backgroundColor}]} forceInset={{ top: 'always' }}>
                <View style={container}>
                    <Feather 
                        name={weatherType[weatherCondition]?.icon} 
                        size={100} 
                        color="white" />
                    <Text style={tempStyles}>{`${temp}°`}</Text>
                    <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
                    <RowText 
                        messageOne={`High : ${temp_max}°  `} 
                        messageTwo={`Low : ${temp_min}°`} 
                        containerStyles={highLowWrapper} 
                        messageOneStyles={highLow} 
                        messageTwoStyles={highLow}
                    />
                </View>
                <RowText 
                    messageOne={weather[0]?.description} 
                    messageTwo={weatherType[weatherCondition]?.message} 
                    containerStyles={bodyWrapper} 
                    messageOneStyles={description} 
                    messageTwoStyles={message}
                />
            </SafeAreaView>
        </SafeAreaProvider>
       
        
    )
}

const styles = StyleSheet.create ({
    wrapper: {
        flex: 1, 
    },
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    tempStyles: {
        color: 'black',
        fontSize:40
    },
    feels: {
        fontSize:30,
        color:'black'

    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft:25,
        marginBottom:40
    },
    description: {
        fontSize:43
    },
    message: {
        fontSize:25
    }
})

export default CurrentWeather