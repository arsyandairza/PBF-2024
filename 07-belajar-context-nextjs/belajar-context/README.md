# 07 | Belajar Context NextJS

# Praktikum 1:  Membuat Variasi Ukuran Teks Heading dengan Context

#### Langkah 1: Buat project baru dan repo baru di GitHub
> Silakan buat project baru seperti berikut dan repo baru dengan nama `#07-belajar-context-nextjs`

![Output](docs/image/L1P1.png)

#### Langkah 2:  Buat struktur folder dengan prinsip `atomic design`

#### Langkah 3: Buat komponen atom baru
>Buat file baru di `src/components/atoms/heading.tsx` berisi kode sebagai berikut.

```tsx
 export default function Heading({ level, children }: { level: number; children: any }) {
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}
```

> Kemudian buat file baru di `src\components\atoms\section.tsx` berisi kode berikut.

```tsx
export default function Section({ children }: { children: any }) {
    return (
        <section className="section">
            {children}
        </section>
    );
}
```

>Lalu bagian MainPage buat file baru di `src\components\templates\main_page.tsx` berisi kode sebagai berikut.

``` tsx
import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading level={1}>Title</Heading>
            <Section>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Section>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Section>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}
```

#### Langkah 4:  Ubah isi kode `page.tsx` dan `run`
> Ubahlah kode di`src\app\page.tsx` seperti berikut. Lalu `run` dan lihat hasilnya di browser Anda.

### Soal 1: 
> Capture hasilnya dan buatlah laporan di `README.md.` Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

> Jangan lupa push dengan pesan commit: `"W07: Jawaban soal 1".`

![Output](docs/image/P1L4.png)

> Pada kode diatas komponen templates `main_page` memanggil komponen heading dengan level heading yang berbeda beda, section pada komponen atoms digunakan untuk membungkus komponen heading

#### Langkah 5.1: Buat Context

> Pertama, Anda perlu membuat context. Anda harus mengekspornya dari sebuah file sehingga komponen Anda dapat menggunakannya. Buatlah file baru di `src\utilities\context\mycontext.tsx` yang berisi kode sebagai berikut:
``` tsx
import { createContext } from "react";

export const LevelContext = createContext(1);
```

#### Langkah 5.2: Gunakan context

> Ubahlah isi kode komponen Heading dengan Impor useContext Hook dari `React` dan `context Anda`:

#### Langkah 5.3: Sediakan context

### Soal 2: 
> Capture hasilnya dan buatlah laporan di `README.md`. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

>Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!

>Jangan lupa push dengan pesan commit: `W07: Jawaban soal 2".`

![Output](docs/image/P1L5.png)

>Error terjadi karena react membutuhkan `"use client"`

![Output](docs/image/P1L5.3.png)

> Level context yang pada sebelumnya harus di tempatkan di `heading 1 per 1,` sekarang dapat ditempatkan pada Section menggunakan LevelContext sehingga Heading membaca` LevelContext`dari `Section parent`

#### Langkah 6: Menggunakan dan menyediakan context dari komponen yang sama

### Soal 3:

>Capture hasilnya dan buatlah laporan di`README.md.` Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

> Jangan lupa push dengan pesan commit: `"W07: Jawaban soal 3".`

> Untuk tampilan sama seperti sebelumnya, tetapi dalam penerapan nya menjadi lebih simple karena LevelContext otomatis mendeteksi level dari parent nya, sehingga jika ada Section di dalam Section, otomatis Level parent bertambah 1 dari level sebelumnya