
type Props = {
    name: string
    image: string
    description: string
}

export default function ProfileCard({ name, image, description }: Props) {
    return (
        <div className="profileCard">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}
