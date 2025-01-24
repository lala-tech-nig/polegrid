

const IntroSection = () => {
  return (
    <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">Our Amazing Properties Details</h1>
              {/* <span className="color-text-a">Chicago, IL 606543</span> */}
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="property-grid.html">Properties</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Properties Details
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