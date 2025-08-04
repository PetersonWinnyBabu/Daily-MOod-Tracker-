import './index.css'

import Header from '../Header'

const NotFoundRoute = () => (
  <div data-testid="notFoundContainerMain" className="notFound-Container-Main">
    <Header />
    <div data-testid="containerImage" className="container-image">
      <img
        data-testid="imageNotfound"
        className="image-notfound"
        src="https://res.cloudinary.com/dtkaykbuz/image/upload/v1753519003/Group_7504_b2lons.png"
        alt="not-found"
      />
    </div>
  </div>
)

export default NotFoundRoute
