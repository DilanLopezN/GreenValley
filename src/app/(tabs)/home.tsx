import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView className='h-screen w-screen  bg-figma-green'>
            <Text className='mt-4 text-xl font-lblack w-full text-center'>Menu principal</Text>
            <View className='h-[468] w-full mr-5 ml-5  mt-3flex   gap-4 items-center'>

                <View className='bg-white rounded-md w-32 h-24 shadow-2xl items-center justify-center flex flex-col'>
                    <Text className='font-lregular text-lg  text-figma-letter '>Pedidos concluidos</Text>
                    <Text className='font-lbold font-bold text-figma-letter text-2xl'>2</Text>
                </View>

                <View className='bg-white rounded-md w-32 h-24 shadow-2xl items-center justify-center flex flex-col'>
                    <Text className='font-lregular text-lg  text-figma-letter '>Pedidos abertos</Text>
                    <Text className='font-lbold font-bold text-figma-letter text-2xl'>0</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Home

