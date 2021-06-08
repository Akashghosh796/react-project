import React, { Component } from 'react';
import Headings from './Headings';
import Ingrediants from './Ingrediants';
import Steps from './Steps';
import './main.css'

const recipes = [
    {
        Item: 'Biryani',
        Description: 'Biryani is one of the most amazing royal delicacies introduced to Indians by the Persians',
        Ingrediants: [
            'Ginger & Garlic',
            'Garam Masala',
            'Bone-in Chicken Thigh',
            'Basmati Rice',
            'Boiled Potato',
            'Cardamom',
            'Bay Leaf'
        ],
        Steps: 'By parboiling the rice, the Biryani can be steamed instead of boiled. This renders the chicken tender and juicy. Marinating the chicken and then browning it ensures it is seasoned to the core while creating new layers of flavor thanks to Maillard browning. Properly caramelizing the onions adds loads of umami and it also lends a subtle sweetness that’s the perfect contrast to the savory and spicy chicken'
    
    },

    {
        Item: 'Kadai Chiken',
        Description: 'Kadai Chicken is a delicious Indian chicken curry where chicken is cooked with freshly ground spices',
        Ingrediants: [
            'Green Chilli',
            'Tomato',
            'Chiken',
            'Garam Masala',
            'Kasturi Methi',
            'Ginger Garlic',
            'Turmeric Powder',
            'Onion & Capcicum',
            'Ghee & Yogurt',
            'Whole Spices'
        ],
        Steps: "Kadai Chicken, chicken pieces are marinated in a spicy ginger garlic paste and then cooked along with big chunks of onions and capsicum in a spicy rich tomato gravy"
    },
    {
        Item: 'Orange Mango Crush',
        Description: 'This tropical mocktail is given an extra flavour hit by adding lemon sorbet and mango nectar',
        Ingrediants: [
            '2 cups orange juice',
            '4 scoops lemon sorbet',
            '2 cups chilled mango nectar',
            '2 cups chilled soda water',
            'Crushed ice, to serve',
            'Orange slices, to serve'
        ],
        Steps:'Using a blender, blend orange juice and sorbet together until just combined. Transfer to a large serving jug. Add mango nectar and soda water. Stir to combine. Divide crushed ice among serving glasses. Top with orange mixture. Serve with orange slices.'
    }

];

class App extends Component{
render(){
return(<div>
    <h2>Recipes</h2>
    <div className='row'>
        <Headings itemList={recipes} />
        <Ingrediants itemList1={recipes}/>
        <Steps itemList2={recipes}/>
    </div>
</div>)
}
}

export default App;