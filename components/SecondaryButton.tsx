import Button from "./Button";

const SecondaryButton = ({onClick, children, href, isLoading, isDisabled} : {
    onClick?: any,
    children: any, // string or JSX tags
    href?: string,
    isLoading?: boolean,
    isDisabled?: boolean,
}) => {
    return (
        <div className = "border hover:border-transparent border-white opacity-20 hover:bg-white hover:text-black">
            <Button 
                onClick={onClick}
                href={href} 
                isLoading={isLoading} 
                isDisabled={isDisabled}
            >{children}</Button>
        </div>
    )
}

export default SecondaryButton