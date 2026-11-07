const vendors = [
  {
    id: 'kafe-ali',
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'ali-1', name: 'Nasi Lemak Ayam', description: 'Fragrant coconut rice with crispy fried chicken', price: 7.5, category: 'Rice', available: true, spiceLevel: 2 },
      { id: 'ali-2', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9.0, category: 'Rice', available: true, spiceLevel: 3 },
      { id: 'ali-3', name: 'Mee Goreng Mamak', description: 'Stir-fried yellow noodles with tofu and sprouts', price: 6.0, category: 'Noodles', available: true, spiceLevel: 2 },
      { id: 'ali-4', name: 'Laksa Johor', description: 'Spaghetti in spicy fish gravy with herbs', price: 8.0, category: 'Noodles', available: true, spiceLevel: 4 },
      { id: 'ali-5', name: 'Kuey Teow Goreng', description: 'Flat rice noodles fried with eggs and chicken', price: 6.5, category: 'Noodles', available: true, spiceLevel: 3 },
      { id: 'ali-6', name: 'Teh Tarik', description: 'Frothy hot pulled milk tea', price: 2.5, category: 'Drinks', available: true, spiceLevel: 0 },
      { id: 'ali-7', name: 'Air Bandung', description: 'Rose syrup milk drink', price: 3.0, category: 'Drinks', available: true, spiceLevel: 0 },
      { id: 'ali-8', name: 'Milo Ais', description: 'Iced chocolate malt drink', price: 3.5, category: 'Drinks', available: true, spiceLevel: 0 }
    ]
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: 'aminah-1', name: 'Nasi Kerabu', description: 'Blue rice served with fresh herbs and fish cracker', price: 8.5, category: 'Rice', available: true, spiceLevel: 2 },
      { id: 'aminah-2', name: 'Sirap Limau', description: 'Iced rose syrup with lime', price: 2.5, category: 'Drinks', available: true, spiceLevel: 0 }
    ]
  },
  {
    id: 'kafe-faruq',
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Block B',
    openHours: '6:00 pm - 1:00 am',
    isOpen: false,
    menu: [
      { id: 'faruq-1', name: 'Roti Canai', description: 'Flaky flatbread served with dhal gravy', price: 1.5, category: 'Bread', available: false }
    ]
  }
]

export default vendors