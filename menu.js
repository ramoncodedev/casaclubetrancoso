// Cardápio Casa Clube Trancoso (transcrito do cardápio impresso 2025)
// v: true = opção vegetariana | p: preço | d: descrição | sub: itens extras com preço próprio
const MENU = {
  comidas: [
    { t: 'Entradas', items: [
      { n: 'Tirinhas de cenoura e pepino', v: 1, p: 45, d: 'Acompanha molho de iogurte e hortelã' },
      { n: 'Guacamole', v: 1, p: 68, d: 'Abacate, tomate, cebola e coentro, servido com nachos' },
      { n: 'Hommus', v: 1, p: 68, d: 'Pasta de grão de bico com tahine, servido com pão sírio torrado' },
      { n: 'Mezze – hommus, coalhada e babaganuche', p: 85, d: 'Trio de entradinhas servidas com pão sírio torrado' },
      { n: 'Tartar de salmão servido com creme azedo', p: 96 },
      { n: 'Ceviche misto', p: 108, d: 'Salmão & badejo servido com torradinhas' },
      { n: 'Vinagrete de Polvo', p: 116, d: 'Polvo, cebola e tomate picadinhos, salsinha, azeite e vinagre servido com barquinhas de tapioca' },
      { n: 'Camarão Crocante com molho sweet chili – 6 unidades', p: 138, d: 'Camarão VG com empanamento crocante, frito, servido com molho sweet chili' },
      { n: 'Casquinha de siri', p: 72, d: 'Servida com farofinha e vinagrete de tomate' },
      { n: 'Iscas de peixe', p: 90, d: 'Tirinhas com empanamento crocante servida com molho agridoce e maionese de ervas' },
      { n: 'Carne Seca Acebolada', p: 96, d: 'Carne seca desfiada refogada com cebola – acompanha torradinhas' },
      { n: 'Dadinho de Tapioca – acompanha molho de mel', p: 75 },
      { n: 'Pastel de queijo', v: 1, p: 75 },
      { n: 'Pastel de carne', p: 75 },
      { n: 'Pastel de camarão', p: 85 },
      { n: 'Batata frita', v: 1, p: 54 },
      { n: 'Bolinho de arroz', v: 1, p: 59 },
      { n: 'Batata Bolinha', p: 59, d: 'Em conserva com cebola, servido numa cama de sal grosso' },
      { n: 'Mini Acarajé – 6 unidades', p: 96, d: 'Acompanha vatapá, camarão seco e vinagrete' }
    ]},
    { t: 'Sanduíches', items: [
      { n: 'Sanduíche de salmão', p: 85, d: 'Lâminas de salmão defumado, alface picadinha, rodelas de cebola roxa, alcaparras e cream cheese no pão de miga tostado – branco ou integral' },
      { n: 'Sanduíche de Frango', p: 75, d: 'Salpicão de frango com lascas de maçã verde e salsão servido no pão de miga' },
      { n: 'Sanduíche de Camarão', p: 97, d: 'Camarão, salsão, maionese de limão e alho e picles de cebola roxa servido no pão brioche' },
      { n: 'Hambúrguer da casa', p: 84, d: 'Blend especial de carnes, queijo derretido, tomate, alface picadinha e cebola caramelizada servidos no pão de hambúrguer – acompanha fritas' },
      { n: 'Hambúrguer de Peixe', p: 84, d: 'Hambúrguer de peixe branco com empanamento crocante, saladinha de repolho roxo com maionese de wasabi, servido no pão de hambúrguer – acompanha fritas' },
      { n: 'Tostex – queijo', v: 1, p: 48, d: 'Queijo quente, servido em pão de miga branco ou integral, acompanha batata frita' }
    ]},
    { t: 'Saladas', items: [
      { n: 'Ceasar Salad', p: 80, d: 'Alface picadinha, tirinhas de frango grelhado, molho blue cheese especial, servida com torradinhas' },
      { n: 'Salada Mediterrânea', p: 78, d: 'Tomate, pepino, alface picadinha, cebola roxa e azeitonas pretas' },
      { n: 'Salada Tai com Camarão', p: 115, d: 'Camarão grelhado, alface americana, manga em cubinhos, amendoim e lascas de coco' },
      { n: 'Salada de Couscous marroquino', d: 'Couscous marroquino hidratado em caldo de legumes com amêndoas laminadas e hortelã',
        sub: [{ n: 'Opção com frango grelhado', p: 88 }, { n: 'Opção com salmão grelhado', p: 98 }] }
    ]},
    { t: 'Pratos', items: [
      { n: 'Panelinha de arroz de carne seca', p: 98, d: 'Arroz branco, carne seca desfiada refogada na cebola, cubinhos de abóbora assada, cubinhos de queijo coalho, salsa e cheiro verde' },
      { n: 'Bobozinho de Camarão', p: 105, d: 'Camarão, creme de mandioca e dendê; servido com arroz branco e farofinha' },
      { n: 'Picadinho de filé mignon', p: 98, d: 'Arroz, feijão, farofinha de banana, picadinho de filé mignon e batata frita' },
      { n: 'PF luxo de peixe', p: 98, d: 'Arroz, feijão, farofinha de banana, posta de peixe do dia e batata frita' },
      { n: 'Peixe grelhado com salada e farofinha', p: 98, d: 'Peixe do dia grelhado com salada mediterrânea e farofinha de banana' },
      { n: 'Churrasco do Mar', d: 'Camarões VG, polvo, posta de peixe branco grelhados, acompanha cebola, cenoura, abobrinha e brócolis grelhados, servido com farofa de castanha e molho tártaro',
        sub: [{ n: 'Para 2 pessoas', p: 350 }, { n: 'Para 4 pessoas', p: 590 }] }
    ]},
    { t: 'Açaí', items: [
      { n: 'Açaí 300ml (com até 3 complementos)', p: 46 },
      { n: 'Complemento extra – por complemento', p: 10, d: 'Linhaça, chia, aveia, granola, banana, manga, mel, castanha de caju picada, leite condensado' }
    ]},
    { t: 'Doces', items: [
      { n: 'Brigadeiro de colher', p: 32 },
      { n: 'Cocada de forno com sorvete', p: 50 },
      { n: 'Torta do dia', p: 50 },
      { n: 'Fruta do dia', p: 32 },
      { n: 'Café coado (servido em mini garrafa térmica)', p: 15 }
    ]}
  ],
  bebidas: [
    { t: 'Drinks com gin Bombay Sapphire', price: 58, items: [
      { n: 'Bombay & Tonic', d: 'Gin Bombay Sapphire, lâminas de pepino, limão siciliano e tônica' },
      { n: 'CBGB', d: 'Gin Bombay Sapphire, chá de hibisco, limão siciliano e tônica' },
      { n: 'Sra Kravitz', d: 'Gin Bombay Sapphire, alecrim, limão siciliano, zimbro e tônica' },
      { n: 'The End', d: 'Gin Bombay Sapphire, tangerina, canela e tônica' },
      { n: 'Casa Clube', d: 'Gin Bombay Sapphire, suco de melancia, suco de limão, xarope de açúcar e hortelã' }
    ]},
    { t: 'Drinks com vodka Grey Goose', price: 60, items: [
      { n: 'Grey Goose Seriguela Lemonade Spritz', d: 'Vodka Grey Goose, espumante, seriguela e água com gás' },
      { n: 'Grey Goose Strawberry Collins', d: 'Vodka Grey Goose, licor de laranja, morango e tônica' },
      { n: 'Grey Goose Tea Highball', d: 'Vodka Grey Goose com infusão de limão siciliano, xarope de açúcar e chá de pêssego' },
      { n: 'Grey Goose Pineapple Punch Mint', d: 'Vodka Grey Goose, Aperol, abacaxi, limão, hortelã e tônica' },
      { n: 'Grey Goose Summer Breeze', d: 'Vodka Grey Goose, limão Taiti, xarope de maracujá e água de coco' }
    ]},
    { t: 'Drinks com tequila Patrón', price: 60, items: [
      { n: 'Paloma', d: 'Tequila Patrón Silver, xarope de grapefruit, suco de limão e água com gás' },
      { n: 'Margarita', d: 'Tequila Patrón Silver, Cointreau e suco de limão' },
      { n: 'Spyce Tamarindo Margarita', d: 'Tequila Patrón Silver, tamarindo, suco de limão e néctar de agave' },
      { n: 'Smoke Pineapple Mescalina', d: 'Tequila Patrón Silver, suco de abacaxi e uma pitada de sal defumado' }
    ]},
    { t: 'Clássicos', items: [
      { n: 'Tinto de Verano', p: 55, d: 'Vinho tinto, vermute doce, limão e soda' },
      { n: 'Aperol Spritz', p: 58, d: 'Aperol, espumante, água com gás e laranja Bahia' },
      { n: 'Bloody Mary', p: 60, d: 'Vodka Grey Goose, suco de tomate e bloody mix' },
      { n: 'Batida de Coco', p: 60, d: 'Vodka Grey Goose, leite de coco e leite condensado' },
      { n: 'London Mule', p: 58, d: 'Gin Bombay Sapphire, ginger ale e espuma de gengibre' },
      { n: 'Fitzgerald', p: 58, d: 'Gin Bombay Sapphire, suco de limão, xarope de açúcar e bitter aromática' },
      { n: 'Acalma Piranha', p: 58, d: 'Receita especial Casa Clube com gin Bombay Sapphire' },
      { n: 'Negroni', p: 65, d: 'Gin Bombay Sapphire, Campari, vermute e laranja Bahia' },
      { n: 'Dry Martini', p: 60, d: 'Gin Bombay Sapphire, vermute seco e azeitona' },
      { n: 'Old Fashioned', p: 60, d: 'Whisky Dewars, xarope de açúcar, bitter aromática e laranja Bahia' },
      { n: 'Boulevardier', p: 60, d: 'Whisky Dewars, Campari, vermute e laranja Bahia' },
      { n: 'Penicilin', p: 60, d: 'Whisky Dewars, suco de limão, xarope de mel, extrato de gengibre e Ardbeg' },
      { n: 'Mojito', p: 56, d: 'Rum Bacardí, hortelã, suco de limão, xarope de açúcar e água com gás' },
      { n: 'Run Noir', p: 58, d: 'Rum Bacardí ouro, extrato de café, xarope Falernum, chá mate e bitter aromática' },
      { n: 'Especial Cachaça', p: 58, d: 'Cachaça, xarope de capim santo, suco de limão, gengibre, xarope de açúcar e bitter aromática' },
      { n: 'Caipirinha', p: 55, d: 'Cachaça e frutas' },
      { n: 'Caipiroska', p: 60, d: 'Vodka Grey Goose e frutas. Sugestão de frutas com o garçom' }
    ]},
    { t: 'Mini drinks degustação', price: 65, items: [
      { n: 'Três mini drinks', d: 'Três diferentes mini drinks indicados pelo chef do bar para uma experiência de degustação' }
    ]},
    { t: 'Mocktails', price: 42, items: [
      { n: 'Passion', d: 'Maracujá, suco de limão, xarope de mel, hortelã e água com gás' },
      { n: 'Watermelon', d: 'Melancia, suco de cranberry, suco de limão, gengibre e espuma de gengibre' },
      { n: 'Acalma Piranha Fit', d: 'Concentrado de hibisco, bitter sem álcool, xarope Falernum' },
      { n: 'Fresh Fizz', d: 'Lâminas de pepino e limão, água tônica e bitter sem álcool' },
      { n: 'No Sunset', d: 'Chá de sálvia, suco de limão Taiti, xarope de pimenta rosa e flor de sal' }
    ]},
    { t: 'Drinks para compartilhar', items: [
      { n: 'Clericot', p: 280, d: 'Vinho branco, cointreau, citrus e mix de frutas (em jarras)' },
      { n: 'Pink Clericot', p: 280, d: 'Vinho rosé, cointreau, citrus e mix de frutas (em jarras)' },
      { n: 'Shots Casa Clube – 6 shots', p: 135, d: 'Opções: Negroni, Boulevardier ou Batida de Coco' }
    ]},
    { t: 'Cervejas', items: [
      { n: 'Praya', p: 24 }, { n: 'Heineken', p: 24 }, { n: 'Heineken 0.0', p: 24 },
      { n: 'Lagunitas IPA', p: 29 }, { n: 'Blue Moon', p: 29 }, { n: 'Amstel Ultra (sem glúten)', p: 22 }
    ]},
    { t: 'Doses', items: [
      { n: 'Dewars 12 anos', p: 55 }, { n: 'Jack Daniels', p: 60 }, { n: 'Grey Goose', p: 55 },
      { n: 'Tequila Patrón', p: 55 }, { n: 'Cachaça', p: 42 }, { n: 'Campari', p: 45 }, { n: 'Licor 43', p: 55 }
    ]},
    { t: 'Combos', items: [
      { n: 'Garrafa gin Bombay Sapphire e 4 tônicas', p: 550 },
      { n: 'Garrafa gin Bombay Sapphire e 3 energéticos', p: 620 },
      { n: 'Garrafa vodka Grey Goose e 4 tônicas', p: 620 },
      { n: 'Garrafa vodka Grey Goose e 3 energéticos', p: 690 }
    ]},
    { t: 'Sucos e sem álcool', items: [
      { n: 'Laranja, limão ou melancia', p: 25 },
      { n: 'Suco verde', p: 38, d: 'Água de coco, abacaxi e couve' },
      { n: 'Suco rosa', d: 'Suco de maracujá e chá de hibisco' },
      { n: 'Água', p: 12 }, { n: 'Refrigerante', p: 14 }, { n: 'Água de coco', p: 18 }, { n: 'Energético', p: 26 }
    ]},
    { t: 'Vinhos brancos', items: [
      { n: 'Carmem Insigne', p: 220, d: 'Chardonnay (Chile)' },
      { n: 'Robertson Winery', p: 220, d: 'Chenin Blanc (África do Sul)' },
      { n: 'San Marzano Timo Vermentino', p: 320, d: 'Itália' },
      { n: 'Boya', p: 350, d: 'Sauvignon Blanc (Chile)' },
      { n: 'Angelica Zapata', p: 590, d: 'Chardonnay (Argentina)' }
    ]},
    { t: 'Vinhos rosés', items: [
      { n: 'Carmem Insigne Rosé', p: 220, d: 'Chardonnay Rosé (Chile)' },
      { n: 'Los Vascos', p: 220, d: 'Syrah Grenache (Chile)' },
      { n: 'Lyv Paes DOC Rosé', p: 320, d: 'França' },
      { n: 'A D Aussières', p: 350, d: 'Domaine d’Aussières (França)' },
      { n: 'Studio by Miraval Rosé IGP Méditerranée', p: 550, d: 'França' }
    ]},
    { t: 'Vinhos tintos', items: [
      { n: 'Carmen Insigne Cabernet Sauvignon', p: 220, d: 'Chile' },
      { n: 'Padrillos Pinot Noir', p: 320, d: 'Tikal/Catena (Argentina)' },
      { n: 'DV Catena', p: 550, d: 'Malbec (Argentina)' }
    ]},
    { t: 'Espumantes', items: [
      { n: 'Vilarnau Reserva Brut', p: 300, d: 'Espanha' },
      { n: 'Freixenet 0,0% álcool', p: 320, d: 'Espanha' },
      { n: 'Freixenet Cordon Negro', p: 320, d: 'Espanha' },
      { n: 'Freixenet Rosé', p: 320, d: 'Espanha' }
    ]},
    { t: 'Champagne', items: [
      { n: 'Moët & Chandon Brut', p: 1000 },
      { n: 'Veuve Clicquot', p: 1100 },
      { n: 'Balde de gelo', p: 30 }
    ]}
  ]
};

const brl = v => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function row(i) {
  const leaf = i.v ? '<span class="veg" title="Opção vegetariana">V</span>' : '';
  const price = i.p != null ? `<span class="pr">${brl(i.p)}</span>` : '';
  let h = `<li><div class="line"><span class="nm">${esc(i.n)}${leaf}</span><span class="dots"></span>${price}</div>`;
  if (i.d) h += `<p class="ds">${esc(i.d)}</p>`;
  if (i.sub) h += '<ul class="subs">' + i.sub.map(s => `<li><div class="line"><span class="nm">${esc(s.n)}</span><span class="dots"></span><span class="pr">${brl(s.p)}</span></div></li>`).join('') + '</ul>';
  return h + '</li>';
}

function render(key) {
  const box = document.getElementById('menu-body');
  box.innerHTML = MENU[key].map(c => `
    <section class="mcat">
      <h3>${esc(c.t)}${c.price ? `<span class="pr">${brl(c.price)}</span>` : ''}</h3>
      <ul>${c.items.map(row).join('')}</ul>
    </section>`).join('');
}

document.querySelectorAll('.mtab').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.mtab').forEach(x => { x.classList.remove('on'); x.setAttribute('aria-selected', 'false'); });
  b.classList.add('on'); b.setAttribute('aria-selected', 'true');
  render(b.dataset.tab);
}));
render('comidas');
