import { useFilters } from '../assets/hooks/useFilters'
import './Footer.css'
export function Footer() {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {/* <h4>
        Prueba técnica de React ⚛️ － <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
      {JSON.stringify(filters, null, 2)}
    </footer>
  )
}
