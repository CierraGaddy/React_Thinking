# Thinking in React - Product Filter App  

## How State and Props Work  

This app is built with React and helps filter a list of products based on what you type and whether they are in stock.  

State is like a memory that React keeps track of. In this app, the FilterableProductTable component has two pieces of state:  
- filterText, which remembers what the user types in the search box  
- inStockOnly, which remembers if the "Only show products in stock" checkbox is checked  

When you type in the search bar or check the box, these values change, and the product list updates.  

Props are how we share information between components. The state is in FilterableProductTable, but other components need to use it, so we pass it down as props.  
- SearchBar gets filterText and inStockOnly as props, along with functions to update them  
- ProductTable gets the filtered list of products and shows only the ones that match  
- ProductRow and ProductCategoryRow display each product  

Basically, state holds the changing data, and props pass that data to the right components. This way, when you search or filter, everything updates correctly!
