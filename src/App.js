import ItemListContainer from 'components/ItemListContainer/ItemListContainer';
import Navbar from 'components/Navbar/Navbar'

const App = () => (
	<div className="App">
		<Navbar />
		<ItemListContainer greeting={'Hola Mundo!!! 👨‍💻'} />
	</div>
);

export default App
