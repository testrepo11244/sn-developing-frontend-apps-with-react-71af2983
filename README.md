# e-plantShopping

**Project Name:** Paradise Nursery – Online Plant Shop  

**Repository:** `e-plantShopping`  

## Overview
This repository contains a full‑stack React application that showcases a fictional plant store called **Paradise Nursery**. The app demonstrates:

* A landing page with a welcoming banner and a **Get Started** button.  
* A product listing page that groups houseplants into three categories (Foliage, Succulents, and Air‑Purifying) with at least six unique items per category.  
* A Redux‑based shopping cart that supports adding items, disabling the “Add to Cart” button after selection, updating the cart icon count, and full cart management (quantity adjustments, removal, checkout placeholder).  

The project is built with **React**, **React‑Redux**, and **React Router** and follows the IBM Skills Network capstone requirements.

---  

## How to Run

```bash
# Clone the repository
git clone https://github.com/<your‑github‑username>/e-plantShopping.git
cd e-plantShopping

# Install dependencies
npm install

# Start the development server
npm start
```

The app will be available at `http://localhost:3000`.

---  

## Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Landing page with company name and **Get Started** button. |
| `src/components/ProductList.jsx` | Displays plant categories, product cards, and “Add to Cart” functionality. |
| `src/components/CartItem.jsx` | Shopping cart page with quantity controls, total calculations, and checkout placeholder. |
| `src/redux/cartSlice.jsx` | Redux slice that manages cart state. |
| `src/App.css` | Styles for the landing page background image. |
| `src/components/AboutUs.jsx` | Static page with company details. |

---  

## License
This project is provided for educational purposes and is licensed under the MIT License.