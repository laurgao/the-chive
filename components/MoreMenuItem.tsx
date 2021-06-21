import Link from "next/link";
import { ReactNode } from "react";

const MoreMenuItem = ({text, onClick, href, icon, className=""} : {text: string, href?: string, icon?: ReactNode, onClick?: () => any, className?: string,}) => {
    return href ? (
        <Link href={href}>
            <a className={`flex items-center p-4 hover:bg-gray-100 whitespace-nowrap w-full text-left ${className}`} >
                {icon ? (
                    <>
                        {icon} <span className="ml-2">{text}</span>
                    </>
                ) : `${text}`}
            </a>
        </Link>
    ) : (
        
        <button className={`flex items-center p-4 hover:bg-gray-100 whitespace-nowrap w-full text-left ${className}`} onClick={onClick}>
            {icon ? (
                <>
                    {icon} <span className="ml-2">{text}</span>
                </>
            ) : `${text}`}
        </button>
    )
}

export default MoreMenuItem