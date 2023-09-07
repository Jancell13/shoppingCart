import { products as initialProdructs } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './assets/hooks/useFilters'
import { Cart } from './components/Cart'
import { CarProvider } from './context/cart'

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProdructs)

  return (
    <CarProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CarProvider>
  )
}

export default App
