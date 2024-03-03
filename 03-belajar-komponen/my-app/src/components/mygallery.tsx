import { getImageUrl } from '@/utils/utils';

interface Person {
    name: string;
    imageId: string;
}
interface Penghargaan{
    jumlah: string;
    namaPenghargaan: string;
}

function MyProfile({ person, size, profesi, penghargaan, menemukan }: {person: Person; size:number; profesi: string; penghargaan: Penghargaan; menemukan: string}) {
    return (
        <section className="profile">
            <h2>{person.name}</h2>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
            <ul>
                <li>
                    <b>Profesi: </b>
                    {profesi}
                </li>
                <li>
                    <b>Penghargaan: {penghargaan.jumlah} </b>
                    ({penghargaan.namaPenghargaan})
                </li>
                <li>
                    <b>Telah Menemukan: </b>
                    {menemukan}
                </li>
            </ul>
        </section>
    );
}

export default function MyGallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <MyProfile person={{ name: 'Maria Sklodowska-Curie', imageId: 'szV5sdG' }} size={70} profesi='Fisikawan dan kimiawan' penghargaan={{ jumlah: '4', namaPenghargaan: 'Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci' }} menemukan='polonium (unsur kimia)'/>
            <br />
            <MyProfile person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2Ahli Geokimia' }} size={70} profesi='Ahli Geokimia' penghargaan={{ jumlah: '2', namaPenghargaan: 'Penghargaan Miyake Geokimia, Penghargaan Tanaka' }} menemukan='sebuah metode untuk mengukur karbon dioksida pada air laut' />
        </div>
    );
}