import { FC, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import OpenedIconEye from '../assets/icons/eye.png'
import CloseIconEye from '../assets/icons/eye-hide.png'
import { SvgProps } from "react-native-svg";


interface FormFieldProps {
    title: string
    value: any
    placeholder?: string
    handleChangeText: (e: any) => void
    otherStyles?: string
    Icon: FC<SvgProps>
    iconWidth: number
    iconHeigth: number
}


const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    Icon,
    iconHeigth,
    iconWidth,

    ...props
}: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2  ${otherStyles}`}>
            <Text className=" text-gray-500 font-bold text-lg underline">{title}</Text>
            <View className="w-full h-12 px-4 bg-white rounded-2xl border-2 border-gray-400 focus:border-secondary flex flex-row items-center shadow-figma-shadow">
                <View className="mr-4">
                    <Icon width={iconWidth} height={iconHeigth} />
                </View>

                <TextInput
                    className="flex-1 text-zinc-900 font-semibold "
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Senha" && !showPassword}
                    {...props}
                />

                {title === "Senha" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? OpenedIconEye : CloseIconEye}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;