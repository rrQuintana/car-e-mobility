const Category = require('../../models/category')

// spell-checker: disable
const seedCategories = async () => {
  try{
    const productsData = [
      {
        name: 'Papel',
        description: 'En esta categoría se encuentran los productos de papel',
        type: ['product']
      },
      {
        name: 'Oficina',
        description: 'En esta categoría se encuentran los productos de oficina',
        type: ['product']
      },
      {
        name: 'Decoración',
        description: 'En esta categoría se encuentran los productos de decoración',
        type: ['product']
      },
      {
        name: 'Ropa',
        description: 'En esta categoría se encuentran los productos de ropa',
        type: ['product']
      },
      {
        name: 'Alimentos',
        description: 'En esta categoría se encuentran los productos de alimentos',
        type: ['product']
      },
      {
        name: 'Tecnología',
        description: 'En esta categoría se encuentran los productos de tecnología',
        type: ['product']
      },
      {
        name: 'Juguetes',
        description: 'En esta categoría se encuentran los productos de juguetes',
        type: ['product']
      },
      {
        name: 'Salud y belleza',
        description: 'En esta categoría se encuentran los productos de salud y belleza',
        type: ['product']
      },
      {
        name: 'Material de laboratorio',
        description: 'En esta categoría se encuentran los productos de material de laboratorio',
        type: ['product']
      },
      {
        name: 'Libros y literatura',
        description: 'En esta categoría se encuentran los productos de libros y literatura',
        type: ['product']
      },
      {
        name: 'Música',
        description: 'En esta categoría se encuentran los productos de música',
        type: ['product']
      },
      {
        name: 'Deportes',
        description: 'En esta categoría se encuentran los productos de deportes',
        type: ['product']
      },
      {
        name: 'Herramientas',
        description: 'En esta categoría se encuentran los productos de herramientas',
        type: ['product']
      }
    ]

    const servicesData = [
      {
        name: 'Aprendizaje',
        description: 'Categoría de aprendizaje',
        type: ['service']
      },
      {
        name: 'Consultoría',
        description: 'Categoría de consultoría',
        type: ['service']
      },
      {
        name: 'Entrenamiento',
        description: 'Categoría de entrenamiento',
        type: ['service']
      },
      {
        name: 'Tutoría',
        description: 'Categoría de tutoría',
        type: ['service']
      },
      {
        name: 'Cuidado',
        description: 'Categoría de cuidado',
        type: ['service']
      },
      {
        name: 'Mantenimiento',
        description: 'Categoría de mantenimiento',
        type: ['service']
      },
      {
        name: 'Servicio técnico',
        description: 'Categoría de servicio técnico',
        type: ['service']
      },
      {
        name: 'Soporte',
        description: 'Categoría de soporte',
        type: ['service']
      },
      {
        name: 'Emprendimiento y negocios',
        description: 'Categoría de emprendimiento y negocios',
        type: ['service']
      },
      {
        name: 'Marketing y publicidad',
        description: 'Categoría de marketing y publicidad',
        type: ['service']
      },
      {
        name: 'Voluntariado',
        description: 'Categoría de voluntariado',
        type: ['service']
      }
    ]

    const bothData = [
      {
        name: 'Cocina',
        description: 'En esta categoría se encuentran los productos de cocina',
        type: ['product']
      },
      {
        name: 'Reparación',
        description: 'Categoría de reparación',
        type: ['service']
      },
      {
        name: 'Arte y diseño',
        description: 'En esta categoría se encuentran los productos de arte y diseño',
        type: ['product']
      },
      {
        name: 'Salud',
        description: 'Categoría de servicio de salud',
        type: ['service']
      }
    ]

    await Category.insertMany([...productsData, ...servicesData, ...bothData])

    console.log('Categories seeded successfully')
  } catch (err) {
    console.error('Error seeding categories:', err)
  }
}

exports.seedCategories = seedCategories