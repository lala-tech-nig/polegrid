import { Link } from "react-router-dom"


const IntroSection = () => {
    return (
           <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Architectural Design</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Architectural Design
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default IntroSection