import { useState } from "react";
import Header from "../Header";

export default function HeaderExample() {
  const [cartCount, setCartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <Header
      cartItemCount={cartCount}
      onCartClick={() => console.log("Cart clicked")}
      searchQuery={searchQuery}
      onSearchChange={(query) => {
        setSearchQuery(query);
        console.log("Search:", query);
      }}
      selectedCategory={selectedCategory}
      onCategoryChange={(cat) => {
        setSelectedCategory(cat);
        console.log("Category changed:", cat);
      }}
    />
  );
}
