class FormContainer extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = `
			<style>
			.form_container {
				font-family: 'Poiret One', cursive;
			}
			</style>
			<main id="${this.id}">    
				<slot></slot>            
			</main>
		`;
	}
}

customElements.define('form-container', FormContainer);
