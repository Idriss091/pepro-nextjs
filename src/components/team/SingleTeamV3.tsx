import Link from "next/link";
import Image from "next/image";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
}

const SingleTeamV3 = ({ team }: { team: DataType }) => {
    const { id, thumb, name, designation } = team

    return (
        <>
            <div className="team-style-three-item">
                <div className="thumb">
                    <Link href={`/team-details/${id}`}>
                        <Image
                          src={`/assets/img/team/${thumb}`}
                          alt="Illustration abstraite"
                          width={650}
                          height={600}
                        />
                    </Link>
                </div>
                <div className="info">
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                    <span>{designation}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV3;
