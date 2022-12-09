export default function Greeting({ name, homeCity }) {
    console.log(name)
    return (
        <>
            <p>FR: Bonjour! {name}! from {homeCity}!</p>
            <p>ES: Hol</p>
        </>
    )
}