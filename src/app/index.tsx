import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSvg from '../assets/design/logo.svg'
import { Button, Center } from "native-base";
import FormField from "../components/FormField";
import PasswordIconSvg from '../assets/icons/Icone Senha.svg'
import ProfileIconSvg from '../assets/icons/Icone Usuario.svg'
import { Link, router } from "expo-router";

const handleSign = () => {
  router.replace("/home")
}

export default function Index() {
  return (
    <SafeAreaView className="h-screen w-screen  bg-figma-green">
      <View className="flex flex-col w-full h-full items-center justify-center">

        <LogoSvg />

        <Center className="mt-12">
          <Text className="text-xl  font-bold text-figma-letter font-lblack ">Bem vindo(a)</Text>
          <Text className="text-md mt-1 font-semibold text-figma-letter font-lbold">Faça login para continuar</Text>
        </Center>

        <Center className="w-10/12 mt-4">
          <FormField iconHeigth={22} iconWidth={24} Icon={ProfileIconSvg} placeholder="seuemail@eteste.com" title="Usuário" value={null} handleChangeText={() => null} />
          <FormField iconHeigth={22} iconWidth={24} Icon={PasswordIconSvg} placeholder="*******" title="Senha" value={null} handleChangeText={() => null} />
        </Center>

        <Button onPress={() => handleSign()} className="bg-figma-letter text-white font-semibold mt-12 w-10/12">Entrar</Button>

        <Link href="/signup" className="mt-4 mb-28">
          <Text className="text-sm font-lregular text-figma-letter ">Não possui conta? <Text className="text-base font-lbold">registre-se aqui!</Text></Text>
        </Link>
        <Text className="text-mb font-lregular font-normal text-figma-letter m-2 break-words justify-items-end align-text-bottom">Ao realizar login você concorda com os termos e condições da LGPD</Text>

      </View>
    </SafeAreaView>
  );
}
