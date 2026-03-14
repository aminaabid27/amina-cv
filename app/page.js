import PrintButton from "../components/PrintButton";

export default function Page() {
  return (
    <>
      <header className="py-3 d-print-none">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div>
              <div className="fw-semibold">Amina Abid</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <PrintButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container pb-4 pb-print-0">
        <article className="cv-sheet shadow-sm bg-white rounded-4 overflow-hidden">
          <div className="p-4 p-md-5">
            <div className="row gy-4">
              <div className="col-12">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                  <div>
                    <h1 className="h2 mb-1">Amina Abid</h1>
                    <div className="text-secondary">
                      Master’s student in Data Science
                    </div>
                  </div>
                  <div className="text-start text-md-end">
                    <div className="d-flex flex-column gap-1">
                      <div>
                        <i className="bi bi-geo-alt me-2 text-secondary" />
                        Rawalpindi, Punjab, Pakistan
                      </div>
                      <div>
                        <i className="bi bi-telephone me-2 text-secondary" />
                        <a className="link-plain" href="tel:03345612474">
                          03345612474
                        </a>
                      </div>
                      <div>
                        <i className="bi bi-envelope me-2 text-secondary" />
                        <a
                          className="link-plain"
                          href="mailto:amina.abid27@yahoo.com"
                        >
                          amina.abid27@yahoo.com
                        </a>
                      </div>
                      <div className="text-truncate">
                        <i className="bi bi-linkedin me-2 text-secondary" />
                        <a
                          className="link-plain"
                          href="https://www.linkedin.com/in/amina-abid-099673282/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          linkedin.com/in/amina-abid-099673282
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider" />

                <section className="section-card" aria-label="Summary">
                  <h2 className="section-title">Professional Summary</h2>
                  <p className="mb-0">
                    Master’s student in{" "}
                    <span className="fw-semibold">Data Science</span> with hands-on
                    experience in{" "}
                    <span className="fw-semibold">
                      data analytics, machine learning, computer vision, and web
                      development
                    </span>
                    . Skilled in{" "}
                    <span className="fw-semibold">Python, SQL, Power BI</span>, and
                    data visualization. Currently working as a software developer
                    intern with expertise in developing responsive websites,
                    creating interactive Power BI dashboards, and applying AI-based
                    solutions. Strong background in database optimization, data
                    analysis, and reporting.
                  </p>
                </section>

                <section className="section-card mt-4 d-lg-none" aria-label="Core Skills">
                  <h2 className="section-title">Core Skills</h2>

                  <div className="chips">
                    <span className="chip">Python</span>
                    <span className="chip">SQL</span>
                    <span className="chip">Power BI</span>
                    <span className="chip">Data Visualization</span>
                    <span className="chip">Data Cleaning</span>
                    <span className="chip">Machine Learning</span>
                    <span className="chip">Computer Vision (YOLOv8)</span>
                    <span className="chip">UI/UX</span>
                    <span className="chip">Next.js</span>
                    <span className="chip">Node.js</span>
                    <span className="chip">MySQL</span>
                    <span className="chip">PostgreSQL</span>
                    <span className="chip">Reporting</span>
                    <span className="chip">Team Collaboration</span>
                  </div>
                </section>
              </div>

              <div className="col-12 col-lg-8">
                <section className="section-card" aria-label="Work Experience">
                  <h2 className="section-title">Work Experience</h2>

                  <div className="item">
                    <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                      <div>
                        <div className="item-title">
                          Software Developer / Data Analyst Intern (ML/AI Domain)
                        </div>
                        <div className="item-subtitle">
                          InoTech Solutions — Rawalpindi, Punjab, Pakistan
                        </div>
                      </div>
                      <div className="item-meta">Sep 2025 – Present</div>
                    </div>
                    <ul className="mt-2">
                      <li>
                        Developed and deployed a responsive website for the Armed
                        Forces Institute of Urology (AFIU), enhancing online
                        visibility and user engagement.
                      </li>
                      <li>
                        Revamped InoTech website with innovative front-end UI/UX
                        design, backend integration, and enhanced functionality.
                      </li>
                      <li>
                        Created interactive Power BI dashboards for improved
                        contract management system analysis.
                      </li>
                      <li>
                        Engineered a vehicle detection system using YOLOv8 for
                        precise image object detection.
                      </li>
                      <li>
                        SQL optimization for faster and more reliable data
                        retrieval.
                      </li>
                    </ul>
                  </div>

                  <div className="item">
                    <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                      <div>
                        <div className="item-title">Data Science Internship Trainee</div>
                        <div className="item-subtitle">
                          Center of Excellence in AI (CoE-AI), Bahria University —
                          Islamabad
                        </div>
                      </div>
                      <div className="item-meta">Jul 2023 – Sep 2023</div>
                    </div>
                    <ul className="mt-2">
                      <li>
                        Transformed raw datasets into structured and analysis-ready
                        formats.
                      </li>
                      <li>
                        Ensured data quality and consistency for AI and ML
                        workflows.
                      </li>
                      <li>
                        Supported exploratory data analysis and dataset preparation
                        for model development.
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="section-card mt-4" aria-label="Education">
                  <h2 className="section-title">Education</h2>

                  <div className="item">
                    <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                      <div>
                        <div className="item-title">Bahria University, Islamabad</div>
                        <div className="item-subtitle">Master of Science — Data Science</div>
                      </div>
                      <div className="item-meta">Feb 2024 – Jan 2026</div>
                    </div>
                  </div>

                  <div className="item mb-0">
                    <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                      <div>
                        <div className="item-title">Bahria University, Islamabad</div>
                        <div className="item-subtitle">Bachelor of Science — Computer Science</div>
                      </div>
                      <div className="item-meta">Jan 2020 – Jan 2024</div>
                    </div>

                    <div className="mt-3">
                      <div className="item-title">Final Year Project</div>
                      <div className="item-subtitle">Virtual Health Assistant</div>
                      <ul className="mt-2">
                        <li>
                          Built a web-based Virtual Health Assistant that uses AI and
                          machine learning to support disease prediction, diagnosis,
                          and clinical decision-making.
                        </li>
                        <li>
                          Designed secure electronic patient record management with
                          symptom analysis, medication recommendations, and role-based
                          user authentication.
                        </li>
                        <li>
                          Developed using Next.js, Flask, PostgreSQL, and Firebase,
                          focusing on usability, data security, and scalable workflows.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>

              <div className="col-12 col-lg-4">
                <aside>
                  <section className="section-card section-card-muted d-none d-lg-block" aria-label="Core Skills">
                    <h2 className="section-title">Core Skills</h2>

                    <div className="chips">
                      <span className="chip">Python</span>
                      <span className="chip">SQL</span>
                      <span className="chip">Power BI</span>
                      <span className="chip">Data Visualization</span>
                      <span className="chip">Data Cleaning</span>
                      <span className="chip">Machine Learning</span>
                      <span className="chip">Computer Vision (YOLOv8)</span>
                      <span className="chip">UI/UX</span>
                      <span className="chip">Next.js</span>
                      <span className="chip">Node.js</span>
                      <span className="chip">MySQL</span>
                      <span className="chip">PostgreSQL</span>
                      <span className="chip">Reporting</span>
                      <span className="chip">Team Collaboration</span>
                    </div>
                  </section>

                  <section className="section-card section-card-muted mt-4" aria-label="Tools">
                    <h2 className="section-title">Tools</h2>
                    <ul className="simple-list">
                      <li>Power BI</li>
                      <li>Microsoft Excel</li>
                      <li>Jupyter Notebook</li>
                      <li>Windsurf</li>
                    </ul>
                  </section>

                  <section className="section-card section-card-muted mt-4" aria-label="Certifications">
                    <h2 className="section-title">Certifications</h2>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex justify-content-between gap-3">
                        <div>
                          <div className="item-title">SQL (Basic)</div>
                          <div className="item-subtitle">HackerRank</div>
                        </div>
                        <div className="item-meta">Jun 2025</div>
                      </div>
                      <div className="d-flex justify-content-between gap-3">
                        <div>
                          <div className="item-title">SQL (Intermediate)</div>
                          <div className="item-subtitle">HackerRank</div>
                        </div>
                        <div className="item-meta">Jul 2025</div>
                      </div>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </article>

      </main>
    </>
  );
}
