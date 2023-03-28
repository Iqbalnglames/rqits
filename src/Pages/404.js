import Konstruksi from "./konstruksi.svg"

const NotFound = () => {
    return(
        <div className="flex justify-center text-center mt-32 pb-80 h-screen">
            <div>                
            <img src={Konstruksi} alt="Belom Jadi" width="500px"/>
            <h1 className="font-bold text-2xl mt-4">Halaman Sedang dalam Tahap Developing....</h1>
            </div>
        </div>
    )
}
export default NotFound