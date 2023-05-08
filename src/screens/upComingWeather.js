import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet , FlatList,StatusBar, ImageBackground} from "react-native"
import ListItem from '../components/ListItem';


const UpcomingWeather = ({weatherData}) => {
    const { container,image} =styles
    const renderItem = ({item}) => (
        <ListItem condition = {item.weather[0].main} dt_txt ={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}  />
    )
    return (
        <SafeAreaProvider>
            <SafeAreaView style={container } forceInset={{ top: 'always' }}>
                <ImageBackground 
                    source={require('../../assets/upcoming-background.jpg')} 
                    style={image}
                >
                    <FlatList  
                        data= {weatherData}
                        renderItem ={renderItem} 
                        keyExtractor={(item) =>item.dt_txt}
                    />
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop : StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    
    image: {
      flex:1
    }
    
})

export default UpcomingWeather


  