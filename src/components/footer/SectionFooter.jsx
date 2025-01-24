import { Link } from "react-router-dom"

const SectionFooter = () => {
  return (
    <section className="section-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">Radah</h3>
            </div>
            <div className="w-body-a">
              <p className="w-text-a color-text-a">
                Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                sed aute irure.
              </p>
            </div>
            <div className="w-footer-a">
              <ul className="list-unstyled">
                <li className="color-a">
                  <span className="color-text-a">Phone .</span> contact@example.com
                </li>
                <li className="color-a">
                  <span className="color-text-a">Email .</span> +54 356 945234
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">Quick Links</h3>
            </div>
            <div className="w-body-a">
              <div className="w-body-a">
                <ul className="list-unstyled">
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <Link to="/about">About</Link>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <Link to="/properties">Property</Link>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <Link to="/blog">Blog</Link>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">Services</h3>
            </div>
            <div className="w-body-a">
              <ul className="list-unstyled">
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <Link to="/services/architectural-design">Architecture Design</Link>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <Link to="/services/structural-design">Structural Design</Link>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <Link to="/CAD Training">CAD Training</Link>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <Link to="/services/project-supervision">Project Supervision</Link>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <Link to="/services/engineering-bils">Engineering Bills</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionFooter