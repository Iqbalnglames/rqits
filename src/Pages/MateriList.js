import { Link } from "react-router-dom";
import Article from "./article.png";
const Materi = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Materi Pembelajaran</h1>
      <div className="p-10">        
      <div className="card card-side bg-base-100 shadow-xl mr-72 slide-in-fwd-center shadow-black">
        <figure>
          <img src={Article} width="20px" alt="Gambar" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Materi 1</h2>
          <p>Instalasi Software External</p>
          <div className="card-actions justify-end">
            <Link to={"/materi1"} className="btn btn-primary">
              Baca Materi ini
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Materi;
