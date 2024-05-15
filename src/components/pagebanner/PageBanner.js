export default function PageBanner({ pageTitle, bannerBg }) {
  const styles = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }
  return (
    <section className="page-banner">
      <div className="padding-lg" style={styles}>
        <div className="container-fluid">
          <h1 className="text-light">{pageTitle}</h1>
        </div>
      </div>
    </section>
  )
}
