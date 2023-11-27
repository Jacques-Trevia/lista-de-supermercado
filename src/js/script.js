let items = [];

document.querySelector('input[type=submit]').addEventListener('click', () => {
    let nomeProduto = document.querySelector('input[name=nomeProduto]');
    let quantidadeProduto = document.querySelector('input[name=quantidadeProduto]');
    let valorProduto = document.querySelector('input[name=valorProduto]');

    if (nomeProduto.value.trim() === '' || quantidadeProduto.value.trim() === '' || valorProduto.value.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    let totalProduto = (parseFloat(quantidadeProduto.value) * parseFloat(valorProduto.value)).toFixed(2);

    items.push({
        nome: nomeProduto.value,
        quantidade: quantidadeProduto.value,
        valor: valorProduto.value,
        total: totalProduto
    });

    let listaProduto = document.querySelector('.listaProduto');
    let soma = 0;
    listaProduto.innerHTML = "";

    items.map((val) => {
        soma += parseFloat(val.total);
        listaProduto.innerHTML += `
            <div class="listaProdutoSingle">
                <h3>Produto: ${val.nome}</h3>
                <h3>Quantidade do Produto: ${val.quantidade}</h3>
                <h3 class="precoProduto"><span>Valor do Produto: R$${val.valor}</span></h3>
                <h3 class="totalProduto"><span> Valor Total: R$${val.total}</span></h3>
            </div>
        `;
    });

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    quantidadeProduto.value = "";
    valorProduto.value = "";

    let elementoSoma = document.querySelector('.somaProduto h1');
    elementoSoma.innerHTML = `R$${soma}`;
});

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = [];
    document.querySelector('.listaProduto').innerHTML = `
    <div class="listaProduto">
    <div class="listaProdutoSingle">
        <h3>Produto:</h3>
        <h3>Quantidade do Produto:</h3>
        <h3 class="precoProduto"><span>Valor do Produto:</span></h3>
        <h3 class="totalProduto"><span> Valor Total:</span></h3>
    </div>
</div>`;
    document.querySelector('.somaProduto h1').innerHTML = "Total: R$0";
});