export default function CategoryInput({ category, cat, catId, onChange }) {
  return (
    <li className="flex gap-1">
      <input
        onChange={onChange}
        className="hidden"
        type="radio"
        name="category"
        id={catId}
        value={cat}
      />
      <div className={`${cat === category ? "" : "invisible"}`}>✓</div>
      <label htmlFor={catId}>{cat}</label>
    </li>
  );
}
