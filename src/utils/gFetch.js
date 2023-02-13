const items = [
    {
        id: '1',
        categoryId: 2,
        name: 'Torta de chocolate',
        description: 'Capas de bizcocho de chocolate, relleno y cubierto de ganache de chocolate, decorado con virutas de chocolate.',
        price: 30000,
        stock: 15,
        photo: 'https://img.freepik.com/premium-photo/closeup-tasty-chocolate-cake-with-chocolate-chunks-baking-sheet_1220-6275.jpg',
    },
    {
        id: '2',
        categoryId: 2,
        name: 'Bizcocho',
        description: 'Bizcocho de vainilla esponjoso, suave y húmedo, con una textura ligera y un sabor dulce y delicado. ',
        price: 15000,
        stock: 1,
        photo: 'https://img.freepik.com/foto-gratis/vista-cercana-lateral-plato-pastel-pastel-orejas-trigo-cupcakes-ramas-arboles_140725-122966.jpg?w=1380&t=st=1674274846~exp=1674275446~hmac=3e990c1c3514f0f220d13393493cdb4f4e0bcadee2e9a1ef42fe3cbb8f4c2d56'
    },
    {
        id: '3',
        categoryId: 1,
        name: 'Baguette',
        description: 'Pan francés largo y delgado con una corteza crujiente y una miga suave.',
        price: 1000,
        stock: 100,
        photo: 'https://img.freepik.com/foto-gratis/baguette-recien-horneado-dos-baguette-recien-horneado-envuelto-panaderia_8353-6739.jpg?w=1380&t=st=1674274641~exp=1674275241~hmac=3ff6980845f28cef6136ba67968010f4f882852aa33bdde9f0a5cf917a55a57c'
    },
]

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? items.find(item => item.id === id) : items);
        }, 1000)
    });
} 