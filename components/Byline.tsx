const Byline = ({author, date, readingTime}) => {
    return (
        <div className="text-sm btm-gray-400 mb-8">
            <div>By {author}  •  {readingTime}</div>
            <div>{date}</div>
        </div>
    )
}

export default Byline
