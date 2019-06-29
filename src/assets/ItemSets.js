let items = [
    {
        name: `Giant's Belt`,
        id: 0,
        stat: `+200 Health`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1011.png`
    },
    {
        name: `Chain Vest`,
        id: 1,
        stat: `+20 Armor`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1031.png`
    },
    {
        name: `B. F. Sword`,
        id: 2,
        stat: `+40 Attack Damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1038.png`
    },
    {
        name: `Recurve Bow`,
        id: 3,
        stat: `+15% Attack Speed`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1043.png`
    },
    {
        name: `Negatron Cloak`,
        id: 4,
        stat: `+20 Magic Resist`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1057.png`
    },
    {
        name: `Needlessly Large Rod`,
        id: 5,
        stat: `+20% Spell Damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1058.png`
    },
    {
        name: `Tear of the Godess`,
        id: 6,
        stat: `+20 Starting Mana`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3070.png`
    },
    {
        name: `Spatula`,
        id: 7,
        stat: `It must do something...`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/spatula.png`
    },
    {
        name: `Guardian Angel`,
        id: 8,
        stat: `Revives champ with 500 Health`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3026.png`
    },
    {
        name: `Infinity Edge`,
        id: 9,
        stat: `Critical Strikes deal +100% damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3031.png`
    },
    {
        name: `Seraph's Embrace`,
        id: 10,
        stat: `Regain 20 mana each time a spell is cast`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3040.png`
    },
    {
        name: `Phantom Dancer`,
        id: 11,
        stat: `Wearer dodges all critical strikes`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3046.png`
    },
    {
        name: `The Bloodthirster`,
        id: 12,
        stat: `Attacks heal for 35% of the damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3072.png`
    },
    {
        name: `Thornmail`,
        id: 13,
        stat: `Reflect 35% of the damage taken from attacks`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3075.png`
    },
    {
        name: `Warmog's Armor`,
        id: 14,
        stat: `Regenerate 3% max health per second`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3083.png`
    },
    {
        name: `Runaan's Hurricane`,
        id: 15,
        stat: `Attacks 2 additional enemies. These additional attacks deal 50% damage.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3085.png`
    },
    {
        name: `Statikk Shiv`,
        id: 16,
        stat: `Every 3rd attack deals 100 splash magical damage.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3087.png`
    },
    {
        name: `Rabadon's Deathcap`,
        id: 17,
        stat: `Spell Damage +50% AP`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3089.png`
    },
    {
        name: `Rapidfire Cannon`,
        id: 18,
        stat: `Wearer's attacks cannot be dodged. Attack Range is doubled.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3094.png`
    },
    {
        name: `Redemption`,
        id: 19,
        stat: `On death, heal all nearby allies for 1000 Health.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3107.png`
    },
    {
        name: `Knight's Vow`,
        id: 20,
        stat: `Wearer is also a Knight.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3109.png`
    },
    {
        name: `Frozen Heart`,
        id: 21,
        stat: `Adjacent enemies Attack Speed is 20% Slower.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3110.png`
    },
    {
        name: `Guinsoo's Rageblade`,
        id: 22,
        stat: `Attacks grant 3% Attack Speed. Stacks infinitely.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3124.png`
    },
    {
        name: `Youmuu's Ghostblade`,
        id: 23,
        stat: `Wearer is also an Assassin.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3142.png`
    },
    {
        name: `Hextech Gunblade`,
        id: 24,
        stat: `Heal for 25% of all damage dealt.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3146.png`
    },
    {
        name: `Blade of the Ruined King`,
        id: 25,
        stat: `Wearer is also a Blademaster.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3153.png`
    },
    {
        name: `Morellonomicon`,
        id: 26,
        stat: `Spells burn 5% of the enemy max HP per second.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3165.png`
    },
    {
        name: `Locket of the Iron Solari`,
        id: 27,
        stat: `On start of combat, adjacent allies get 200 shield.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3190.png`
    },
    {
        name: `Luden's Echo`,
        id: 28,
        stat: `Deal 200 splash damage on ability hit.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3185.png`
    },
    {
        name: `Titanic Hydra`,
        id: 29,
        stat: `Attacks deal 10% of the wearer's max HP as splash.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3748.png`
    },
    {
        name: `Sword of the Divine`,
        id: 30,
        stat: `Every 1s gain a 5% chance to gain 100% Critical Strike.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/swordofthedivine.png`
    },
    {
        name: `Zeke's Herald`,
        id: 31,
        stat: `Adjacent allies gain +10% Attack Speed.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/zekesherald.png`
    },
    {
        name: `Spear of Shojin`,
        id: 32,
        stat: `After casting, gain 15% of max mana per attack.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/spearofshojin.png`
    },
    {
        name: `Zephyr`,
        id: 33,
        stat: `On start of combat banish an enemy.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/zephyr.png`
    },
    {
        name: `Red Buff`,
        id: 34,
        stat: `Attacks burn for 2.5% max HP and disable healing.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/redbuff.png`
    },
    {
        name: `Frozen Mallet`,
        id: 35,
        stat: `Wearer is also a Glacial.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/frozenmallet.png`
    },
    {
        name: `Sword Breaker`,
        id: 36,
        stat: `Attacks have a chance to disarm.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/swordbreaker.png`
    },
    {
        name: `Cursed Blade`,
        id: 37,
        stat: `Attacks have a low chance to Shrink (-1 enemy star level 1).`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/cursedblade.png`
    },
    {
        name: `Ionic Spark`,
        id: 38,
        stat: `Whenever an enemy casts a spell they take 200 damage.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/ionicspark.png`
    },
    {
        name: `Hush`,
        id: 39,
        stat: `Attacks have a high chance to Silence.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/hush.png`
    },
    {
        name: `Yuumi`,
        id: 40,
        stat: `Wearer is also a Sorcerer.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/yuumi.png`
    },
    {
        name: `Darkin`,
        id: 41,
        stat: `Wearer is also a Demon.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/darkin.png`
    },
    {
        name: `Force of Nature`,
        id: 42,
        stat: `Gain +1 team size.`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/forceofnature.png`
    },
];

let builds = [
    {
        name: `Giant's Belt`,
        index: 0,
        builds: [
            {
                withItem: 0,
                intoItem: 14,
            },
            {
                withItem: 1,
                intoItem: 34,
            },
            {
                withItem: 2,
                intoItem: 31,
            },
            {
                withItem: 3,
                intoItem: 29,
            },
            {
                withItem: 4,
                intoItem: 33,
            },
            {
                withItem: 5,
                intoItem: 26,
            },
            {
                withItem: 6,
                intoItem: 19,
            },
            {
                withItem: 7,
                intoItem: 35,
            }
        ]
    },
    {
        name: 'chainvest',
        index: 1,
        builds: [
            {
                withItem: 0,
                intoItem: 34,
            },
            {
                withItem: 1,
                intoItem: 13,
            },
            {
                withItem: 2,
                intoItem: 8,
            },
            {
                withItem: 3,
                intoItem: 11,
            },
            {
                withItem: 4,
                intoItem: 36,
            },
            {
                withItem: 5,
                intoItem: 27,
            },
            {
                withItem: 6,
                intoItem: 21,
            },
            {
                withItem: 7,
                intoItem: 20,
            }
        ]
    },
    {
        name: 'bfsword',
        index: 2,
        builds: [
            {
                withItem: 0,
                intoItem: 31,
            },
            {
                withItem: 1,
                intoItem: 8,
            },
            {
                withItem: 2,
                intoItem: 9,
            },
            {
                withItem: 3,
                intoItem: 30,
            },
            {
                withItem: 4,
                intoItem: 12,
            },
            {
                withItem: 5,
                intoItem: 24,
            },
            {
                withItem: 6,
                intoItem: 32,
            },
            {
                withItem: 7,
                intoItem: 23,
            }
        ]
    },
    {
        name: 'recurvebow',
        index: 3,
        builds: [
            {
                withItem: 0,
                intoItem: 29,
            },
            {
                withItem: 1,
                intoItem: 11,
            },
            {
                withItem: 2,
                intoItem: 30,
            },
            {
                withItem: 3,
                intoItem: 18,
            },
            {
                withItem: 4,
                intoItem: 37,
            },
            {
                withItem: 5,
                intoItem: 22,
            },
            {
                withItem: 6,
                intoItem: 16,
            },
            {
                withItem: 7,
                intoItem: 25,
            }
        ]
    },
    {
        name: 'negatroncloak',
        index: 4,
        builds: [
            {
                withItem: 0,
                intoItem: 33,
            },
            {
                withItem: 1,
                intoItem: 36,
            },
            {
                withItem: 2,
                intoItem: 12,
            },
            {
                withItem: 3,
                intoItem: 37,
            },
            {
                withItem: 4,
                intoItem: 3,
            },
            {
                withItem: 5,
                intoItem: 38,
            },
            {
                withItem: 6,
                intoItem: 39,
            },
            {
                withItem: 7,
                intoItem: 15,
            }
        ]
    },
    {
        name: 'rod',
        index: 5,
        builds: [
            {
                withItem: 0,
                intoItem: 26,
            },
            {
                withItem: 1,
                intoItem: 27,
            },
            {
                withItem: 2,
                intoItem: 24,
            },
            {
                withItem: 3,
                intoItem: 22,
            },
            {
                withItem: 4,
                intoItem: 38,
            },
            {
                withItem: 5,
                intoItem: 17,
            },
            {
                withItem: 6,
                intoItem: 28,
            },
            {
                withItem: 7,
                intoItem: 40,
            }
        ]
    },
    {
        name: 'tear',
        index: 6,
        builds: [
            {
                withItem: 0,
                intoItem: 19,
            },
            {
                withItem: 1,
                intoItem: 21,
            },
            {
                withItem: 2,
                intoItem: 32,
            },
            {
                withItem: 3,
                intoItem: 16,
            },
            {
                withItem: 4,
                intoItem: 39,
            },
            {
                withItem: 5,
                intoItem: 28,
            },
            {
                withItem: 6,
                intoItem: 10,
            },
            {
                withItem: 7,
                intoItem: 41,
            }
        ]
    },
    {
        name: 'spatula',
        index: 7,
        builds: [
            {
                withItem: 0,
                intoItem: 35,
            },
            {
                withItem: 1,
                intoItem: 20,
            },
            {
                withItem: 2,
                intoItem: 23,
            },
            {
                withItem: 3,
                intoItem: 25,
            },
            {
                withItem: 4,
                intoItem: 15,
            },
            {
                withItem: 5,
                intoItem: 40,
            },
            {
                withItem: 6,
                intoItem: 41,
            },
            {
                withItem: 7,
                intoItem: 42,
            }
        ]
    },
];

export const Items = items;
export const Builds = builds;
export const BaseItems = items.slice(0, 8);