'use client';

interface HeadingProps{
    title: string;
    subTitle?: string;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subTitle
}) => {
    return(
        <div className="mb-4">
            <div className="text-3xl font-semibold">
                {title}
            </div>
            <div>
                {subTitle}
            </div>
        </div>
    )
}

export default Heading;