export default function Featured() {
  return (
    <div className="feature-cont">
      <span className="sub-topic">Honorable Mentions</span>
      <h1 className="custom-header">Featured Projects</h1>
      <span className="short-desc">Some of the projects Business Name repaired.</span>
      <div className="f-info">
        <div className="proj-card">
          <div className="f-overlay">
            <span>Project Title 01</span>
            <span>Jan 15, 2020</span>
          </div>
        </div>

        <div className="proj-card">
          <div className="f-overlay">
            <span>Project Title 02</span>
            <span>Jan 15, 2020</span>
          </div>
        </div>

        <div className="proj-card">
          <div className="f-overlay">
            <span>Project Title 03</span>
            <span>Jan 15, 2020</span>
          </div>
        </div>

        <div className="proj-card">
          <div className="f-overlay">
            <span>Project Title 04</span>
            <span>Jan 15, 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}
