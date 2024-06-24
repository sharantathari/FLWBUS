export default function Preloader(){
    return (
      <div
      id="preloader"
      style={{
        position: "fixed",
        zIndex: 10000,
        background: "#000000",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        style={{ opacity: "0.9", width: 200, height: 200 }}
        src="https://cdn.global.noobsverse.com/cc.flowbus/assets/images/edodwaja-loading.gif"
        alt="loading"
      />
    </div>
    
    
    
    )
}
