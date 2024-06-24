import Threed from "./Threed";

export default function Gallery(){
    return (
      <section>
      <div className="section-title text-center">
        <h2 className="learn" style={{ marginBottom: 20, marginTop: 50 }}>
          Our{" "}
          <strong className="theme-gradient" id="practical">
            Services
          </strong>
        </h2>
        <iframe
          src="https://s3.ap-south-1.amazonaws.com/assets.edodwaja.com/3d-gallery.html"
          frameBorder={0}
          scrolling="no"
          className="bus-resource"
          style={{ border: 50 }}
        />
      </div>
    </section>
    
      

    )
}