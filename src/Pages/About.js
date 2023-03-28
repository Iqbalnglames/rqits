import AboutImg from "./about.svg"
const About = () => {
    return(        
        <div className="h-screen flex justify-center">
            <div className="text-center mt-56">                
            <img src={AboutImg} alt="about" width="400px"/>
            <h1 className="font-bold">Backend and frontend Developed By TCBProject</h1>
            </div>
    </div>
        )
}
export default About