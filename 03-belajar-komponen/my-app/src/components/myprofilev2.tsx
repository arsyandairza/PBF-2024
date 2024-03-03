export default function MyProfileV2() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h1>Foto</h1>
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>Tentang</h1>
            <p>Aklilu Lemma adalah seorang ilmuwan terkemuka dari etiopia yang telah menemukan pengobatan alami untuk skistosomiasis.</p>
          </div>
        </div>
      </div>
    );
  }