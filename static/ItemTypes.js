const ItemTypes = {
  Bag: [
    {
      name: 'Bag',
      value: '_BAG'
    }
  ],
  Cape: [
    {
      name: 'Cape',
      value: '_CAPE'
    }
  ],
  ClothArmor: [
    {
      name: 'Scholar Robe',
      value: '_ARMOR_CLOTH_SET1'
    },
    {
      name: 'Cleric Robe',
      value: '_ARMOR_CLOTH_SET2'
    },
    {
      name: 'Mage Robe',
      value: '_ARMOR_CLOTH_SET3'
    },
    {
      name: 'Druid Robe',
      value: '_ARMOR_CLOTH_KEEPER'
    },
    {
      name: 'Fiend Robe',
      value: '_ARMOR_CLOTH_HELL'
    },
    {
      name: 'Cultist Robe',
      value: '_ARMOR_CLOTH_MORGANA'
    }
  ],
  ClothHelmet: [
    {
      name: 'Scholar Cowl',
      value: '_HEAD_CLOTH_SET1'
    },
    {
      name: 'Cleric Cowl',
      value: '_HEAD_CLOTH_SET2'
    },
    {
      name: 'Mage Cowl',
      value: '_HEAD_CLOTH_SET3'
    },
    {
      name: 'Druid Cowl',
      value: '_HEAD_CLOTH_KEEPER'
    },
    {
      name: 'Fiend Cowl',
      value: '_HEAD_CLOTH_HELL'
    },
    {
      name: 'Cultist Cowl',
      value: '_HEAD_CLOTH_MORGANA'
    }
  ],
  ClothShoes: [
    {
      name: 'Scholar Sandals',
      value: '_SHOES_CLOTH_SET1'
    },
    {
      name: 'Cleric Sandals',
      value: '_SHOES_CLOTH_SET2'
    },
    {
      name: 'Mage Sandals',
      value: '_SHOES_CLOTH_SET3'
    },
    {
      name: 'Druid Sandals',
      value: '_SHOES_CLOTH_KEEPER'
    },
    {
      name: 'Fiend Sandals',
      value: '_SHOES_CLOTH_HELL'
    },
    {
      name: 'Cultist Sandals',
      value: '_SHOES_CLOTH_MORGANA'
    }
  ],
  LeatherArmor: [
    {
      name: 'Mercenary Jacket',
      value: '_ARMOR_LEATHER_SET1'
    },
    {
      name: 'Hunter Jacket',
      value: '_ARMOR_LEATHER_SET2'
    },
    {
      name: 'Assassin Jacket',
      value: '_ARMOR_LEATHER_SET3'
    },
    {
      name: 'Stalker Jacket',
      value: '_ARMOR_LEATHER_MORGANA'
    },
    {
      name: 'Hellion Jacket',
      value: '_ARMOR_LEATHER_HELL'
    },
    {
      name: 'Specter Jacket',
      value: '_ARMOR_LEATHER_UNDEAD'
    }
  ],
  LeatherHelmet: [
    {
      name: 'Mercenary Hood',
      value: '_HEAD_LEATHER_SET1'
    },
    {
      name: 'Hunter Hood',
      value: '_HEAD_LEATHER_SET2'
    },
    {
      name: 'Assassin Hood',
      value: '_HEAD_LEATHER_SET3'
    },
    {
      name: 'Stalker Hood',
      value: '_HEAD_LEATHER_MORGANA'
    },
    {
      name: 'Hellion Hood',
      value: '_HEAD_LEATHER_HELL'
    },
    {
      name: 'Specter Hood',
      value: '_HEAD_LEATHER_UNDEAD'
    }
  ],
  LeatherShoes: [
    {
      name: 'Mercenary Shoes',
      value: '_SHOES_LEATHER_SET1'
    },
    {
      name: 'Hunter Shoes',
      value: '_SHOES_LEATHER_SET2'
    },
    {
      name: 'Assassin Shoes',
      value: '_SHOES_LEATHER_SET3'
    },
    {
      name: 'Stalker Shoes',
      value: '_SHOES_LEATHER_MORGANA'
    },
    {
      name: 'Hellion Shoes',
      value: '_SHOES_LEATHER_HELL'
    },
    {
      name: 'Specter Shoes',
      value: '_SHOES_LEATHER_UNDEAD'
    }
  ],
  PlateArmor: [
    {
      name: 'Soldier Armor',
      value: '_ARMOR_PLATE_SET1'
    },
    {
      name: 'Knight Armor',
      value: '_ARMOR_PLATE_SET2'
    },
    {
      name: 'Guardian Armor',
      value: '_ARMOR_PLATE_SET3'
    },
    {
      name: 'Graveguard Armor',
      value: '_ARMOR_PLATE_UNDEAD'
    },
    {
      name: 'Demon Armor',
      value: '_ARMOR_PLATE_HELL'
    },
    {
      name: 'Judicator Armor',
      value: '_ARMOR_PLATE_KEEPER'
    }
  ],
  PlateHelmet: [
    {
      name: 'Soldier Helmet',
      value: '_HEAD_PLATE_SET1'
    },
    {
      name: 'Knight Helmet',
      value: '_HEAD_PLATE_SET2'
    },
    {
      name: 'Guardian Helmet',
      value: '_HEAD_PLATE_SET3'
    },
    {
      name: 'Graveguard Helmet',
      value: '_HEAD_PLATE_UNDEAD'
    },
    {
      name: 'Demon Helmet',
      value: '_HEAD_PLATE_HELL'
    },
    {
      name: 'Judicator Helmet',
      value: '_HEAD_PLATE_KEEPER'
    }
  ],
  PlateShoes: [
    {
      name: 'Soldier Boots',
      value: '_SHOES_PLATE_SET1'
    },
    {
      name: 'Knight Boots',
      value: '_SHOES_PLATE_SET2'
    },
    {
      name: 'Guardian Boots',
      value: '_SHOES_PLATE_SET3'
    },
    {
      name: 'Graveguard Boots',
      value: '_SHOES_PLATE_UNDEAD'
    },
    {
      name: 'Demon Boots',
      value: '_SHOES_PLATE_HELL'
    },
    {
      name: 'Judicator Boots',
      value: '_SHOES_PLATE_KEEPER'
    }
  ],
  ArcaneStaff: [
    {
      name: 'Arcane Staff',
      value: '_MAIN_ARCANESTAFF'
    },
    {
      name: 'Great Arcane Staff',
      value: '_2H_ARCANESTAFF'
    },
    {
      name: 'Enigmatic Staff',
      value: '_2H_ENIGMATICSTAFF'
    },
    {
      name: 'Witchwork Staff',
      value: '_MAIN_ARCANESTAFF_UNDEAD'
    },
    {
      name: 'Occult Staff',
      value: '_2H_ARCANESTAFF_HELL'
    },
    {
      name: 'Malevolent Locus',
      value: '_2H_ENIGMATICORB_MORGANA'
    }
  ],
  CursedStaff: [
    {
      name: 'Cursed Staff',
      value: '_MAIN_CURSEDSTAFF'
    },
    {
      name: 'Great Cursed Staff',
      value: '_2H_CURSEDSTAFF'
    },
    {
      name: 'Demonic Staff',
      value: '_2H_DEMONICSTAFF'
    },
    {
      name: 'Lifecurse Staff',
      value: '_MAIN_CURSEDSTAFF_UNDEAD'
    },
    {
      name: 'Cursed Skull',
      value: '_2H_SKULLORB_HELL'
    },
    {
      name: 'Damnation Staff',
      value: '_2H_CURSEDSTAFF_MORGANA'
    }
  ],
  FireStaff: [
    {
      name: 'Fire Staff',
      value: '_MAIN_FIRESTAFF'
    },
    {
      name: 'Great Fire Staff',
      value: '_2H_FIRESTAFF'
    },
    {
      name: 'Infernal Staff',
      value: '_2H_INFERNOSTAFF'
    },
    {
      name: 'Wildfire Staff',
      value: '_MAIN_FIRESTAFF_KEEPER'
    },
    {
      name: 'Brimstone Staff',
      value: '_2H_FIRESTAFF_HELL'
    },
    {
      name: 'Blazing Staff',
      value: '_2H_INFERNOSTAFF_MORGANA'
    }
  ],
  FrostStaff: [
    {
      name: 'Frost Staff',
      value: '_MAIN_FROSTSTAFF'
    },
    {
      name: 'Great Frost Staff',
      value: '_2H_FROSTSTAFF'
    },
    {
      name: 'Glacial Staff',
      value: '_2H_GLACIALSTAFF'
    },
    {
      name: 'Hoarfrost Staff',
      value: '_MAIN_FROSTSTAFF_KEEPER'
    },
    {
      name: 'Icicle Staff',
      value: '_2H_ICEGAUNTLETS_HELL'
    },
    {
      name: 'Permafrost Staff',
      value: '_2H_ICECRYSTAL_UNDEAD'
    }
  ],
  HolyStaff: [
    {
      name: 'Holy Staff',
      value: '_MAIN_HOLYSTAFF'
    },
    {
      name: 'Great Holy Staff',
      value: '_2H_HOLYSTAFF'
    },
    {
      name: 'Divine Staff',
      value: '_2H_DIVINESTAFF'
    },
    {
      name: 'Lifetouch Staff',
      value: '_MAIN_HOLYSTAFF_MORGANA'
    },
    {
      name: 'Fallen Staff',
      value: '_2H_HOLYSTAFF_HELL'
    },
    {
      name: 'Redemption Staff',
      value: '_2H_HOLYSTAFF_UNDEAD'
    }
  ],
  NatureStaff: [
    {
      name: 'Nature Staff',
      value: '_MAIN_NATURESTAFF'
    },
    {
      name: 'Great Nature Staff',
      value: '_2H_NATURESTAFF'
    },
    {
      name: 'Wild Staff',
      value: '_2H_WILDSTAFF'
    },
    {
      name: 'Druidic Staff',
      value: '_MAIN_NATURESTAFF_KEEPER'
    },
    {
      name: 'Blight Staff',
      value: '_2H_NATURESTAFF_HELL'
    },
    {
      name: 'Rampant Staff',
      value: '_2H_NATURESTAFF_KEEPER'
    }
  ],
  Axe: [
    { name: 'Battleaxe', value: '_MAIN_AXE' },
    { name: 'Bear Paws', value: '_2H_DUALAXE_KEEPER' },
    { name: 'Infernal Scythe', value: '_2H_SCYTHE_HELL' }
  ],
  Dagger: [
    {
      name: 'Dagger',
      value: '_MAIN_DAGGER'
    }
  ],
  Hammer: [
    {
      name: 'Hammer',
      value: '_MAIN_HAMMER'
    }
  ],
  Mace: [
    {
      name: 'Mace',
      value: '_MAIN_MACE'
    }
  ],
  Quarterstaff: [
    {
      name: 'Quarterstaff',
      value: '_2H_QUARTERSTAFF'
    }
  ],
  Spear: [
    {
      name: 'Spear',
      value: '_MAIN_SPEAR'
    }
  ],
  Sword: [
    {
      name: 'Broadsword',
      value: '_MAIN_SWORD'
    }
  ],
  Book: [
    {
      name: 'Tome of Spells',
      value: '_OFF_BOOK'
    },
    {
      name: 'Muisak',
      value: '_OFF_DEMONSKULL_HELL'
    }
  ],
  Horn: [
    {
      name: 'Mistcaller',
      value: '_OFF_HORN_KEEPER'
    }
  ],
  Orb: [
    {
      name: 'Eye of Secrets',
      value: '_OFF_ORB_MORGANA'
    }
  ],
  Shield: [
    {
      name: 'Shield',
      value: '_OFF_SHIELD'
    }
  ],
  Torch: [
    {
      name: 'Torch',
      value: '_OFF_TORCH'
    }
  ],
  Totem: [
    {
      name: 'Taproot',
      value: '_OFF_TOTEM_KEEPER'
    }
  ],
  Bow: [
    {
      name: 'Bow',
      value: '_2H_BOW'
    }
  ],
  Crossbow: [
    {
      name: 'Crossbow',
      value: '_2H_CROSSBOW'
    }
  ]
};

export default ItemTypes;
