import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonTextProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonIconProps = TouchableOpacityProps & {
    children: ReactNode
}
function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
            activeOpacity={0.7}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}

function ButtonText({ children }: ButtonProps) {
    return (<Text className="text-black font-heading text-base mx-2">{children}</Text>)
}

function ButtonIcon({ children }: ButtonProps) {
    return (children)
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }