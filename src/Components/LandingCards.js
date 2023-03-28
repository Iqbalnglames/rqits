import Material from "./material.png"
import Exam from "./exam.png"
import Article from "./article.png"
import { Link } from "react-router-dom"
const LandingCards = () => {
    return(
            
    <div className="flex justify-center">
    {/* first card */}
<div className="card card-compact w-96 bg-base-100 shadow-xl mx-4">
    <figure>
      <img
        src={Material}
        alt="Material"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Kumpulan Materi</h2>
      <p>Baca Materi Baru atau Murojaah Materi Lama materi bahasa inggris dan TIK</p>
      <div className="card-actions justify-end">
        <Link to={"materi"} className="btn btn-primary">Ke Halaman Materi</Link>
      </div>
    </div>
  </div>
  {/* second card */}
<div className="card card-compact w-96 bg-base-100 shadow-xl mx-4">
    <figure>
      <img
        src={Article}
        alt="Artikel"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Artikel</h2>
      <p>Artikel dari berbagai macam sumber yang aman untuk dibaca</p>
      <div className="card-actions justify-end">
        <Link to={"artikel"} className="btn btn-primary">Ke Halaman Artikel</Link>
      </div>
    </div>
  </div>
  {/* third card */}
<div className="card card-compact w-96 bg-base-100 shadow-xl mx-4">
    <figure>
      <img
        src={Exam}
        alt="Exam"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Exam</h2>
      <p>Login untuk melanjutkan pengerjaan tugas/ujian</p>
      <div className="card-actions justify-end">
        <button className="btn" disabled>Under Developing</button>
      </div>
    </div>
  </div>
    {/* end card */}
</div>
    )
}
export default LandingCards