function getCountryInfo() {
    const countryName = document.getElementById('country-input').value;
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data[0]) {
                const country = data[0];
                document.getElementById('country-name').textContent = country.name.common;
                document.getElementById('country-flag').src = country.flags.png; // Alteração aqui
                document.getElementById('country-capital').textContent = country.capital ? country.capital[0] : 'Não disponível';
                document.getElementById('country-population').textContent = country.population.toLocaleString();
                document.getElementById('country-area').textContent = country.area.toLocaleString();
                document.getElementById('country-region').textContent = country.region;

                document.getElementById('country-info').style.display = 'block';
            } else {
                alert('País não encontrado!');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados do país:', error);
            alert('Erro ao buscar dados. Tente novamente.');
        });
}