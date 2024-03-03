import React from "react";

function Card({ children }: any) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/OKS67lhm.jpg"
      alt="Aklilu Lemma"
      width={70}
      height={70}
    />
  );
}

const description = 'Aklilu Lemma adalah seorang ilmuwan terkemuka dari Etiopia yang telah menemukan pengobatan alami untuk skistosomiasis.';

export default function MyProfileV2() {
  return (
    <div>
      <Card>
        <div className="card-content">
          <h1>Foto</h1>
          <Avatar />
        </div>
      </Card>
      <Card>
        <div className="card-content">
          <h1>Tentang</h1>
          <p>{description}</p>
        </div>
      </Card>
    </div>
  );
}
