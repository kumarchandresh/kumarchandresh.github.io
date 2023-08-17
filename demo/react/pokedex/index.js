
const pokeDex = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

function getPokeDex() {
	return pokeDex.map(obj => Object.assign({}, obj));
}

class App extends React.Component {
	render() {
		return (<div className="App">
			<PokeGame />
		</div>);
	}
}

function totalExp(arr) {
	return arr
		.map(x => x.base_experience)
		.reduce((a, b) => a + b, 0);
}

class PokeGame extends React.Component {
	constructor(props) {
		super(props);
		props.pokeDex1 = getPokeDex();
		props.pokeDex2 = [];
		for (let i = 0; i < props.pokeDex1.length; ++i) {
			let j = Math.floor(Math.random() * props.pokeDex1.length);
			props.pokeDex2.push(props.pokeDex1.splice(j, 1)[0]);
		}
	}
	render() {
		const p1Exp = totalExp(this.props.pokeDex1);
		const p2Exp = totalExp(this.props.pokeDex2);
		const winningHand = <h3 className="won" >Winning Hand</h3>;
		const losingHand = <h3 className="lost" >Losing Hand</h3>;
		const tiedHand = <h3 className="tied" >Tied</h3>;
		return (<div className="PokeGame">
			<div className="singleHand">
				{p1Exp > p2Exp ? winningHand : p1Exp < p2Exp ? losingHand : tiedHand}
				<div><em>Total Experience: </em>{p1Exp}</div>
				<PokeDex pokeDex={this.props.pokeDex1} />
			</div>
			<div className="singleHand">
				{p2Exp > p1Exp ? winningHand : p2Exp < p1Exp ? losingHand : tiedHand}
				<div><em>Total Experience: </em>{p2Exp}</div>
				<PokeDex pokeDex={this.props.pokeDex2} />
			</div>
		</div>);
	}
}

class PokeDex extends React.Component {
	static defaultProps = { pokeDex };
	render() {
		return (<div className="PokeDex">
			{this.props.pokeDex.map(poke => <PokeCard
				{...poke}
				image={makePokemonComUrl(poke.id)}
			/>)}
		</div>);
	}
}

class PokeCard extends React.Component {
	static defaultProps = {
		name: "Unknown",
		image: "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
		type: "unknown",
		base_experience: NaN,
	};
	render() {
		return (<div className="PokeCard">
			<div className="image"><img src={this.props.image} alt={this.props.name} /></div>
			<h2 className="name">{this.props.name}</h2>
			<div className="type"><em>Type: </em>{this.props.type}</div>
			<div className="base_experience"><em>Exp: </em>{this.props.base_experience}</div>
		</div>);
	}
}

function makePokemonComUrl(id) {
	return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(id).toString().padStart(3, "0")}.png`
}

function makePokeApiUrl(id) {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

ReactDOM.render(<App />, document.querySelector("#root"));