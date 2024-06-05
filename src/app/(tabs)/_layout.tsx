import { Tabs } from "expo-router"
import OrderIconSvg from '../../assets/icons/Icone pedido.svg'
import HomeIconSvg from '../../assets/icons/home.svg'
import BookIconSvg from '../../assets/icons/book.svg'
import AccountIconSvg from '../../assets/icons/Icone Conta.svg'

const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen name="home" options={{
                    headerShown: false, title: 'Inicio',
                    tabBarActiveTintColor: "#0A5F36",
                    tabBarActiveBackgroundColor: "#e9e9e9",
                    tabBarIcon: () => <HomeIconSvg width={32} height={32} />
                }} />
                <Tabs.Screen name="order" options={
                    {
                        title: 'Pedido',
                        headerShown: false,
                        tabBarActiveTintColor: "#0A5F36",
                        tabBarActiveBackgroundColor: "#e9e9e9",
                        tabBarIcon: () => <OrderIconSvg width={32} height={32} />
                    }
                } />
                <Tabs.Screen name="history" options={
                    {
                        title: 'Historico',
                        headerShown: false,
                        tabBarActiveTintColor: "#0A5F36",
                        tabBarActiveBackgroundColor: "#e9e9e9",
                        tabBarIcon: () => <BookIconSvg width={32} height={32} />
                    }
                } />
                <Tabs.Screen name="account" options={
                    {
                        title: 'Conta',
                        headerShown: false,
                        tabBarActiveTintColor: "#0A5F36",
                        tabBarActiveBackgroundColor: "#e9e9e9",
                        tabBarIcon: () => <AccountIconSvg width={32} height={32} />
                    }
                } />


            </Tabs>
        </>
    )
}

export default TabsLayout