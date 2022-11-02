import './section.css'
const SectionHeading = (props)=>{
    return (
<> 
<div className="section">
    <div className="container">
    <div className="main-heading">
        <h2>{props.names}</h2>
        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</p>
    </div>
    </div>
</div>

</>
    )
}
export default SectionHeading