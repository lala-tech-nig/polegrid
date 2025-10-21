import usePageTracking from "../../usePageTracking"

const IntroSection = () => {
  usePageTracking();
  return (
    <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single"><b>Contact Us</b></h1>
            {/* <span className="color-text-a">Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa.</span> */}
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
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