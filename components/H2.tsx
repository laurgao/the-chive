const H2 = ({children, className=""} : {children: string, className?: string}) => {
    /* <p className="text-sm btm-text-gray-400">{children}</p> */
    return (
        <p className={`text-2xl font-semibold btm-gray-700 ${className}`}>{children}</p>
    )
}

export default H2