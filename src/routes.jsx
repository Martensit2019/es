import AdminLayout from "./layouts/AdminLayout"
import MainLayout from "./layouts/MainLayout"
import AdminIndex from "./pages/admin"
import Cart from "./pages/cart"
import Catalog from "./pages/catalog"
import Main from "./pages/main"
import Product from "./pages/product"
import StatusOrder from "./pages/statusorder"


const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Main />
      </MainLayout>
    ),
  },
  {
    path: 'catalog',
    element: (
      <MainLayout>
        <Catalog />
      </MainLayout>
    )
  },
  {
    path: 'catalog/:slug',
    element: (
      <MainLayout>
        <Cart />
      </MainLayout>
    )
  },
  {
    path: 'product/:slug',
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
  },
  {
    path: 'statusorder',
    element: (
      <MainLayout>
        <StatusOrder/>
      </MainLayout>
    ),
  },
  {
    path: 'cart',
    element: (
      <MainLayout>
        <Cart/>
      </MainLayout>
    ),
  },
  // {
  //   path: 'profile',
  //   element: (
  //     <MainLayout>
  //       <Profile/>
  //     </MainLayout>
  //   ),
  // },

  {
    path: 'admin',
    element: (
      <AdminLayout>
        <AdminIndex />
      </AdminLayout>
    ),
  },

]





export default routes