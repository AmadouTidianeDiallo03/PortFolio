export default function ProjectFilters({ activeCategory, setCategory, categories }) {
    return (
        <div className="filters">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setCategory(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
