import {plantList} from '../datas/plantList'
import '../styles/shoppingList.css'
import PlantItem from './PlantItem'
import CareScale from './CareScale'

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

const categorie = plantList.reduce(
    (acc, plant) => 
    acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
)

function ShoppingList() {
    // return (
    //     <ul>
    //         {plantList.map((plant, index) => (
    //             <li key={`${plant}-${index}`}>{ plant }</li>
    //         ))}
    //     </ul>
    // )

    // return (
    //     <div>
    //         <ul className='lmj-plant-list'>
    //             {categorie.map((cat) =>(
    //                 <li key={cat}>{cat}</li>
    //             ))}
    //         </ul>
    //         <ul>
	// 			{plantList.map((plant) => (
	// 									<li key={plant.id} className='lmj-plant-item'>
    //                                     {plant.name}
    //                                     {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
    //                                 </li>
	// 			))}
	// 		</ul>
    //     </div>
    // )

    return (
		<div>
			<ul>
				{categorie.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList