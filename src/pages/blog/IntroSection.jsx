

const IntroSection = () => {
  return (
    <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">Our updates</h1>
              {/* <span className="color-text-a">Grid News</span> */}
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog
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