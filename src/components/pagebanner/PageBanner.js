export default function PageBanner({ pageTitle, bannerBg }) {
  const bgStyles = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }
  const overlay = {
    backgroundColor: 'rgba(0,0,0,0.7)',
  }
  return (
    <section className="page-banner">
      <div className="" style={bgStyles}>
        <div className="padding-lg" style={overlay}>
          <h1 className="text-center text-light">{pageTitle}</h1>
        </div>
      </div>
    </section>
  )
}
