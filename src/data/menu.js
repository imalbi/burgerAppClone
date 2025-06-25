const menus = [
    { id: 1, name: "Menu Pollo Small", description: "Pollo burger with fries and drink", price: 5.99 },
    { id: 2, name: "Menu Pollo Large", description: "Pollo burger with large fries and drink", price: 7.49 },
    { id: 3, name: "Menu Beef Small", description: "Beef burger with fries and drink", price: 6.49 },
    { id: 4, name: "Menu Veggie", description: "Veggie burger with fries and drink", price: 5.49 },
    { id: 5, name: "Menu Fish", description: "Fish burger with fries and drink", price: 6.99 },
    { id: 6, name: "Menu Chicken Nuggets", description: "Chicken nuggets with fries and drink", price: 5.79 },
    { id: 7, name: "Menu Double Beef", description: "Double beef burger with fries and drink", price: 8.49 },
    { id: 8, name: "Menu Kids", description: "Kids burger with small fries and juice", price: 4.49 }
];

const panini = [
    { id: 1, name: "Pollo Burger", description: "Chicken breast, lettuce, mayo, bun", price: 3.99 },
    { id: 2, name: "Beef Burger", description: "Beef patty, cheese, lettuce, tomato, bun", price: 4.49 },
    { id: 3, name: "Veggie Burger", description: "Vegetable patty, lettuce, tomato, bun", price: 3.79 },
    { id: 4, name: "Fish Burger", description: "Fish fillet, lettuce, tartar sauce, bun", price: 4.29 },
    { id: 5, name: "Double Beef Burger", description: "Double beef patty, cheese, lettuce, bun", price: 5.49 },
    { id: 6, name: "Chicken Nuggets", description: "6 pieces of chicken nuggets", price: 3.49 },
    { id: 7, name: "Kids Burger", description: "Small beef patty, cheese, bun", price: 2.99 }
];

const insalate = [
    { id: 1, name: "Insalata Mista", description: "Mixed salad with lettuce, tomato, carrots", price: 3.49 },
    { id: 2, name: "Insalata Caesar", description: "Romaine, chicken, parmesan, croutons, Caesar dressing", price: 4.99 },
    { id: 3, name: "Insalata Greca", description: "Lettuce, tomato, cucumber, olives, feta cheese", price: 4.49 }
];

const patatine = [
    { id: 1, name: "Patatine Small", description: "Small fries", price: 1.99 },
    { id: 2, name: "Patatine Medium", description: "Medium fries", price: 2.49 },
    { id: 3, name: "Patatine Large", description: "Large fries", price: 2.99 },
    { id: 4, name: "Patatine Rustiche", description: "Rustic style fries", price: 2.79 }
];

const sfiziosita = [
    { id: 1, name: "Anelli di Cipolla", description: "Onion rings (6 pcs)", price: 2.49 },
    { id: 2, name: "Mozzarella Sticks", description: "Mozzarella sticks (5 pcs)", price: 2.99 },
    { id: 3, name: "Chicken Wings", description: "Spicy chicken wings (4 pcs)", price: 3.49 },
    { id: 4, name: "Jalapeno Bites", description: "Fried jalapeno bites (4 pcs)", price: 2.79 }
];

const bevande = [
    { id: 1, name: "Acqua", description: "Bottled water", price: 1.00 },
    { id: 2, name: "Cola", description: "Soda Cola 33cl", price: 1.50 },
    { id: 3, name: "Aranciata", description: "Aranciata 33cl", price: 1.50 },
    { id: 4, name: "Gassosa", description: "Gassosa 33cl", price: 1.50 },
    { id: 5, name: "Succo di Frutta", description: "Fruit juice", price: 1.20 },
    { id: 6, name: "Tè Freddo", description: "Iced tea", price: 1.50 }
];

const gelati = [
    { id: 1, name: "Cono Gelato", description: "Ice cream cone", price: 1.50 },
    { id: 2, name: "Coppetta Gelato", description: "Ice cream cup", price: 1.80 },
    { id: 3, name: "Coppa Gelato", description: "Vanilla ice cream with chocolate or strawberry topping", price: 2.00 },
    { id: 4, name: "Gelato con Topping e Mix", description: "Soft ice cream with mix-ins", price: 2.50 }
];

const dolci = [
    { id: 1, name: "Torta al Cioccolato", description: "Chocolate cake slice", price: 2.20 },
    { id: 2, name: "Muffin", description: "Blueberry or chocolate muffin", price: 1.80 },
    { id: 3, name: "Donut", description: "Glazed donut", price: 1.20 },
    { id: 4, name: "Apple Pie", description: "Hot apple pie", price: 1.50 }
];



export const products = {
    Menu: menus,
    Panini: panini,
    Insalate: insalate,
    Patatine: patatine,
    Sfiziosità: sfiziosita,
    Bevande: bevande,
    Gelati: gelati,
    Dolci: dolci
};