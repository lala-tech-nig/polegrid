import usePageTracking from "../../../usePageTracking"

const IntroSection = () => {
  usePageTracking();
  return (
    <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">Blog Details</h1>
            {/* <span className="color-text-a">News Single.</span> */}
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
               Blog Details
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