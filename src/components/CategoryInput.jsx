export default function CategoryInput({ category, cat, catId, onChange }) {
  return (
    <li
      onClick={(e) => e.stopPropagation()}
      className="flex gap-1 hover:bg-gray-300"
    >
      <input
        className="hidden"
        type="radio"
        name="category"
        onChange={onChange}
        id={catId}
        value={cat}
      />
      <div className={`${cat === category ? "" : "invisible"}`}>✓</div>
      <label htmlFor={catId}>{cat}</label>
    </li>
  );
}
