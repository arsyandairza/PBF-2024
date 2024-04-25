import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts() {
    return(
        <Section2 isFancy= {true}>
            <Heading>Posting Terbaru</Heading>
            <Post title="Arsyanda Irza Rabbani Yuardhino" body="2141720245"/>
            <Post title="Cita Rasa Lisbon" body="...those pasteis de nata!"/>
            <Post title="Buenos Aires dalam irama tango" body="Saya Menyukainya!"/>
        </Section2>
    )
}