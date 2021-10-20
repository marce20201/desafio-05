import ItemCount from 'components/ItemCount/ItemCount'
import PropTypes from 'prop-types'
import {ItemListContainerStyled} from './ItemListContainerStyled'

const handleOnAdd = count => console.log(`Se agregaron ${count} productos al 🛒`)

const ItemListContainer = ({greeting}) => (
	<ItemListContainerStyled>
		<h1>{greeting}</h1>
		<div style={{width: '300px', padding: '10px'}}>
			<ItemCount stock={0} onAdd={handleOnAdd} />
			<ItemCount stock={10} onAdd={handleOnAdd} />
		</div>
	</ItemListContainerStyled>
)

ItemListContainer.propTypes = {
	greeting: PropTypes.string.isRequired,
}

export default ItemListContainer
