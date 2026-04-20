import Image from "next/image";

interface DataType {
    id?: number;
    icon?: string;
    subTitle?: string;
    title?: string;
    text?: string;
    number?: string;
}

const SingleServiceV6 = ({ service }: { service: DataType }) => {
    const { icon, subTitle, title, text, number } = service

    return (
        <>
            <li className="item-move-top-item" style={{ backgroundImage: 'url(/assets/img/shape/5.png)' }}>
                <div className="icon">
                    <Image
                      src={`/assets/img/icon/${icon}`}
                      alt="Icon"
                      width={200}
                      height={200}
                    />
                </div>
                <div className="details">
                    <div className="item-title">
                        <span>{subTitle}</span>
                        <h3>{title}</h3>
                    </div>
                    <p>{text}</p>
                    <span>{number}</span>
                </div>
            </li>
        </>
    );
};

export default SingleServiceV6;
