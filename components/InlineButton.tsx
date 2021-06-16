import Link from 'next/link'

const InlineButton = ({onClick, children, href, isLoading, isDisabled, className} : {
    onClick?: any,
    children: any, // String or reactnode
    href?: string,
    isLoading?: boolean,
    isDisabled?: boolean,
    className?: string,
}) => {
    return (
        <button
            disabled={isLoading || isDisabled}
            className={`btm-gray-500 rounded px-1 py-0.5 text-sm transition font-bold hover:bg-black hover:bg-opacity-10 focus:outline-none disabled:cursor-not-allowed ${className && className}`}
            onClick={onClick}
        >
            {href ? (
                <Link href={href}>
                    <a className="flex flex-row gap-2">{children}</a>
                </Link>
            ) : (
                    <div className="flex items-center">
                        {children}
                    </div>
                )}
        </button>
    )
}

export default InlineButton