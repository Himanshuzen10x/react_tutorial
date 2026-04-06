
function Wrapper({children,color="green"}){
    return(
        <div style={{color:color, border:"5px solid green", width:"300px", textAlign:"center" }}>
            {children}
        </div>
    )
}

export default Wrapper;