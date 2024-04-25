import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactsPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Contacts</Heading>
            <Post title="Arsyanda Irza Rabbani Yuardhino" body="2141720245" />
            <Post title="Email" body="arsyandairza123@gmail.com" />
            <Post title="Whatsapp" body="082220000346" />
        </Section2>
    )
}