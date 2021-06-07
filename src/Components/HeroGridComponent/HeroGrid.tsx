import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
// import HeroInfo from '../../Common/Interfaces'
import axios from 'axios'
import HeroCard from '../HeroCardComponent/HeroCard'

interface heroState {
    primaryAttr: string;
    heroName: string;
    heroImage: string;
    HP: number;
    MP: number;
    healthRegen: number;
    manaRegen: number;
    strength: number;
    agility: number;
    intelligence: number;
}

interface heroAPI {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: string[];
    img: string;
    icon: string;
    base_health: number;
    base_health_regen: number;
    base_mana: number;
    base_mana_regen: number;
    base_armor: number;
    base_mr: number;
    base_attack_min: number;
    base_attack_max: number;
    base_str: number;
    base_agi: number;
    base_int: number;
    str_gain: number;
    agi_gain: number;
    int_gain: number;
    attack_range: number;
    projectile_speed: number;
    attack_rate: number;
    move_speed: number;
    turn_rate: number | null;
    cm_enable: boolean;
    legs: number;
}


function HeroGrid() {

    const [isLoading, setIsLoading] = useState(true);
    const [Hero, setHero] = useState<heroState[]>([]);
    // const [heroInfoArray, setHeroInfoArray] = useState<heroAPI[]>([{
    //     id: 0, name: '', localized_name: '', primary_attr: '', attack_type: '', roles: [],
    //     img: '', icon: '', base_health: 0, base_health_regen: 0, base_mana: 0, base_mana_regen: 0, base_armor: 0, base_mr: 0, base_attack_min: 0, base_attack_max: 0,
    //     base_str: 0, base_agi: 0, base_int: 0, str_gain: 0, agi_gain: 0, int_gain: 0, attack_range: 0, projectile_speed: 0, attack_rate: 0, move_speed: 0, turn_rate: 0,
    //     cm_enable: false, legs: 0
    // }])

    const [testArray, setTestArray] = useState<heroAPI | any>();

    useEffect(() => {

        getData();

        if (testArray) {
            console.log('state is set')
            //console.log(testArray)
            const heroArray: [string, heroAPI][] = Object.entries(testArray);
            // console.log(heroArray[0][1].localized_name);
            // console.log(heroArray[1][1].localized_name);
            // console.log(heroArray[2][1].localized_name);
            //console.log(heroArray.length)
            //setHeroInfoArray(testArray)
            let harr: heroState[] = []
            heroArray.forEach((ha: [string, heroAPI], i: Number) => {
                if (!ha) {
                    return;
                }
                const test1: heroState = {
                    primaryAttr: ha[1].primary_attr, heroName: ha[1].localized_name, heroImage: ha[1].img, HP: ha[1].base_health, MP: ha[1].base_mana,
                    healthRegen: ha[1].base_health_regen, manaRegen: ha[1].base_mana_regen, strength: ha[1].base_str, agility: ha[1].base_agi, intelligence: ha[1].base_int
                }
                harr.push(test1)
                //console.log(ha[1].name)

            })

            if (heroArray.length !== Hero.length) {
                setHero(harr)
            }
            // console.log(harr)
            // const test: heroState = {
            //     primaryAttr: heroArray[0][1].primary_attr, heroName: heroArray[0][1].localized_name, heroImage: heroArray[0][1].img,
            //     HP: heroArray[0][1].base_health, MP: heroArray[0][1].base_mana, healthRegen: heroArray[0][1].base_health_regen, manaRegen: heroArray[0][1].base_mana_regen
            // };
            // setHero([test])

        } else {
            console.log('state is not set')
        }

    }, [isLoading])

    async function getData() {
        await axios('https://api.opendota.com/api/constants/heroes')
            .then(res => {
                console.log('fetch use effect ran');
                setTestArray(res.data);

            }).catch(err => console.error(err))
            .finally(() => {
                setIsLoading(false);
            })
    }

    var Cards: JSX.Element[] = [];

    if (Hero.length) {
        console.log('if statement ran')
        console.log(Hero)
        Cards.push(
            <Grid key={"card_" + 0} item>
                <HeroCard
                    primaryAttr={Hero[0].primaryAttr}
                    heroName={Hero[0].heroName}
                    heroImage={Hero[0].heroImage}
                    HP={Hero[0].HP}
                    MP={Hero[0].MP}
                    healthRegen={Hero[0].healthRegen}
                    manaRegen={Hero[0].manaRegen}
                    strength={Hero[0].strength}
                    agility={Hero[0].agility}
                    intelligence={Hero[0].intelligence} />
            </Grid>
        )

        Cards.push(
            <Grid key={"card_" + 1} item>
                <HeroCard
                    primaryAttr={Hero[1].primaryAttr}
                    heroName={Hero[1].heroName}
                    heroImage={Hero[1].heroImage}
                    HP={Hero[1].HP}
                    MP={Hero[1].MP}
                    healthRegen={Hero[1].healthRegen}
                    manaRegen={Hero[1].manaRegen}
                    strength={Hero[1].strength}
                    agility={Hero[1].agility}
                    intelligence={Hero[1].intelligence} />
            </Grid>
        )
    }

    return (
        <div>
            <Grid container spacing={3}>
                {Cards}

                {/* <button onClick={tfdata}> click here</button> */}
                {/* {Hero.length} */}
            </Grid>

        </div>
    )
}

export default HeroGrid
