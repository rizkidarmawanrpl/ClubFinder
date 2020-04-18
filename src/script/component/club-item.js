class ClubItem extends HTMLElement {
    set club(club) {
        this._club = club;
        this.render();
    }

    render() {
        const data = this._club;
        this.innerHTML = `
        <img class="fan-art-club" src="${data.fanArt}" alt="Fan Art">
        <div class="club-info">
            <h2>${data.name}</h2>
            <p>${data.description}</p>
        </div>
        `;
    }
}

customElements.define("club-item", ClubItem);