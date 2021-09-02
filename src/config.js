const layersOrder = [
    'fondos',
    'cabeza',
    'orejas',
    'ojos',
    'boca',
    'detalles'
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10;

module.exports = { layersOrder, format, rarity, defaultEdition };