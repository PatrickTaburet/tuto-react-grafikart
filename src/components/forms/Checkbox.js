/**
 * Checkbox avec un libellé sur la droite
 * @param {boolean} checked 
 * @param {(v: boolean) => void} onChange 
 * @param {string} label 
 * @param {string} id 
 */
function Checkbox({checked, onChange, label, id}) {
  return (
    <div className="form-check">
        <input
          id={id}
          className="form-check-input" 
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
  )
}

export default Checkbox
