import { Link } from "react-router-dom";
import PDF from '../Files/materi1.pdf'
import Inkscape from '../Files/inkscape.exe'

const MainMateri = () => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body mx-96 ">
          <h2 className="card-title">Materi 1</h2>
          <h1>INSTALASI SOFTWARE EXTERNAL</h1>
            <p>silahkan buka materinya dengan membuka link di bawah</p>
          <Link className="btn btn-primary w-28" target="_blank" to={PDF}>Buka Materi</Link>
            <p>Untuk download aplikasi, silahkan tekan tombol di bawah</p>
          <Link className="btn btn-primary w-28" target="_blank" to={Inkscape}>Download APP</Link>
        </div>
      </div>
    </div>
  );
};

export default MainMateri;
