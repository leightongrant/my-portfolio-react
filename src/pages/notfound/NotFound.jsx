import { TbError404 } from 'react-icons/tb'
import { IconContext } from 'react-icons'
export default function NotFound() {
  return (
    <section
      style={{ minHeight: 'calc(100vh - 62px' }}
      className="d-flex align-items-center justify-content-center">
      <div className="container d-grid">
        <h4 className="text-center">Oops! page not found</h4>
        <IconContext.Provider
          value={{
            color: '#292b3a',
            className: 'global-class-name text-center',
            size: '10em',
          }}>
          <TbError404 className="mt-0 mx-auto" />
        </IconContext.Provider>
        <p className="fs-5 text-capitalize text-center">
          I'm sorry but the page you requested was not found
        </p>
      </div>
    </section>
  )
}
